import React, { useState } from 'react';
import AddItem from './AddItem';
import ItemDetail from './ItemDetail';
import { FormProvider } from '../Context/FormContext';

export default function Add() {
  const [showItemDetail, setShowItemDetail] = useState(false);

  return (
    <FormProvider>
      <div className="min-h-screen bg-gray-50">
        {!showItemDetail ? (
          <AddItem onShowDetails={() => setShowItemDetail(true)} />
        ) : (
          <ItemDetail onClose={() => setShowItemDetail(false)} />
        )}
      </div>
    </FormProvider>
  );
}