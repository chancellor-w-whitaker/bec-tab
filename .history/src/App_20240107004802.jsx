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

const Card = () => {
  return (
    <>
      <div
        className="p-2 rounded border text-center bg-body-tertiary lh-1"
        style={{ width: 250 }}
      >
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
    // <div className="container-fluid">
    //   <div className="row">
    //     <div className="sidebar border border-right col-md-3 col-lg-2 p-0 bg-warning-subtle">
    //       <div className="d-flex flex-column gap-2 p-2">
    //         <Button>Chance</Button>
    //         <Button>Chance</Button>
    //         <Button>Chance</Button>
    //         <Button>Chance</Button>
    //         <Button>Chance Chance Chance Chance Chance</Button>
    //       </div>
    //     </div>
    //     <div className="col-md-9 ms-sm-auto col-lg-10 p-0 bg-success-subtle">
    //       <div className="d-flex flex-row flex-wrap row-gap-4 p-2 justify-content-between">
    //         <Card></Card>
    //         <Card></Card>
    //         <Card></Card>
    //         <Card></Card>
    //         <Card></Card>
    //         <Card></Card>
    //         <Card></Card>
    //         <Card></Card>
    //         <Card></Card>
    //       </div>
    //     </div>
    //   </div>
    // </div>
    <div className="container-fluid">
      <div className="row">
        <div className="sidebar border border-right col-md-3 col-lg-2 p-0 bg-warning-subtle">
          <div>Chance</div>
        </div>
        <div className="col-md-9 ms-sm-auto col-lg-10 px-md-4 bg-success-subtle">
          <div className="d-flex flex-column py-3 gap-4">
            <div className="text-bg-light">Chance</div>
            <div>Chance</div>
            <div>Chance</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
