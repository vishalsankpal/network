import React from "react";
import useNetworkStatus from "./useNetwork";
const Demo = () => {
  const { View } = useNetworkStatus();
  console.log(View);
  return <div>{View}</div>;
};

export default Demo;
