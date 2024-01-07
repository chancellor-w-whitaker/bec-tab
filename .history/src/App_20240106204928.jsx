import "./App.css";

const Block = ({ className = "", ...rest }) => {
  const defaultClassName = "p-3 bg-body rounded shadow-sm";

  const entireClassName =
    className.length > 0
      ? [defaultClassName, className].join(" ")
      : defaultClassName;

  const props = { ...rest, className: entireClassName };

  return (
    <>
      <div className="p-3 bg-body rounded shadow-sm"></div>
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
