import { useEffect, useState } from "react";
import { useLottie } from "lottie-react";
import online from "./online.json";
import offline from "./offline.json";
const NetworkStatus = () => {
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
  };
  const { View } = useLottie(networkStatus ? optionsOnline : optionsOffline);
  return (
    <div>
      <p>
        {networkStatus ? <div>{View}online</div> : <div>{View}offline</div>}
      </p>
    </div>
  );
};

export default NetworkStatus;
