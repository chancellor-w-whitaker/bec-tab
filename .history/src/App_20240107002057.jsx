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

const Card = ({
  children = (
    <>
      <div>Chance</div>
      <div>Chance</div>
      <div>Chance</div>
    </>
  ),
  width = 250,
}) => {
  return (
    <>
      <div className="rounded border p-2 lh-1 text-center" style={{ width }}>
        {children}
      </div>
    </>
  );
};

const App = () => {
  useBodyBgVariant("primary-subtle");

  return (
    <div className="container-fluid">
      <div className="row">
        <div className="sidebar border border-right col-md-3 col-lg-2 p-0 bg-body-tertiary">
          Chance
        </div>
        <div className="col-md-9 ms-sm-auto col-lg-10 px-md-4 bg-success-subtle">
          Chance
        </div>
      </div>
    </div>
  );
};

export default App;
