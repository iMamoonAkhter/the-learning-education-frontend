import { useState } from "react";
import { Link, useLocation } from "react-router-dom";

const Navbar = () => {
  const location = useLocation();
  const [isNavCollapsed, setIsNavCollapsed] = useState(true);

  const handleNavCollapse = () => setIsNavCollapsed(!isNavCollapsed);

  return (
    <header id="header">
      <div className="wpo-site-header">
        <nav className="navigation navbar navbar-expand-lg navbar-light">
          {/* Toggle Button for Mobile */}
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbar"
            aria-controls="navbar"
            aria-expanded={!isNavCollapsed ? "true" : "false"}
            aria-label="Toggle navigation"
            onClick={handleNavCollapse}
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          {/* Navbar Content */}
          <div
            id="navbar"
            className={`collapse navbar-collapse ${!isNavCollapsed ? "show" : ""}`}
          >
            <ul className="navbar-nav mb-2 mb-lg-0">
              {[
                { path: "/", label: "Home" },
                { path: "/about", label: "About" },
                { path: "/services", label: "Services" },
                { path: "/contact", label: "Contact" },
              ].map(({ path, label }) => (
                <li key={path} className="nav-item">
                  <Link
                    className={`nav-link ${location.pathname === path ? "active" : ""}`}
                    to={path}
                    style={{ color: "black" }} // Set text color to black
                  >
                    {label}
                  </Link>
                </li>
              ))}

              {/* Fee Structure Dropdown */}
              <li className="nav-item dropdown">
                <Link
                  to="#"
                  className="nav-link dropdown-toggle"
                  style={{ color: "black" }}
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Fee Structure
                </Link>
                <ul className="dropdown-menu">
                  {[
                    { path: "/us-international-fee-structure", label: "For US & International" },
                    { path: "/uk-fee-structure", label: "For United Kingdom" },
                  ].map(({ path, label }) => (
                    <li key={path}>
                      <Link
                        className={`dropdown-item ${location.pathname === path ? "active" : ""}`}
                        to={path}
                        style={{ color: "black" }}
                      >
                        {label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </li>

              {/* Pages Dropdown */}
              <li className="nav-item dropdown">
                <Link
                  to="#"
                  className="nav-link dropdown-toggle"
                  style={{ color: "black" }}
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Pages
                </Link>
                <ul className="dropdown-menu">
                  {[
                    { path: "/testimonial", label: "Testimonial" },
                    { path: "/teacher-details", label: "Teacher Single" },
                    { path: "/faq", label: "FAQ" },
                    { path: "/terms-and-condition", label: "Terms & Condition" },
                  ].map(({ path, label }) => (
                    <li key={path}>
                      <Link
                        className={`dropdown-item ${location.pathname === path ? "active" : ""}`}
                        to={path}
                        style={{ color: "black" }}
                      >
                        {label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </li>
            </ul>
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;