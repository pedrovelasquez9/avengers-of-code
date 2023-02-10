import "./index.css";

export const ReactCard = ({ devInfo }: any) => {
  return (
    <div className="card-container">
      <div className="info-container">
        <h2>{devInfo.name}</h2>
        <p>
        {devInfo.specialty.map((specialty:string) => {
          return (`
           <span className="green">[</span>
           <span>"${specialty}"</span>
           <span className="green">]</span>`
          );
        })}
        </p>
        <ul>
          <li className="icon">
            <a href={devInfo.GitHub} target="_blank" rel="noopener noreferrer">
              <i className="bi bi-github"></i>
            </a>
          </li>
          <li className="icon">
            <a href={devInfo.YouTube} target="_blank" rel="noopener noreferrer">
              <i className="bi bi-youtube"></i>
            </a>
          </li>
          <li className="icon">
            <a href={devInfo.Web} target="_blank" rel="noopener noreferrer">
            <i className="bi bi-globe"></i>
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};
