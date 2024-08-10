import { useEffect, useState } from "react";
import type { MenuItem, MenuOrder } from "../types";

export default function useOrder() {
  const initialOrder = ()=>{
    const order = localStorage.getItem('order');
    if(order){
      return JSON.parse(order)
    }else{
      return []
    }
  }
  const [order, setOrder] = useState<MenuOrder[]>(initialOrder);
  const addItem = (item: MenuItem) => {
    const existItem = order.findIndex((orderItem) => orderItem.id === item.id);
    if (existItem >= 0) {
      const updateOrder = [...order];
      updateOrder[existItem].quantity += 1;
      setOrder(updateOrder);
    } else {
      const newitem = { ...item, quantity: 1 };
      setOrder([...order, newitem]);
    }
  };

  const removeItem = (id: number) => {
    const updateOrder = [...order];
    const existItem = updateOrder.findIndex((orderItem) => orderItem.id === id);
    if (existItem >= 0) {
      if (updateOrder[existItem].quantity > 1) {
        updateOrder[existItem].quantity -= 1;
      } else {
        updateOrder.splice(existItem, 1);
      }
      setOrder(updateOrder);
    }
  };
  useEffect(() => {
    localStorage.setItem("order", JSON.stringify(order));
  }, [order]);

  return {
    addItem,
    order,
    removeItem,
  };
}
