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

const Card = ({ width = 250 }) => {
  return (
    <>
      <div
        className="p-2 rounded bg-secondary-subtle text-center lh-sm shadow-sm"
        style={{ width }}
      >
        <div>Flex item</div>
        <div>Flex item</div>
        <div>Flex item</div>
      </div>
    </>
  );
};

const App = () => {
  useBodyBgVariant("primary-subtle");

  return (
    <div className="container-fluid">
      <div className="row">
        <div className="sidebar border border-right col-md-3 col-lg-2 p-3 bg-white border-end">
          <div className="d-flex flex-column text-center">
            <div className="fs-4 mb-3">Sidebar</div>
            <ul className="nav nav-pills flex-column gap-2">
              <li className="nav-item">
                <a
                  style={{ backgroundColor: "#861f41" }}
                  className="nav-link active"
                  aria-current="page"
                  href="#"
                >
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
        <div className="col-md-9 ms-sm-auto col-lg-10 px-md-4 py-3 bg-white">
          <div className="d-flex flex-column gap-5">
            {/* <div className="text-bg-light p-2"></div> */}
            <Card width="100%"></Card>
            <div className="d-flex flex-row flex-wrap justify-content-around gap-3">
              <Card></Card>
              <Card></Card>
              <Card></Card>
              <Card></Card>
              <Card></Card>
              <Card></Card>
              <Card></Card>
              <Card></Card>
              <Card></Card>
            </div>
            <div className="d-flex flex-row gap-3">
              <Card width="100%"></Card>
              <Card width="100%"></Card>
              <Card width="100%"></Card>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
