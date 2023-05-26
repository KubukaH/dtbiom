import { createContext, useContext, useEffect, useState } from "react";
import client, { getCollectionRef, getSetRef, allCollections } from "../_db/operations";

const MainContext = createContext(null);

const AppContext = ({ children }) => {
  const [listLikes, setListLikes] = useState([]);

  const likeSetRef = getSetRef("Like");
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
    const transactions = await allCollections("Like");

    const allTransaction = [];
    transactions.data.forEach(element => {
      allTransaction.push({
        id: element.ref.id,
        ...element.data
      });
    });
    setListLikes(allTransaction);
  }

  const value = {
    listLikes
  };

  return <MainContext.Provider value={value}>{children}</MainContext.Provider>
}

const useCTX = () => useContext(MainContext);

export { AppContext, useCTX };