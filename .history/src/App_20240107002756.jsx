import { useEffect } from "react";

import "./App.css";

const useBodyBgVariant = (bgVariant = "body-tertiary") => {
  useEffect(() => {
    document.body.classList.add(`bg-${bgVariant}`);

    return () => {
      document.body.classList.remove(`bg-${bgVariant}`);
    };
  }, [bgVariant]);
};

const Button = ({ children }) => {
  return (
    <>
      <button className="btn btn-primary" type="button">
        {children}
      </button>
    </>
  );
};

const App = () => {
  useBodyBgVariant("primary-subtle");

  return (
    <div className="container-fluid">
      <div className="row">
        <div className="sidebar border border-right col-md-3 col-lg-2 p-0 bg-body-tertiary">
          <div className="d-flex flex-column gap-2 p-2">
            <Button>Chance</Button>
            <Button>Chance</Button>
            <Button>Chance</Button>
            <Button>Chance</Button>
            <Button>Chance Chance Chance Chance Chance</Button>
          </div>
        </div>
        <div className="col-md-9 ms-sm-auto col-lg-10 px-md-4 bg-success-subtle">
          Chance
        </div>
      </div>
    </div>
  );
};

export default App;
