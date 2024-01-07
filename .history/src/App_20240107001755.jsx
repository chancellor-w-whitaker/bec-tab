import { useEffect } from "react";

import "./App.css";

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
      <div>Chance</div>
    </>
  ),
  width = 250,
}) => {
  return (
    <>
      <div className="rounded border p-2 lh-1 text-center" style={{ width }}>
        {children}
      </div>
    </>
  );
};

const App = () => {
  useBodyBgVariant("primary-subtle");

  return (
    <div className="container-fluid">
      <div className="row">
        <div className="sidebar border border-right col-md-3 col-lg-2 p-0 bg-body-tertiary">
          <div
            className="offcanvas-md offcanvas-end bg-body-tertiary"
            aria-labelledby="sidebarMenuLabel"
            id="sidebarMenu"
            tabIndex={-1}
          >
            <div className="offcanvas-header">
              <h5 className="offcanvas-title" id="sidebarMenuLabel">
                Company name
              </h5>
              <button
                data-bs-target="#sidebarMenu"
                data-bs-dismiss="offcanvas"
                className="btn-close"
                aria-label="Close"
                type="button"
              />
            </div>
            <div className="offcanvas-body d-md-flex flex-column p-0 pt-lg-3 overflow-y-auto">
              <ul className="nav flex-column">
                <li className="nav-item">
                  <a
                    className="nav-link d-flex align-items-center gap-2 active"
                    aria-current="page"
                    href="#"
                  >
                    <svg className="bi">
                      <use xlinkHref="#house-fill" />
                    </svg>
                    Dashboard
                  </a>
                </li>
                <li className="nav-item">
                  <a
                    className="nav-link d-flex align-items-center gap-2"
                    href="#"
                  >
                    <svg className="bi">
                      <use xlinkHref="#file-earmark" />
                    </svg>
                    Orders
                  </a>
                </li>
                <li className="nav-item">
                  <a
                    className="nav-link d-flex align-items-center gap-2"
                    href="#"
                  >
                    <svg className="bi">
                      <use xlinkHref="#cart" />
                    </svg>
                    Products
                  </a>
                </li>
                <li className="nav-item">
                  <a
                    className="nav-link d-flex align-items-center gap-2"
                    href="#"
                  >
                    <svg className="bi">
                      <use xlinkHref="#people" />
                    </svg>
                    Customers
                  </a>
                </li>
                <li className="nav-item">
                  <a
                    className="nav-link d-flex align-items-center gap-2"
                    href="#"
                  >
                    <svg className="bi">
                      <use xlinkHref="#graph-up" />
                    </svg>
                    Reports
                  </a>
                </li>
                <li className="nav-item">
                  <a
                    className="nav-link d-flex align-items-center gap-2"
                    href="#"
                  >
                    <svg className="bi">
                      <use xlinkHref="#puzzle" />
                    </svg>
                    Integrations
                  </a>
                </li>
              </ul>
              <h6 className="sidebar-heading d-flex justify-content-between align-items-center px-3 mt-4 mb-1 text-body-secondary text-uppercase">
                <span>Saved reports</span>
                <a
                  aria-label="Add a new report"
                  className="link-secondary"
                  href="#"
                >
                  <svg className="bi">
                    <use xlinkHref="#plus-circle" />
                  </svg>
                </a>
              </h6>
              <ul className="nav flex-column mb-auto">
                <li className="nav-item">
                  <a
                    className="nav-link d-flex align-items-center gap-2"
                    href="#"
                  >
                    <svg className="bi">
                      <use xlinkHref="#file-earmark-text" />
                    </svg>
                    Current month
                  </a>
                </li>
                <li className="nav-item">
                  <a
                    className="nav-link d-flex align-items-center gap-2"
                    href="#"
                  >
                    <svg className="bi">
                      <use xlinkHref="#file-earmark-text" />
                    </svg>
                    Last quarter
                  </a>
                </li>
                <li className="nav-item">
                  <a
                    className="nav-link d-flex align-items-center gap-2"
                    href="#"
                  >
                    <svg className="bi">
                      <use xlinkHref="#file-earmark-text" />
                    </svg>
                    Social engagement
                  </a>
                </li>
                <li className="nav-item">
                  <a
                    className="nav-link d-flex align-items-center gap-2"
                    href="#"
                  >
                    <svg className="bi">
                      <use xlinkHref="#file-earmark-text" />
                    </svg>
                    Year-end sale
                  </a>
                </li>
              </ul>
              <hr className="my-3" />
              <ul className="nav flex-column mb-auto">
                <li className="nav-item">
                  <a
                    className="nav-link d-flex align-items-center gap-2"
                    href="#"
                  >
                    <svg className="bi">
                      <use xlinkHref="#gear-wide-connected" />
                    </svg>
                    Settings
                  </a>
                </li>
                <li className="nav-item">
                  <a
                    className="nav-link d-flex align-items-center gap-2"
                    href="#"
                  >
                    <svg className="bi">
                      <use xlinkHref="#door-closed" />
                    </svg>
                    Sign out
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <main className="col-md-9 ms-sm-auto col-lg-10 px-md-4">
          <div className="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-3 border-bottom">
            <h1 className="h2">Dashboard</h1>
            <div className="btn-toolbar mb-2 mb-md-0">
              <div className="btn-group me-2">
                <button
                  className="btn btn-sm btn-outline-secondary"
                  type="button"
                >
                  Share
                </button>
                <button
                  className="btn btn-sm btn-outline-secondary"
                  type="button"
                >
                  Export
                </button>
              </div>
              <button
                className="btn btn-sm btn-outline-secondary dropdown-toggle d-flex align-items-center gap-1"
                type="button"
              >
                <svg className="bi">
                  <use xlinkHref="#calendar3" />
                </svg>
                This week
              </button>
            </div>
          </div>
          <canvas
            style={{
              boxSizing: "border-box",
              display: "block",
              height: 254,
              width: 603,
            }}
            className="my-4 w-100"
            id="myChart"
            height={318}
            width={754}
          />
          <h2>Section title</h2>
          <div className="table-responsive small">
            <table className="table table-striped table-sm">
              <thead>
                <tr>
                  <th scope="col">#</th>
                  <th scope="col">Header</th>
                  <th scope="col">Header</th>
                  <th scope="col">Header</th>
                  <th scope="col">Header</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>1,001</td>
                  <td>random</td>
                  <td>data</td>
                  <td>placeholder</td>
                  <td>text</td>
                </tr>
                <tr>
                  <td>1,002</td>
                  <td>placeholder</td>
                  <td>irrelevant</td>
                  <td>visual</td>
                  <td>layout</td>
                </tr>
                <tr>
                  <td>1,003</td>
                  <td>data</td>
                  <td>rich</td>
                  <td>dashboard</td>
                  <td>tabular</td>
                </tr>
                <tr>
                  <td>1,003</td>
                  <td>information</td>
                  <td>placeholder</td>
                  <td>illustrative</td>
                  <td>data</td>
                </tr>
                <tr>
                  <td>1,004</td>
                  <td>text</td>
                  <td>random</td>
                  <td>layout</td>
                  <td>dashboard</td>
                </tr>
                <tr>
                  <td>1,005</td>
                  <td>dashboard</td>
                  <td>irrelevant</td>
                  <td>text</td>
                  <td>placeholder</td>
                </tr>
                <tr>
                  <td>1,006</td>
                  <td>dashboard</td>
                  <td>illustrative</td>
                  <td>rich</td>
                  <td>data</td>
                </tr>
                <tr>
                  <td>1,007</td>
                  <td>placeholder</td>
                  <td>tabular</td>
                  <td>information</td>
                  <td>irrelevant</td>
                </tr>
                <tr>
                  <td>1,008</td>
                  <td>random</td>
                  <td>data</td>
                  <td>placeholder</td>
                  <td>text</td>
                </tr>
                <tr>
                  <td>1,009</td>
                  <td>placeholder</td>
                  <td>irrelevant</td>
                  <td>visual</td>
                  <td>layout</td>
                </tr>
                <tr>
                  <td>1,010</td>
                  <td>data</td>
                  <td>rich</td>
                  <td>dashboard</td>
                  <td>tabular</td>
                </tr>
                <tr>
                  <td>1,011</td>
                  <td>information</td>
                  <td>placeholder</td>
                  <td>illustrative</td>
                  <td>data</td>
                </tr>
                <tr>
                  <td>1,012</td>
                  <td>text</td>
                  <td>placeholder</td>
                  <td>layout</td>
                  <td>dashboard</td>
                </tr>
                <tr>
                  <td>1,013</td>
                  <td>dashboard</td>
                  <td>irrelevant</td>
                  <td>text</td>
                  <td>visual</td>
                </tr>
                <tr>
                  <td>1,014</td>
                  <td>dashboard</td>
                  <td>illustrative</td>
                  <td>rich</td>
                  <td>data</td>
                </tr>
                <tr>
                  <td>1,015</td>
                  <td>random</td>
                  <td>tabular</td>
                  <td>information</td>
                  <td>text</td>
                </tr>
              </tbody>
            </table>
          </div>
        </main>
      </div>
    </div>
  );
};

export default App;
