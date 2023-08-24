import { AppContext } from "./AppContext";
const App = () => {
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
      </AppContext.Provider>
    </div>
  );
};

export default App; 
