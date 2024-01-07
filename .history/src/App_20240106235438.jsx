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
