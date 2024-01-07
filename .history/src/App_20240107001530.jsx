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
    <>
      <div className="m-3 p-3 bg-body rounded shadow-sm"></div>
    </>
  );
};

export default App;
