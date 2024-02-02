import { useEffect, useState } from "react";
import { useLottie } from "lottie-react";
import online from "./online.json";
import offline from "./offline.json";
import { toast } from "react-toastify";
const useNetworkStatus = () => {
  const [networkStatus, setNetworkStatus] = useState(true);

  useEffect(() => {
    const changeStatus = () => {
      setNetworkStatus(navigator.onLine);
      navigator.onLine ? toast("Wow so easy!") : toast("check connection");
    };
    window.addEventListener("online", changeStatus);
    window.addEventListener("offline", changeStatus);
    return () => {
      window.removeEventListener("online", changeStatus);
      window.removeEventListener("offline", changeStatus);
    };
  }, []);
  const optionsOnline = {
    animationData: networkStatus ? online : offline,
    loop: true,
  };

  const { View } = useLottie(optionsOnline);
  return { View };
};

export default useNetworkStatus;
