export const CleanedApp = () => {
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
      <div className="sidebar-lg-sticky col-md-3 col-xl-2 p-3 bg-white overflow-auto text-break"></div>
    </>
  );
};

const MainContent = () => {
  <>
    <div className="col-md-9 ms-sm-auto col-xl-10 px-md-4 py-3 bg-white"></div>
  </>;
};
