import { useState } from "react";
import { streamers } from "../../data/stremers";
import { ReactControls } from "../ReactControls/ReactControls";
import { ReactCard } from "./../ReactCard/ReactCard";

export const Slide = () => {
  const [dev, setDev] = useState({});
  

  return (
    <>
      <ReactCard devInfo={dev} />
      {streamers.map((dev) => {
        return <ReactControls handler={() => setDev(dev)} />;
      })}
    </>
  );
};
