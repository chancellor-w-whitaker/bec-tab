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
        </div>
      </div>
    </>
  );
};

const SecondaryContentBlock = ({ children }) => {
  return (
    <div className="bg-white rounded text-center p-3 d-flex flex-column gap-2 eku-border">
      {children}
    </div>
  );
};

export default CleanedApp;
