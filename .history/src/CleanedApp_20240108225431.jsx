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
          <SecondaryContent className="justify-content-around">
            <TertiaryContent title="Chance">
              <div>Chance</div>
              <div>Chance</div>
            </TertiaryContent>
            <TertiaryContent>
              <div>Chance</div>
              <div>Chance</div>
            </TertiaryContent>
            <TertiaryContent>
              <div>Chance</div>
              <div>Chance</div>
            </TertiaryContent>
            <TertiaryContent>
              <div>Chance</div>
              <div>Chance</div>
            </TertiaryContent>
          </SecondaryContent>
          <SecondaryContent className="children-w-250px justify-content-evenly">
            <TertiaryContent>
              <div>Chance</div>
              <div>Chance</div>
            </TertiaryContent>
            <TertiaryContent>
              <div>Chance</div>
              <div>Chance</div>
            </TertiaryContent>
            <TertiaryContent>
              <div>Chance</div>
              <div>Chance</div>
            </TertiaryContent>
            <TertiaryContent>
              <div>Chance</div>
              <div>Chance</div>
            </TertiaryContent>
            <TertiaryContent>
              <div>Chance</div>
              <div>Chance</div>
            </TertiaryContent>
            <TertiaryContent>
              <div>Chance</div>
              <div>Chance</div>
            </TertiaryContent>
            <TertiaryContent>
              <div>Chance</div>
              <div>Chance</div>
            </TertiaryContent>
            <TertiaryContent>
              <div>Chance</div>
              <div>Chance</div>
            </TertiaryContent>
            <TertiaryContent>
              <div>Chance</div>
              <div>Chance</div>
            </TertiaryContent>
          </SecondaryContent>
        </div>
      </div>
    </>
  );
};

const SecondaryContent = ({
  title = "Placeholder",
  className = "",
  children,
}) => {
  return (
    <div className="bg-white rounded p-3 d-flex flex-column gap-3 eku-border shadow-sm">
      <div className="fs-2 eku-text-shadow lh-sm text-center">{title}</div>
      <div className={`d-flex flex-row flex-wrap gap-3 ${className}`.trimEnd()}>
        {children}
      </div>
    </div>
  );
};

const TertiaryContent = ({ title = "Chance", children }) => {
  return (
    <div className="p-1 d-flex flex-column tertiary-content gap-1 lh-sm text-center">
      <div className="fs-4 text-secondary fw-medium">{title}</div>
      <div className="d-flex flex-column">{children}</div>
    </div>
  );
};

export default CleanedApp;
