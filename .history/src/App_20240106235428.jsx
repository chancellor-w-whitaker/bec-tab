import { useEffect } from "react";

import "./App.css";

const useBodyBgVariant = (variant = "body-tertiary") => {
  useEffect(() => {
    document.body.classList.add(`bg-${variant}`);

    return () => {
      document.body.classList.remove(`bg-${variant}`);
    };
  }, [variant]);
};

const App = () => {
  useEffect(() => {
    document.body.classList.add("bg-body-tertiary");

    return () => {
      document.body.classList.remove("bg-body-tertiary");
    };
  }, []);

  return (
    <>
      <div className="m-3 p-3 bg-body rounded shadow-sm">Chance</div>
    </>
  );
};

export default App;
