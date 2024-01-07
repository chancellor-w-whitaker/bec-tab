import "./App.css";

const standardBlockClasses = "m-3 p-3 bg-body rounded shadow-sm";

const App = () => {
  return (
    <>
      <div className={standardBlockClasses}>
        <div className="d-flex">
          <div className="w-25"></div>
          <div className="w-75"></div>
        </div>
      </div>
    </>
  );
};

export default App;
