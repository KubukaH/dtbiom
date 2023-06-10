import { useState } from 'react';
import { Tab } from '@headlessui/react';

import { joinClassNames } from "../../_components";

const acceptStyle = `text-white bg-indigo-500 hover:bg-indigo-800 disabled:opacity-50 disabled:cursor-not-allowed`
const rejectStyle = `ml-2 bg-yellow-200 hover:bg-yellow-400 disabled:opacity-50 disabled:cursor-not-allowed`

export function Template({ Complete, Pending, Rejected, renderIcon, modifyTransaction, transactionRemove }) {
  let [categories] = useState({
    Recent: [
      Complete.map(x => ({
        id: x.id,
        email: x.email,
        names: x.names,
        message: x.message,
        status: x.status
      })),
    ],
    Pending: [
      Pending.map(x => ({
        id: x.id,
        email: x.email,
        names: x.names,
        message: x.message,
        status: x.status
      }))
    ],
    Rejected: [
      Rejected.map(x => ({
        id: x.id,
        email: x.email,
        names: x.names,
        message: x.message,
        status: x.status
      })),
    ],
  });

  return (
    <div className="w-full max-w-md px-2 py-16 sm:px-0">
      <Tab.Group>
        <Tab.List className="flex space-x-1 rounded-xl bg-blue-900/20 p-1">
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
              {category}
            </Tab>
          ))}
        </Tab.List>
        <Tab.Panels className="mt-2">
          {Object.values(categories).map((posts, idx) => (
            <Tab.Panel
              key={idx}
              className={joinClassNames(
                'rounded-xl bg-white p-3',
                'ring-white ring-opacity-60 ring-offset-2 ring-offset-blue-400 focus:outline-none focus:ring-2'
              )}
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
