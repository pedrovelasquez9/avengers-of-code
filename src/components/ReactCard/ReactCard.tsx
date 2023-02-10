import "./index.css";

export const ReactCard = ({ devInfo }: any) => {
  console.log(devInfo);
  return (
    <div className="card-container">
      <div className="info-container">
        <img src={devInfo.avatar} alt="" />
        <h1>{devInfo.name}</h1>
        <p>{devInfo.description}</p>
      </div>
    </div>
  );
};
