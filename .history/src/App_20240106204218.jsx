import { useState } from "react";

import reactLogo from "./assets/react.svg";
import "./App.css";

import viteLogo from "/vite.svg";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div className="my-3 p-3 bg-body rounded shadow-sm">
        <h6 className="border-bottom pb-2 mb-0">Recent updates</h6>
        <div className="d-flex text-body-secondary pt-3">
          <svg
            className="bd-placeholder-img flex-shrink-0 me-2 rounded"
            preserveAspectRatio="xMidYMid slice"
            xmlns="http://www.w3.org/2000/svg"
            aria-label="Placeholder: 32x32"
            focusable="false"
            height={32}
            width={32}
            role="img"
          >
            <title>Placeholder</title>
            <rect fill="#007bff" height="100%" width="100%" />
            <text fill="#007bff" dy=".3em" x="50%" y="50%">
              32x32
            </text>
          </svg>
          <p className="pb-3 mb-0 small lh-sm border-bottom">
            <strong className="d-block text-gray-dark">@username</strong>
            Some representative placeholder content, with some information about
            this user. Imagine this being some sort of status update, perhaps?
          </p>
        </div>
        <div className="d-flex text-body-secondary pt-3">
          <svg
            className="bd-placeholder-img flex-shrink-0 me-2 rounded"
            preserveAspectRatio="xMidYMid slice"
            xmlns="http://www.w3.org/2000/svg"
            aria-label="Placeholder: 32x32"
            focusable="false"
            height={32}
            width={32}
            role="img"
          >
            <title>Placeholder</title>
            <rect fill="#e83e8c" height="100%" width="100%" />
            <text fill="#e83e8c" dy=".3em" x="50%" y="50%">
              32x32
            </text>
          </svg>
          <p className="pb-3 mb-0 small lh-sm border-bottom">
            <strong className="d-block text-gray-dark">@username</strong>
            Some more representative placeholder content, related to this other
            user. Another status update, perhaps.
          </p>
        </div>
        <div className="d-flex text-body-secondary pt-3">
          <svg
            className="bd-placeholder-img flex-shrink-0 me-2 rounded"
            preserveAspectRatio="xMidYMid slice"
            xmlns="http://www.w3.org/2000/svg"
            aria-label="Placeholder: 32x32"
            focusable="false"
            height={32}
            width={32}
            role="img"
          >
            <title>Placeholder</title>
            <rect fill="#6f42c1" height="100%" width="100%" />
            <text fill="#6f42c1" dy=".3em" x="50%" y="50%">
              32x32
            </text>
          </svg>
          <p className="pb-3 mb-0 small lh-sm border-bottom">
            <strong className="d-block text-gray-dark">@username</strong>
            This user also gets some representative placeholder content. Maybe
            they did something interesting, and you really want to highlight
            this in the recent updates.
          </p>
        </div>
        <small className="d-block text-end mt-3">
          <a href="#">All updates</a>
        </small>
      </div>
    </>
  );
}

export default App;
