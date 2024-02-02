import useNetworkStatus from "./useNetwork";
const Demo = () => {
  const { View } = useNetworkStatus();
  return <div>{View}</div>;
};

export default Demo;
