const Box = ({ x, value }) => {
  return (
    <div
      onClick={x}
      style={{
        border: "1px solid black",
        height: "50px",
        width: "50%",
        display: "flex",
        justifyContent: "center",
      }}
    >
      <h4>{value}</h4>
    </div>
  );
};

export default Box;
