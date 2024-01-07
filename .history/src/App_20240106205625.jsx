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
      <StandardBlock></StandardBlock>
    </>
  );
};

export default App;
