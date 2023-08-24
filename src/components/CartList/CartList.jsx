import React, { useContext, useEffect } from "react";
import CartItem from "../CartItem/CartItem";
import { AppContext } from "../../AppContext";
import { getTwoDecimalDigits } from "../Utils";
import "./CartList.css";

const CartList = () => {
  const {
    setTotal,
    setSubTotal,
    setDiscount,
    deliveryCost,
    data,
    setData,
    setDeliveryCost,
    total,
    setHasManyRedPlates,
  } = useContext(AppContext);

  const calculateTotal = (array) => {
    //  After Discount
    const total = getTwoDecimalDigits(
      array.reduce((acc, value) => {
        return acc + value.total;
      }, 0) + deliveryCost
    );

    //  Before Discount
    const subTotal = getTwoDecimalDigits(
      array.reduce((acc, value) => {
        return acc + value.subTotal;
      }, 4.95)
    );

    const discountCost = getTwoDecimalDigits(subTotal - total);

    const numberOfRedPlates = array.find((value) => {
      return value.code === "R01";
    }).quantity;

    setData(array);
    if (total === deliveryCost) {
      setTotal(0);
      setSubTotal(0);
      setDiscount(0);
    } else {
      setTotal(total);
      setSubTotal(subTotal);
      setDiscount(discountCost);
      setHasManyRedPlates(numberOfRedPlates > 1);
    }
  };

  const addItem = (code) => {
    const isRed = code === "R01";
    const mappedArray = data.map((item) => {
      return code === item.code
        ? {
            ...item,
            quantity: ++item.quantity,
            subPrice:
              isRed && ++item.quantity % 2 === 0 ? item.price / 2 : item.price,
            total: getTwoDecimalDigits(item.total + item.subPrice),
            subTotal: getTwoDecimalDigits(item.subTotal + item.price),
          }
        : { ...item };
    });
    calculateTotal(mappedArray);
  };

  const removeItem = (code) => {
    const isRed = code === "R01";
    const mappedArray = data.map((item) => {
      const subPrice =
        isRed && item.quantity % 2 === 0 ? item.price / 2 : item.price;
      return code === item.code
        ? {
            ...item,
            quantity: --item.quantity,
            subPrice,
            total: getTwoDecimalDigits(item.total - subPrice),
            subTotal: getTwoDecimalDigits(item.total - item.price),
          }
        : { ...item };
    });
    calculateTotal(mappedArray);
  };

  //  update delivery cost
  useEffect(() => {
    if (total - deliveryCost < 50) {
      setDeliveryCost(4.95);
    } else if (total - deliveryCost < 90) {
      setDeliveryCost(2.95);
    } else {
      setDeliveryCost(0);
    }
  }, [total]);

  return (
    <div>
      <table>
        <tr>
          <th></th>
          <th>Description</th>
          <th>Price</th>
          <th>Quantity</th>
          <th>Total</th>
        </tr>
        {data.length &&
          data.map((item, index) => {
            return (
              <CartItem
                key={`${index}_${item.id}`}
                item={item}
                addItem={addItem}
                removeItem={removeItem}
              />
            );
          })}
      </table>
    </div>
  );
};

export default CartList;
