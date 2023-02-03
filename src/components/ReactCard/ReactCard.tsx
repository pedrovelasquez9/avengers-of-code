export const ReactCard = ({ devInfo }: any) => {
  return (
    <div className="card-container">
      <div className="info-container">
        <h1>{devInfo.name}</h1>
        <p>{devInfo.description}</p>
      </div>
    </div>
  );
};
