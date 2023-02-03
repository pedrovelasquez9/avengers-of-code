import { useState } from "react";
import { ReactControls } from "../ReactControls/ReactControls";
import { ReactCard } from "./../ReactCard/ReactCard";

export const Slide = () => {
  const [dev, setDev] = useState({});
  const devs = [
    { name: "test1", img: "test" },
    { name: "test2", img: "test" },
    { name: "test3", img: "test" },
  ];

  return (
    <>
      <ReactCard devInfo={dev} />
      {devs.map((dev) => {
        return <ReactControls handler={() => setDev(dev)} />;
      })}
    </>
  );
};
