import type { StreamerData } from "../../data/interfaces";
import "./index.css";

export const ReactCard = (devInfo: StreamerData) => {
  return (
    <div className="card-container">
      <div className="info-container">
        <h2>{devInfo.name}</h2>
        <p>
          {devInfo.specialty.map((specialty: string) => {
            return (
              <>
                <span className="green">[</span>
                <span>"${specialty}"</span>
                <span className="green">]</span>
              </>
            );
          })}
        </p>
        <ul>
          <li className="icon">
            <a href={devInfo.github} target="_blank" rel="noopener noreferrer">
              <i className="bi bi-github"></i>
            </a>
          </li>
          <li className="icon">
            <a href={devInfo.youtube} target="_blank" rel="noopener noreferrer">
              <i className="bi bi-youtube"></i>
            </a>
          </li>
          <li className="icon">
            <a href={devInfo.web} target="_blank" rel="noopener noreferrer">
              <i className="bi bi-globe"></i>
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};
