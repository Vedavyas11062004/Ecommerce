import React from "react";

function Breadcrumb(props) {
  return (
    <div>
      <div className="breadcrumb-area">
        <div className="container">
          <div className="breadcrumb-content">
            <h2>{props.name}</h2>
            <ul>
              <li>
                <a href="index.html">Home</a>
              </li>
              <li className="active">{props.name}</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Breadcrumb;
