import { HeartIcon } from "@heroicons/react/20/solid";
import { useEffect, useState } from "react";
import { Link } from "@reach/router";

import profile from "../assets/imgs/profile.png";
import { MessageCard } from ".";
import { FooterSection } from "../foot";
import client, { allCollections, getSetRef } from "../_db/operations";

export function FanZone() {
  const prf = new URL(profile, import.meta.url);
  const [listTransaction, setListTransaction] = useState([]);

  const colName = "Message";

  const transactionSetRef = getSetRef(colName);
  const streamOptions = { fields: [ 'action', 'document' ] };
  
  const streamClient = client.stream(transactionSetRef, streamOptions)
    .on('start', start => { 
      console.log('start', start);
    })
    .on('set', set => {
      if(set.action === 'remove') {
        console.log('remove', set.document.ref.value.id);
        setListTransaction(
          listTransaction.filter(item => item.id !== set.document.ref.value.id)
        );
      }
      if(set.action === 'add') { 
        console.log('add', set.document);
        setListTransaction([...listTransaction, {
          id: set.document.ref.value.id,
          status: 'Pending',
        }]);
      }
    });
  
  useEffect(() => {
    getAllTransaction();
  }, []);
  
  useEffect(() => {
    // eslint-disable-next-line react-hooks/exhaustive-deps
    streamClient.start();
    return function cleanUp() {
      streamClient.close();
    }
  });

  const getAllTransaction = async () => { 
    const transactions = await allCollections(colName);

    const allTransaction = [];
    transactions.data.forEach(element => {
      allTransaction.push({
        id: element.ref.id,
        ...element.data
      });
    });
    setListTransaction(allTransaction);
  }

  return (
    <>
    <section>
      <div className="mx-auto max-w-screen-xl px-4 py-8 sm:px-6 lg:px-8">
        <h2 className="flex mb-8 text-2xl lg:text-5xl text-purple-500 flex-row" >
          The Fan Z
          <span><HeartIcon className="inline-flex h-4 w-4 lg:h-8 lg:w-8 fill-pink-600" /></span>
          ne
        </h2>
        <div
          className="[column-fill:_balance] sm:columns-2 sm:gap-6 lg:columns-3 lg:gap-8"
        >
          {
            listTransaction !== 0 ? listTransaction.map((msg) => (
              <MessageCard msgData={msg} profp={prf} key={msg.id} />
            )) : (
              <div className="mb-8 sm:break-inside-avoid">
                <blockquote className="rounded-xl bg-gray-50 p-6 shadow">
                  <p className="leading-relaxed text-gray-700">
                    No Data from DB
                  </p>
                </blockquote>
              </div>
            )
          }

        </div>
      </div>
    </section>
    <FooterSection />
    </>
  );
}