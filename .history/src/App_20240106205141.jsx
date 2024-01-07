import "./App.css";

const Block = ({ className = "", ...rest }) => {
  const originalClassName = "p-3 bg-body rounded shadow-sm";

  const fullClassName =
    className.length > 0
      ? `${originalClassName} ${className}`
      : originalClassName;

  return (
    <>
      <div {...props}></div>
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
