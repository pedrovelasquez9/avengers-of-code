import { useState } from "react";
import { streamers } from "../../data/stremers";
import { ReactControls } from "../ReactControls/ReactControls";
import { ReactCard } from "./../ReactCard/ReactCard";
import "./index.css";
import type { StreamerData } from "./../../data/interfaces";

export const Slide = () => {
  const defaultStreamer: StreamerData = streamers[0];
  const [dev, setDev] = useState<StreamerData>(defaultStreamer);

  return (
    <>
      <ReactCard {...dev} />
      <div className="controls-container">
        {streamers.map((dev: StreamerData) => {
          return (
            <ReactControls
              key={Math.random()}
              handler={() => setDev(dev)}
              dev={dev}
            />
          );
        })}
      </div>
    </>
  );
};
