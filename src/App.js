import CartList from "./components/CartList/CartList";
import Receipt from "./components/Receipt/Receipt";
import { useState } from "react";
import "./App.css";
import { AppContext } from "./AppContext";

const App = () => {
  const [total, setTotal] = useState(0);
  const [subTotal, setSubTotal] = useState(0);
  const [deliveryCost, setDeliveryCost] = useState(4.95);
  const [discount, setDiscount] = useState(0);
  const [hasManyRedPlates, setHasManyRedPlates] = useState(false);
  const [data, setData] = useState([
    {
      id: 1,
      name: "Red Plate",
      code: "R01",
      price: 32.95,
      quantity: 0,
      src: "https://www.gompels.co.uk/image/cache/data/31500-1500x1500.webp",
      total: 0,
      subPrice: 32.95,
      subTotal: 0,
    },
    {
      id: 2,
      name: "Green Plate",
      code: "G01",
      price: 24.95,
      quantity: 0,
      src: "https://www.gompels.co.uk/image/cache/data/54940-400x400.webp",
      total: 0,
      subPrice: 24.95,
      subTotal: 0,
    },
    {
      id: 3,
      name: "Blue Plate",
      code: "B01",
      price: 7.95,
      quantity: 0,
      src: "https://www.gompels.co.uk/image/cache/data/57157-400x400.webp",
      total: 0,
      subPrice: 7.95,
      subTotal: 0,
    },
  ]);

  return (
    <div className="App">
      <AppContext.Provider
        value={{
          total,
          subTotal,
          deliveryCost,
          discount,
          hasManyRedPlates,
          data,
          setTotal,
          setSubTotal,
          setDeliveryCost,
          setDiscount,
          setHasManyRedPlates,
          setData,
        }}
      >
        <CartList />
        <Receipt />
      </AppContext.Provider>
    </div>
  );
};

export default App;
