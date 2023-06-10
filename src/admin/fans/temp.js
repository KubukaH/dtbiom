import { useState } from 'react';
import { Tab } from '@headlessui/react';
import { useEffect, useState } from "react";

import client, { allCollections, deleteCollection, getSetRef, updateCollection } from "../../_db/operations";
import { joinClassNames } from "../../_components";

const acceptStyle = `text-white bg-indigo-500 hover:bg-indigo-800 disabled:opacity-50 disabled:cursor-not-allowed`
const rejectStyle = `ml-2 bg-yellow-200 hover:bg-yellow-400 disabled:opacity-50 disabled:cursor-not-allowed`

export function FanMessages() {
  const [listTransaction, setListTransaction] = useState([]);
  const [state, setState] = useState({
    name: '',
    plan: 'individual',
    card: '',
    result: ''
  });
  let [categories] = useState({
    'Complete': [ listTransaction.filter(x => x.status === 'Complete').map(x => x) ],
    'Pending': [ listTransaction.filter(x => x.status === 'Pending').map(x => x) ],
    'Rejected': [ listTransaction.filter(x => x.status === 'Rejected').map(x => x) ], 
  });

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
    // streamClient.start();
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

  const modifyTransaction = async (id, status) => {
    const returnVal = await updateCollection(id, {
      status,
    }, colName);
    console.log('modifyTransaction', returnVal.data);
    setState({
      ...state,
      ...returnVal.data
    });
  }

  const transactionRemove = async (id) => { 
    console.log('deleteTransaction', id);
    await deleteCollection(id, colName);
  }

  const renderIcon = (status) => {
    switch(status) { 
      case 'Pending':
        return (
          <span className="h-9 flex-inline items-center">
            <span className="relative z-10 w-8 h-8 flex items-center justify-center bg-indigo-600 rounded-full group-hover:bg-indigo-800">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </span>
          </span>
        )
      case 'Complete':
        return (
          <span className="h-9 flex-inline items-center">
            <span className="relative z-10 w-8 h-8 flex items-center justify-center bg-indigo-600 rounded-full group-hover:bg-indigo-800">
              <svg className="w-5 h-5 text-white" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
              </svg>
            </span>
          </span>
        )
      case 'Rejected':
        return (
          <span className="h-9 flex-inline items-center">
            <span className="relative z-10 w-8 h-8 flex items-center justify-center bg-red-600 rounded-full group-hover:bg-indigo-800">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-white" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM7 9a1 1 0 000 2h6a1 1 0 100-2H7z" clipRule="evenodd" />
              </svg>
            </span>
          </span>
        )
      default:
        return '';
    }
  }

  return (
    <div className="mx-auto h-full w-[95%] my-4 rounded-lg shadow bg-white">
      <Tab.Group>
        <div className="flex flex-column justify-center items-center w-full bg-gradient-to-r from-fuchsia-900 to-purple-700 overflow-hidden p-2 rounded-t-lg">
          <Tab.List className="flex w-full space-x-1 rounded-xl bg-blue-900/20 p-1">
            {Object.keys(categories).map((category) => (
              <Tab
                key={category}
                className={({ selected }) =>
                  joinClassNames(
                    'w-full rounded-lg py-2.5 text-sm font-medium leading-5 text-blue-700',
                    'ring-white ring-opacity-60 ring-offset-2 ring-offset-blue-400 focus:outline-none focus:ring-2',
                    selected
                      ? 'bg-white shadow'
                      : 'text-blue-100 hover:bg-white/[0.12] hover:text-white'
                  )
                }
              >
                {`${category} ${listTransaction.filter(x => x.status === category).length}`}
              </Tab>
            ))}
          </Tab.List>
        </div>
        <Tab.Panels className="mt-2">
          {Object.values(categories).map((posts, idx) => (
            <Tab.Panel
              key={idx}
              className='[column-fill:_balance] sm:columns-2 sm:gap-6 lg:columns-3 lg:gap-8'
            >
              {posts.map((msg) => (
                <div className="bg-white shadow rounded-lg mt-3 py-4 px-4" key={msg.id}>
                  <h3 className="px-5 text-gray-900 inline-flex text-sm">
                    <span className="mr-4">
                    {renderIcon(msg.status)}
                    </span>
                    {msg.id}
                  </h3>
                  <blockquote className="bg-gray-200">
                    <p className="text-sm text-fuchsia-400 font-light" >{msg.message}</p>
                  </blockquote>
                  <div className="flex flex-row items-end justify-between w-full space-y-3">
                    <button
                      className={joinClassNames(acceptStyle, `px-2 py-1 rounded-md text-sm`)}
                      onClick={() => modifyTransaction(msg.id, 'Complete')}
                      disabled={msg.status === 'Complete'}
                    >
                      Accept
                    </button>
                    <button 
                      className={joinClassNames(rejectStyle, `rounded-md py-1 px-2 text-sm`)}
                      onClick={() => modifyTransaction(msg.id, 'Rejected')}
                      disabled={msg.status === 'Rejected'}
                    >
                      Reject
                    </button>
          
                    <button 
                      className="px-2 py-1 ml-2 rounded-md bg-red-200 hover:bg-red-400 text-sm"
                      onClick={() => transactionRemove(msg.id)}
                    >
                      Delete
                    </button>
                  </div>
                </div>
              ))}
            </Tab.Panel>
          ))}
        </Tab.Panels>
      </Tab.Group>
    </div>
  );
}
