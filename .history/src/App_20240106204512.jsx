import "./App.css";

const Block = (props) => {
  return (
    <>
      <div className="m-3 p-3 bg-body rounded shadow-sm"></div>
    </>
  );
};

const App = () => {
  return (
    <>
      <div className="m-3 p-3 bg-body rounded shadow-sm">
        <div className="d-flex">
          <div></div>
          <div></div>
        </div>
      </div>
    </>
  );
};

export default App;
