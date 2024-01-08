import { useEffect } from "react";

import "./App.css";

const genericSentences = [
  `It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.`,
  `The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English.`,
  `Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy.`,
  `Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).`,
];

const SomeBlock = ({
  paragraph = genericSentences.slice(0, 1).map((sen) => sen),
  title = "Chancellor",
  href = "",
  date,
}) => {
  return (
    <div className="border rounded p-2 d-flex flex-column gap-1 col">
      <div className="fs-5">{title}</div>
      <span>
        (
        <a className="mb-0" href="">
          {date}
        </a>
        )
      </span>
    </div>
  );
};

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
        <div className="p-2 border rounded bg-white">{children}</div>
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
          {/* <Card width={"auto"}></Card> */}
          <div className="rounded border text-center p-3 d-flex flex-column gap-3">
            <div className="fs-3 lh-1">Recent Activity BEC</div>
            <div className="d-flex gap-3 flex-wrap">
              <SomeBlock title={"Service Ticket"} date={"1/7/2024"}></SomeBlock>
              <SomeBlock date={"1/7/2024"} title={"Call"}></SomeBlock>
              <SomeBlock date={"1/7/2024"} title={"Walk-In"}></SomeBlock>
              <SomeBlock date={"1/7/2024"} title={"Email"}></SomeBlock>
            </div>
          </div>
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
