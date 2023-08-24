import React, { useContext, useEffect } from "react";
import { AppContext } from "../../AppContext";
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
