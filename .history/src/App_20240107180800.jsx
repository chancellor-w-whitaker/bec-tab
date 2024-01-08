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
    </>
  ),
  title = "Recent Activity",
  width = 250,
}) => {
  return (
    <>
      <div className="d-flex flex-column gap-2 text-center" style={{ width }}>
        <div className="fs-5 text-secondary fw-medium">{title}</div>
        <div className="p-2 shadow-sm rounded bg-white">{children}</div>
      </div>
    </>
  );
};

const NavItem = ({ href = "https://www.eku.edu/", ...rest }) => {
  return (
    <li className="nav-item">
      <a
        style={{ backgroundColor: "#861f41" }}
        className="nav-link active"
        aria-current="page"
        rel="noreferrer"
        target="_blank"
        href={href}
        {...rest}
      ></a>
    </li>
  );
};

const Sidebar = () => {
  return (
    <>
      <div className="sidebar col-md-3 col-lg-2 p-3 bg-white">
        <div className="d-flex flex-column text-center">
          <div className="fs-5 mb-2 lh-sm fw-semibold text-secondary">
            Quicks Links
          </div>
          <ul className="nav nav-pills flex-column gap-2">
            <NavItem>Service Ticket</NavItem>
            <NavItem>Big E Central Portal</NavItem>
            <NavItem>Registrar Forms Tracking</NavItem>
            <NavItem>Financial Aid Forms Tracking</NavItem>
            <NavItem>Loop Notes/Referral</NavItem>
          </ul>
        </div>
        <hr></hr>
        <div className="d-flex flex-column text-center">
          <div className="fs-5 mb-2 lh-sm fw-semibold text-secondary">
            Banner Links
          </div>
          <ul className="nav nav-pills flex-column gap-2">
            <NavItem>ROARMAN</NavItem>
            <NavItem>RPAAWRD</NavItem>
            <NavItem>TSAAREV</NavItem>
            <NavItem>SGASTDN</NavItem>
            <NavItem>SFAREGS</NavItem>
            <NavItem>Account Summary</NavItem>
          </ul>
        </div>
      </div>
    </>
  );
};

const Main = () => {
  return (
    <>
      <div className="col-md-9 ms-sm-auto col-lg-10 px-md-4 py-3 bg-white">
        <div className="d-flex flex-column gap-5">
          {/* <div className="text-bg-light p-2"></div> */}
          <Card width={"auto"}></Card>
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
    </>
  );
};

const App = () => {
  useBodyBgVariant("primary-subtle");

  return (
    <div className="container-fluid">
      <div className="row">
        <Sidebar></Sidebar>
        <Main></Main>
      </div>
    </div>
  );
};

export default App;
