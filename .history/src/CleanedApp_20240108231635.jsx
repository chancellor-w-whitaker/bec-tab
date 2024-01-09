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
          <SecondaryContent contentClassName="justify-content-around">
            <TertiaryContent title="Chance"></TertiaryContent>
            <TertiaryContent></TertiaryContent>
            <TertiaryContent></TertiaryContent>
            <TertiaryContent></TertiaryContent>
          </SecondaryContent>
          <SecondaryContent contentClassName="children-w-275px justify-content-evenly">
            <TertiaryContent></TertiaryContent>
            <TertiaryContent></TertiaryContent>
            <TertiaryContent></TertiaryContent>
            <TertiaryContent></TertiaryContent>
            <TertiaryContent></TertiaryContent>
            <TertiaryContent></TertiaryContent>
            <TertiaryContent></TertiaryContent>
            <TertiaryContent></TertiaryContent>
            <TertiaryContent></TertiaryContent>
          </SecondaryContent>
          <div className="d-flex flex-row flex-wrap gap-3">
            <div className="d-flex flex-column gap-2 flex-fill">
              <CoolTitle>Chance</CoolTitle>
              <SecondaryContent className="h-100" title=""></SecondaryContent>
            </div>
            <div className="d-flex flex-column gap-2 flex-fill">
              <CoolTitle>Chance Chance Chancellor</CoolTitle>
              <SecondaryContent className="h-100" title=""></SecondaryContent>
            </div>
            <div className="d-flex flex-column gap-2 flex-fill">
              <CoolTitle></CoolTitle>
              <SecondaryContent className="h-100" title=""></SecondaryContent>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

const CoolTitle = ({ children = "Placeholder" }) => {
  return (
    <>
      <div className="fs-2 eku-text-shadow lh-sm text-center">{children}</div>
    </>
  );
};

const SecondaryContent = ({
  contentClassName = "",
  className = "",
  children,
  title,
}) => {
  return (
    <div
      className={`bg-white rounded p-3 d-flex flex-column gap-2 eku-border shadow-sm ${className}`.trimEnd()}
    >
      <CoolTitle>{title}</CoolTitle>
      <div
        className={`d-flex flex-row flex-wrap gap-2 ${contentClassName}`.trimEnd()}
      >
        {children}
      </div>
    </div>
  );
};

const TertiaryContent = ({
  children = (
    <>
      <div>Chance</div>
      <div>Chance</div>
    </>
  ),
  title = "Chance",
}) => {
  return (
    <div className="p-2 d-flex flex-column tertiary-content gap-1 lh-sm text-center">
      <div className="fs-4 text-secondary fw-medium">{title}</div>
      <div className="d-flex flex-column">{children}</div>
    </div>
  );
};

export default CleanedApp;
