import React from 'react'

type CartItem = {
    id: string;
    name: string;
    price: number;
    amount: number;
};
  
type Option = {
  id: string;
  label: string;
  path: string;
}

const StoreContext = React.createContext({
    items:[] as CartItem[],
  totalAmount: 0,
    options:[] as Option[],
    addItem: (item: CartItem) => { },
    removeItem: (id: string)=>{}
})

export default StoreContext