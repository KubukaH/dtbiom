import { HeartIcon } from "@heroicons/react/20/solid";
import { useEffect, useState } from "react";
import client, { allCollections, getSetRef, newCollection } from "../_db/operations";
import { Link } from "@reach/router";

export const MessageCard = ({ msgData, profp }) => {
  const [listLikes, setListLikes] = useState([]);

  const colName = "Like";

  const likeSetRef = getSetRef(colName);
  const streamOptions = { fields: [ 'action', 'document' ] };

  const streamClient = client.stream(likeSetRef, streamOptions)
    .on('start', start => { 
      console.log('start', start);
    })
    .on('set', set => {
      if(set.action === 'remove') {
        console.log('remove', set.document.ref.value.id);
        setListLikes(
          listLikes.filter(item => item.id !== set.document.ref.value.id)
        );
      }
      if(set.action === 'add') { 
        console.log('add', set.document);
        setListLikes([...listLikes, {
          id: set.document.ref.value.id,
          status: 'Pending',
        }]);
      }
    });
  
  useEffect(() => {
    getAllLikes();
  }, []);

  useEffect(() => {
    // eslint-disable-next-line react-hooks/exhaustive-deps
    streamClient.start();
    return function cleanUp() {
      streamClient.close();
    }
  });

  const getAllLikes = async () => { 
    const transactions = await allCollections(colName);

    const allTransaction = [];
    transactions.data.forEach(element => {
      allTransaction.push({
        id: element.ref.id,
        ...element.data
      });
    });
    setListLikes(allTransaction.filter(x => x.likedMessage === msgData.id));
  }

  const LikeBtn = async (e) => {
    e.preventDefault();
    await newCollection({
      likeBy: msgData.names,
      likedMessage: msgData.id,
      likedOn: new Date()
    },colName);
  }

  return (
    <div className="mb-8 sm:break-inside-avoid">
      <blockquote className="rounded-xl bg-gray-50 p-6 shadow">
        <p className="leading-relaxed text-gray-700">
          {msgData.message}
        </p>
      </blockquote>

      <div className="mt-4 flex items-center gap-4">
        <img
          alt="Woman"
          src={profp}
          className="h-12 w-12 rounded-full object-cover"
        />

        <div className="text-sm">
          <p className="font-medium">{msgData.names}</p>
          <p className="mt-1">
            {listLikes 
              ? `${listLikes.map(x => x).length} Likes` 
              : 'No likes'  
            }
          </p>
        </div>

        <HeartIcon 
          className="h-4 w-4 text-pink-600 hover:h-10 hover:w-10 duration-300 cursor-pointer"
          onClick={LikeBtn}
        />
      </div>
    </div>
  );
}
