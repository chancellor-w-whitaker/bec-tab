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
      <div className="col-md-3 col-xl-2 p-3 bg-white sidebar-lg-sticky overflow-auto text-break"></div>
    </>
  );
};

const MainContent = () => {
  <>
    <div className="col-md-9 col-xl-10 ms-sm-auto px-md-4 py-3 bg-white"></div>
  </>;
};

export default CleanedApp;
