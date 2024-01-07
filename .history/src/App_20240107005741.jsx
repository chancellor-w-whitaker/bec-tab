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
          <ul className="nav nav-pills flex-column mb-auto">
            <li className="nav-item">
              <a className="nav-link active" aria-current="page" href="#">
                <svg className="bi pe-none me-2" height={16} width={16}>
                  <use xlinkHref="#home" />
                </svg>
                Home
              </a>
            </li>
            <li>
              <a className="nav-link link-body-emphasis" href="#">
                <svg className="bi pe-none me-2" height={16} width={16}>
                  <use xlinkHref="#speedometer2" />
                </svg>
                Dashboard
              </a>
            </li>
            <li>
              <a className="nav-link link-body-emphasis" href="#">
                <svg className="bi pe-none me-2" height={16} width={16}>
                  <use xlinkHref="#table" />
                </svg>
                Orders
              </a>
            </li>
            <li>
              <a className="nav-link link-body-emphasis" href="#">
                <svg className="bi pe-none me-2" height={16} width={16}>
                  <use xlinkHref="#grid" />
                </svg>
                Products
              </a>
            </li>
            <li>
              <a className="nav-link link-body-emphasis" href="#">
                <svg className="bi pe-none me-2" height={16} width={16}>
                  <use xlinkHref="#people-circle" />
                </svg>
                Customers
              </a>
            </li>
          </ul>
        </div>
        <div className="col-md-9 ms-sm-auto col-lg-10 px-md-4 py-3 bg-success-subtle">
          <div className="d-flex flex-column gap-4">
            <div className="text-bg-light">Chance</div>
            <div className="text-bg-light">Chance</div>
            <div className="text-bg-light">Chance</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
