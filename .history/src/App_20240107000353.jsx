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

const Card = () => {
  return (
    <>
      <div className="rounded border p-2" style={{ width: 250 }}>
        <div>Chance</div>
        <div>Chance</div>
        <div>Chance</div>
      </div>
    </>
  );
};

const App = () => {
  useBodyBgVariant("primary-subtle");

  return (
    <>
      <div className="m-3 p-3 bg-body rounded shadow-sm">
        <div className="d-flex flex-wrap justify-content-between">
          <Card></Card>
          <Card></Card>
          <Card></Card>
          <Card></Card>
          <Card></Card>
          <Card></Card>
          <Card></Card>
        </div>
      </div>
    </>
  );
};

export default App;
