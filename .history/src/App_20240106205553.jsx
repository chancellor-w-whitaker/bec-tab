import "./App.css";

const StandardBlock = ({ className = "", ...rest }) => {
  const originalClassName = "m-3 p-3 bg-body rounded shadow-sm";

  return (
    <>
      <div
        className={
          className.length > 0
            ? `${originalClassName} ${className}`
            : originalClassName
        }
        {...rest}
      ></div>
    </>
  );
};

const App = () => {
  return (
    <>
      <StandardBlock className="m-3">
        <div className="d-flex">
          <StandardBlock></StandardBlock>
          <StandardBlock></StandardBlock>
        </div>
      </StandardBlock>
    </>
  );
};

export default App;
