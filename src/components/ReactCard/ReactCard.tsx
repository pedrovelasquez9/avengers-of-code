export const ReactCard = ({ devInfo }: any) => {
  return (
    <div className="card-container">
      <div className="info-container">
        <h1>{devInfo.img}</h1>
        <p>{devInfo.name}</p>
      </div>
    </div>
  );
};
