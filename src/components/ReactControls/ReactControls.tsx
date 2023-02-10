import type { StreamerData } from "../../data/interfaces";
import "./index.css";

type ControlProps = {
  handler: React.Dispatch<React.SetStateAction<void>>;
  dev: StreamerData;
};
export const ReactControls = ({ handler, dev }: ControlProps) => {
  const devImageUrl: string = dev.avatar;
  return (
    <button className="control-btn" onClick={() => handler()}>
      <img src={devImageUrl} />
    </button>
  );
};
