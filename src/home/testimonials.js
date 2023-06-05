import { HeartIcon } from "@heroicons/react/20/solid";
import { useEffect, useState } from "react";
import { Link } from "@reach/router";

import profile from "../assets/imgs/profile.png";
import { MessageCard } from "../fan";
import client, { allCollections, getSetRef } from "../_db/operations";

export function TestimonialsSection() {
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
    <section className="h-full">
      <div className="mx-auto max-w-screen-xl px-4 pt-16 pb-4 sm:px-6 lg:px-8">
        <h2 className="flex mb-8 text-2xl lg:text-5xl text-purple-500 flex-row" >
          The Fan Z
          <span><HeartIcon className="inline-flex h-5 w-5 lg:h-8 lg:w-8 fill-pink-600" /></span>
          ne
        </h2>
        <div
          className="[column-fill:_balance] sm:columns-2 sm:gap-6 lg:columns-3 lg:gap-8"
        >
          {
            listTransaction.slice(0,5).map((msg) => (
              <MessageCard msgData={msg} profp={prf} key={msg.id} />
            ))
          }
          {listTransaction.length < 1 && (
            <div className="mb-8 sm:break-inside-avoid">
              <blockquote className="inline-flex rounded-xl bg-gray-50 p-6 shadow">
                <p className="leading-relaxed text-gray-700">
                  No Data from DB
                </p>
                <div className="inline-flex items-center justify-center ml-2 space-x-2 animate-pulse">
                  <div className="w-8 h-8 bg-blue-400 rounded-full delay-75"></div>
                  <div className="w-8 h-8 bg-green-400 rounded-full delay-300"></div>
                  <div className="w-8 h-8 bg-pink-400 rounded-full delay-1000"></div>
                </div>
              </blockquote>
            </div>
          )}
          {
            listTransaction.length > 5 && 
              <div className="ml-8 mt-16 mb-8 lg:mt-32 lg:mb-20">
                <Link to="/fanzone" className="gradient-btn">See more messages</Link>
              </div>
          }
          {
            !listTransaction && 
            <div className="inline-flex items-center justify-center ml-2 space-x-2 animate-pulse">
              <div className="w-8 h-8 bg-blue-400 rounded-full delay-75"></div>
              <div className="w-8 h-8 bg-green-400 rounded-full delay-300"></div>
              <div className="w-8 h-8 bg-pink-400 rounded-full delay-1000"></div>
            </div>
          }
        </div>
      </div>
    </section>
  );
}
