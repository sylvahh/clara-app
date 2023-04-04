import React, { useReducer } from 'react';
import StoreContext from './StoreContext';

const storeOptions = [
  {
    id: '1',
    label: 'VI- Lagos (Sub region)',
    path: 'caas',
  },
  {
    id: '2',
    label: 'Ikoyi - Lagos(Sub-region)',
    path: 'caas',
  },
  {
    id: '3',
    label: 'Ajeromi-Ifelodun Lagos (Sub-region)',
    path: 'caas',
  },
  {
    id: '4',
    label: 'Ajah-Chevero Lagos (Sub region)',
    path: 'caas',
  },
  {
    id: '5',
    label: 'Ikeja- Lagos (Sub-region)',
    path: 'caas',
  },
  {
    id: '6',
    label: 'Surulere -(Sub region)',
    path: 'caas',
  },
  {
    id: '7',
    label: 'Yaba- Lagos (Sub-region)',
    path: 'caas',
  },
  {
    id: '8',
    label: 'Lagos Mainland (Ebute-metta Lagos region)',
    path: 'caas',
  },
  {
    id: '9',
    label: 'Alimosho',
    path: 'caas',
  },
  {
    id: '10',
    label: 'Mushin Lagos (Sub-region)',
    path: 'caas',
  },
];

// VI- Lagos (Sub region)

// Ikoyi - Lagos(Sub-region)

// Ajeromi-Ifelodun Lagos (Sub-region)

// Ajah-Chevero Lagos (Sub region)

//  Surulere -(Sub region)

// Ikeja- Lagos (Sub-region

// Alimosho- Lagos (Sub-region)

// Somolu-Lagos (Sub-region)

// Amuwo-Odofin  - Lagos (Sub-region)

// Yaba- Lagos (Sub-region)

// Lagos Mainland (Ebute-metta Lagos region)

// Alimosho

// Kosofe Lagos (Sub-region)

// Mushin Lagos (Sub-region)

// Oshodi Lagos (Sub-region)

// Ojo- Lagos (Sub-region)

// Illupeju Lagos (Sub-region)

interface StoreProviderProps {
  children: React.ReactNode;
}

interface Option {
  id: string;
  label: string;
  path: string;
}

// interface Props {
//   options: Option[];
// }

type StoreItem = {
  id: string;
  name: string;
  price: number;
  amount: number;
};

type StoreState = {
  items: StoreItem[];
  totalAmount: number;
  // options: Option
};

type StoreAction = { type: 'ADD'; item: StoreItem } | { type: 'REMOVE'; id: string };

const defaultStoreState: StoreState = {
  items: [],
  totalAmount: 0,
  // options : storeOptions
};

const storeReducer = (state: StoreState, action: StoreAction): StoreState => {
  if (action.type === 'ADD') {
    const updatedTotalAmount = state.totalAmount + action.item.price * action.item.amount;

    let updatedItems: StoreItem[];
    const existingItemIdx = state.items.findIndex((item) => item.id === action.item.id);
    const existingItem = state.items[existingItemIdx];

    if (existingItem) {
      const updatedItem = {
        ...existingItem,
        amount: existingItem.amount + action.item.amount,
      };
      updatedItems = [...state.items];
      updatedItems[existingItemIdx] = updatedItem;
    } else {
      updatedItems = state.items.concat(action.item);
    }

    return {
      items: updatedItems,
      totalAmount: updatedTotalAmount,
    };
  }
  if (action.type === 'REMOVE') {
    const existingItemIdx = state.items.findIndex((item) => item.id === action.id);
    const existingItem = state.items[existingItemIdx];
    const updatedTotalAmount = state.totalAmount - existingItem.price;

    let updatedItems: StoreItem[];
    if (existingItem.amount === 1) {
      updatedItems = state.items.filter((item) => item.id !== action.id);
    } else {
      const updatedItem = { ...existingItem, amount: existingItem.amount - 1 };
      updatedItems = [...state.items];
      updatedItems[existingItemIdx] = updatedItem;
    }
    return {
      items: updatedItems,
      totalAmount: updatedTotalAmount,
    };
  }
  return defaultStoreState;
};

const StoreProvider: React.FC<StoreProviderProps> = (props) => {
  const [storeState, dispatchCartAction] = useReducer(storeReducer, defaultStoreState);

  const addItemHandler = (item: StoreItem) => {
    dispatchCartAction({ type: 'ADD', item: item });
  };
  const removeItem = (id: string) => {
    dispatchCartAction({ type: 'REMOVE', id: id });
  };

  const storeContextValue = {
    items: storeState.items,
    totalAmount: storeState.totalAmount,
    options: storeOptions,
    addItem: addItemHandler,
    removeItem: removeItem,
  };

  return <StoreContext.Provider value={storeContextValue}>{props.children}</StoreContext.Provider>;
};

export default StoreProvider;
