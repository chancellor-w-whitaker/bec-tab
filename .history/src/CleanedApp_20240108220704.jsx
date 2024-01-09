const CleanedApp = () => {
  return (
    <>
      <div className="container-fluid">
        <div className="row">
          <Sidebar></Sidebar>
          <MainContent></MainContent>
        </div>
      </div>
    </>
  );
};

const Sidebar = () => {
  return (
    <>
      <div className="col-md-3 col-xl-2 p-3 bg-primary-subtle sidebar-lg-sticky overflow-auto text-break"></div>
    </>
  );
};

const MainContent = () => {
  return (
    <>
      <div className="col-md-9 col-xl-10 ms-sm-auto px-md-4 py-3 bg-success-subtle">
        <div className="d-flex flex-column gap-5">
          <SecondaryContentBlock></SecondaryContentBlock>
          <SecondaryContentBlock></SecondaryContentBlock>
        </div>
      </div>
    </>
  );
};

const SecondaryContentBlock = ({ children }) => {
  return (
    <div className="bg-white rounded p-3 d-flex flex-column gap-2 eku-border">
      <div
        style={{ textShadow: `1px 1px 2px ${ekuMaroon}` }}
        className={`fs-2 lh-sm ${className}`.trimEnd()}
      >
        {children}
      </div>
      {children}
    </div>
  );
};

export default CleanedApp;
