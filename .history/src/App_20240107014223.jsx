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
      <div
        className="p-2 rounded text-bg-dark text-center"
        style={{ width: 250 }}
      >
        Flex item 3
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
        <div className="sidebar border border-right col-md-3 col-lg-2 p-3 bg-warning-subtle">
          <div className="d-flex flex-column text-center">
            <div className="fs-4 mb-3">Sidebar</div>
            <ul className="nav nav-pills flex-column gap-2">
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="#">
                  Home
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="#">
                  Home
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="#">
                  Home
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="col-md-9 ms-sm-auto col-lg-10 px-md-4 py-3 bg-success-subtle">
          <div className="d-flex flex-column gap-4">
            <div className="text-bg-light">Chance</div>
            <div className="text-bg-light">
              <div className="d-flex flex-row flex-wrap justify-content-around gap-3">
                <Card></Card>
                <Card></Card>
                <Card></Card>
              </div>
            </div>
            <div className="text-bg-light">Chance</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
