import { useState } from 'react';
import { useEffect, useState } from "react";

import client, { allCollections, deleteCollection, getSetRef, updateCollection } from "../../_db/operations";
import { Template } from './template';

export const FanMessages = () => {
  const [listTransaction, setListTransaction] = useState([]);
  const [state, setState] = useState({
    name: '',
    plan: 'individual',
    card: '',
    result: ''
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

  return <Template 
      Complete={listTransaction.filter(x => x.status === "Complete")} 
      Rejected={listTransaction.filter(x => x.status === "Rejected")} 
      Pending={listTransaction.filter(x => x.status === "Pending")} 
      transactionRemove={transactionRemove}
      modifyTransaction={modifyTransaction}
      renderIcon={renderIcon}
    />;

}