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
          <SecondaryContent>
            <TertiaryContent></TertiaryContent>
            <TertiaryContent></TertiaryContent>
          </SecondaryContent>
          <SecondaryContent></SecondaryContent>
        </div>
      </div>
    </>
  );
};

const SecondaryContent = ({ title = "Placeholder", children }) => {
  return (
    <div className="bg-white rounded p-3 d-flex flex-column gap-1 eku-border">
      <div className="fs-2 eku-text-shadow">{title}</div>
      <div className="d-flex flex-row">{children}</div>
    </div>
  );
};

const TertiaryContent = ({ title = "Inner Placeholder", children }) => {
  return (
    <div className="p-2 d-flex flex-column gap-1 border">
      <div className="fs-4 text-secondary fw-medium">{title}</div>
      {children}
    </div>
  );
};

export default CleanedApp;
