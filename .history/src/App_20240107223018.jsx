import { useEffect } from "react";

import "./App.css";

// const genericSentences = [
//   `It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.`,
//   `The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English.`,
//   `Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy.`,
//   `Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).`,
// ];

const ekuMaroon = "#861f41";

const ekuBorder = { border: `3px solid ${ekuMaroon}` };

const SomeBlock = ({
  href = "https://www.eku.edu/",
  linkText = "Link",
  date = "1/7/2024",
  title = "Ashlyn",
  className = "",
  padding = 2,
  style = {},
}) => {
  return (
    <div
      className={`p-${padding} text-center ${className}`}
      style={{ ...style }}
    >
      <div className="fs-4 text-secondary fw-medium">{title}</div>
      <div>
        <div>{date}</div>
        <a rel="noreferrer" target="_blank" href={href}>
          {linkText}
        </a>
      </div>
    </div>
  );
};

const ShadowyTitle = ({ children = "Placeholder", className = "" }) => {
  return (
    <div
      className={`fs-2 text-dark lh-sm ${className}`.trimEnd()}
      style={{ textShadow: `1px 1px 2px ${ekuMaroon}` }}
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
      <div className="sidebar-lg-sticky col-md-3 col-xl-2 p-3 bg-white overflow-auto text-break">
        <div className="d-flex flex-column text-center">
          <div className="fs-5 mb-2 lh-sm fw-medium text-secondary">
            Quick Links
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
          <div className="fs-5 mb-2 lh-sm fw-medium text-secondary">
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
      <div className="col-md-9 ms-sm-auto col-xl-10 px-md-4 py-3 bg-body-tertiary">
        <div className="d-flex flex-column gap-5">
          <TopRow className="shadow-sm"></TopRow>
          <MiddleRow className="shadow-sm"></MiddleRow>
          <BottomRow></BottomRow>
        </div>
      </div>
    </>
  );
};

const TopRow = ({ className = "" }) => {
  return (
    <div
      className={`bg-white rounded text-center p-3 d-flex flex-column gap-2 ${className}`.trimEnd()}
      style={{ ...ekuBorder }}
    >
      <ShadowyTitle>Recent Activity BEC</ShadowyTitle>
      <div className="d-flex gap-3 flex-wrap text-nowrap">
        <SomeBlock
          title={"Service Ticket"}
          date={"1/7/2024"}
          className="col"
        ></SomeBlock>
        <SomeBlock date={"1/7/2024"} className="col" title={"Call"}></SomeBlock>
        <SomeBlock
          date={"1/7/2024"}
          title={"Walk-In"}
          className="col"
        ></SomeBlock>
        <SomeBlock
          date={"1/7/2024"}
          className="col"
          title={"Email"}
        ></SomeBlock>
      </div>
    </div>
  );
};

const MiddleRow = ({ className = "" }) => {
  return (
    <>
      <div
        className={`bg-white rounded text-center p-3 d-flex flex-column gap-2 ${className}`.trimEnd()}
        style={{ ...ekuBorder }}
      >
        <ShadowyTitle>Student Information</ShadowyTitle>
        <div className="d-flex gap-3 flex-wrap text-nowrap justify-content-around">
          <SomeBlock
            style={{ minWidth: 300 }}
            date={"1/7/2024"}
            className="col"
            title={"Email"}
          ></SomeBlock>
          <SomeBlock
            style={{ minWidth: 300 }}
            date={"1/7/2024"}
            className="col"
            title={"Email"}
          ></SomeBlock>
          <SomeBlock
            style={{ minWidth: 300 }}
            date={"1/7/2024"}
            className="col"
            title={"Email"}
          ></SomeBlock>
          <SomeBlock
            style={{ minWidth: 300 }}
            date={"1/7/2024"}
            className="col"
            title={"Email"}
          ></SomeBlock>
        </div>
      </div>
    </>
  );
};

const BottomRow = ({ className = "" }) => {
  return (
    <>
      <div className={`d-flex flex-row gap-3 flex-wrap ${className}`.trimEnd()}>
        <div className="d-flex flex-column gap-2 text-center col">
          <ShadowyTitle className="text-nowrap">Financial Aid</ShadowyTitle>
          <div
            className="h-100 p-2 rounded bg-white d-flex flex-column gap-1 shadow-sm"
            style={{ border: "3px solid rgb(134, 31, 65)" }}
          >
            <SomeBlock></SomeBlock>
            <SomeBlock></SomeBlock>
            <SomeBlock></SomeBlock>
          </div>
        </div>
        <div className="d-flex flex-column gap-2 text-center col">
          <ShadowyTitle className="text-nowrap">
            Student Accounting
          </ShadowyTitle>
          <div
            className="h-100 p-2 rounded bg-white d-flex flex-column gap-1 shadow-sm"
            style={{ border: "3px solid rgb(134, 31, 65)" }}
          >
            <SomeBlock></SomeBlock>
          </div>
        </div>
        <div className="d-flex flex-column gap-2 text-center col">
          <ShadowyTitle className="text-nowrap">Registrar</ShadowyTitle>
          <div
            className="h-100 p-2 rounded bg-white d-flex flex-column gap-1 shadow-sm"
            style={{ border: "3px solid rgb(134, 31, 65)" }}
          >
            <SomeBlock></SomeBlock>
            <SomeBlock></SomeBlock>
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