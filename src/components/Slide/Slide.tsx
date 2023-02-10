import { useState } from "react";
import { streamers } from "../../data/stremers";
import { ReactControls } from "../ReactControls/ReactControls";
import { ReactCard } from "./../ReactCard/ReactCard";
import "./index.css";

export const Slide = () => {
  const [dev, setDev] = useState({});

  return (
    <>
      <ReactCard devInfo={dev} />
      <div className="controls-container">
        {streamers.map((dev) => {
          return (
            <ReactControls key={Math.random()} handler={() => setDev(dev)} />
          );
        })}
      </div>
    </>
  );
};
