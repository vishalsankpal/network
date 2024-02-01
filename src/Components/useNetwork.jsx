import { useEffect, useState } from "react";
import { useLottie } from "lottie-react";
import online from "./online.json";
import offline from "./offline.json";
import { toast } from "react-toastify";
const useNetworkStatus = () => {
  const [networkStatus, setNetworkStatus] = useState(true);

  useEffect(() => {
    window.addEventListener("online", changeStatus);
    window.addEventListener("offline", changeStatus);
    return () => {
      window.removeEventListener("online", changeStatus);
      window.removeEventListener("offline", changeStatus);
    };
  }, []);
  const optionsOnline = {
    animationData: online,
    loop: true,
  };
  const optionsOffline = {
    animationData: offline,
    loop: true,
  };

  const changeStatus = () => {
    setNetworkStatus(navigator.onLine);
    console.log(navigator.onLine);
    if (navigator.onLine) {
      toast("Wow so easy!");
    } else {
      toast("check connection");
    }
  };
  const { View } = useLottie(networkStatus ? optionsOnline : optionsOffline);
  return { View };
};

export default useNetworkStatus;
