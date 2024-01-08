import { useEffect } from "react";

import "./App.css";

const genericSentences = [
  `It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.`,
  `The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English.`,
  `Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy.`,
  `Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).`,
];

const ekuMaroon = "#861f41";

const ekuBorder = { border: `3px solid ${ekuMaroon}` };

const SomeBlock = ({
  paragraph = genericSentences.slice(0, 1).map((sen) => sen),
  href = "https://www.eku.edu/",
  title = "Chancellor",
  linkText = "Link",
  date,
}) => {
  return (
    <div className="p-2 d-flex flex-column gap-1 col">
      <div className="fs-5 text-secondary fw-medium">{title}</div>
      <div>{date}</div>
      <a rel="noreferrer" target="_blank" href={href}>
        {linkText}
      </a>
    </div>
  );
};

const ShadowyTitle = ({ children = "Placeholder" }) => {
  return (
    <div
      style={{ textShadow: `1px 1px 2px ${ekuMaroon}` }}
      className="fs-2 lh-sm"
    >
      {children}
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
  title = <div className="fs-5 text-secondary fw-medium">Recent Activity</div>,
  width = 250,
  style = {},
}) => {
  return (
    <>
      <div className="d-flex flex-column gap-2 text-center" style={{ width }}>
        {title}
        <div className="p-2 border rounded bg-white" style={{ ...style }}>
          {children}
        </div>
      </div>
    </>
  );
};

const NavItem = ({ href = "https://www.eku.edu/", ...rest }) => {
  return (
    <li className="nav-item">
      <a
        style={{ backgroundColor: ekuMaroon }}
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
          <div
            className="rounded text-center p-3 d-flex flex-column gap-2"
            style={{ ...ekuBorder }}
          >
            <ShadowyTitle>Recent Activity BEC</ShadowyTitle>
            <div className="d-flex gap-3 flex-wrap text-nowrap">
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
            <Card
              title={<ShadowyTitle>Financial Aid</ShadowyTitle>}
              width="100%"
            ></Card>
            <Card
              title={<ShadowyTitle>Student Accounting</ShadowyTitle>}
              width="100%"
            ></Card>
            <Card
              title={<ShadowyTitle>Registrar</ShadowyTitle>}
              width="100%"
            ></Card>
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
