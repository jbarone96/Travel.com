import React from "react";
import "../NavBar/Nav.css";

const Nav = () => {
  return (
    <>
      <nav className="navbar navbar-expand-lg bg-body-secondary">
        <div className="container-fluid">
          <a className="navbar-brand" href="/">
            <img
              className="airplane-logo"
              src="Images/airplane.png"
              alt="Airplane Image"
            />
            Travel.com
          </a>

          <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav me-auto mb-2 mb-lg-0">
              <li class="nav-item dropdown">
                <a
                  class="nav-link dropdown-toggle"
                  href="#"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Explore
                </a>

                <ul class="dropdown-menu me-auto">
                  <li>
                    <a class="dropdown-item" href="/Flights">
                      Flights
                    </a>
                  </li>
                  <li>
                    <a class="dropdown-item" href="/Hotels">
                      Hotels
                    </a>
                  </li>
                  <li>
                    <a class="dropdown-item" href="/RentalCars">
                      Cars
                    </a>
                  </li>
                </ul>
              </li>
            </ul>
            <ul class="navbar-nav ms-auto mb-2 mb-lg-0">
              <li class="nav-item">
                <a class="nav-link active" aria-current="page" href="/Support">
                  Support
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="/SignIn">
                  Sign In
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Nav;
