import React from "react";

function Not_found() {
  return (
    <div>
      <div className="error-content_wrapper">
        <div className="error-area">
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-xl-7 col-lg-8 text-center">
                <div className="error">
                  <h1>404</h1>
                  <h2>OPPS! PAGE NOT BE FOUND</h2>
                  <p>
                    Sorry but the page you are looking for does not exist, have
                    been removed, name changed or is temporarily unavailable.
                  </p>
                  <form action="#" className="searchform mb--50">
                    <input
                      type="text"
                      name="search"
                      id="error_search"
                      placeholder="Search..."
                      className="searchform__input"
                    />
                    <button type="submit" className="searchform__submit">
                      <i className="fa fa-search"></i>
                    </button>
                  </form>
                  <a href="index.html" className="btn" id="backtohome">
                    Back to home page
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Not_found;
