import { Link, useLocation } from "react-router-dom";

const Navbar = () => {
  const location = useLocation(); // Get current URL path

  return (
    <header id="header">
      <div className="wpo-site-header">
        <nav className="navigation navbar navbar-expand-lg navbar-light">
          <div id="navbar" className="navbar-collapse ">
            <ul className="navbar-nav mb-2 mb-lg-0">
              {[
                { path: "/", label: "Home" },
                { path: "/about", label: "About" },
                { path: "/services", label: "Services" },
                { path: "/contact", label: "Contact" },
              ].map(({ path, label }) => (
                <li key={path}>
                  <Link
                    className={location.pathname === path ? "active" : ""}
                    to={path}
                    style={{ color: "black" }} // Set text color to black
                  >
                    {label}
                  </Link>
                </li>
              ))}

              {/* Fee Structure Dropdown */}
              <li className="menu-item-has-children">
                <Link to="#" style={{ color: "black" }}> {/* Set text color to black */}
                  Fee Structure
                </Link>
                <ul className="sub-menu">
                  {[
                    { path: "/us-international-fee-structure", label: "For US & International" },
                    { path: "/uk-fee-structure", label: "For United Kingdom" },
                  ].map(({ path, label }) => (
                    <li key={path}>
                      <Link
                        className={location.pathname === path ? "active" : ""}
                        to={path}
                        style={{ color: "black" }} // Set text color to black
                      >
                        {label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </li>

              {/* Pages Dropdown */}
              <li className="menu-item-has-children">
                <Link to="#" style={{ color: "black" }}> {/* Set text color to black */}
                  Pages
                </Link>
                <ul className="sub-menu">
                  {[
                    { path: "/testimonial", label: "Testimonial" },
                    { path: "/teacher-details", label: "Teacher Single" },
                    { path: "/faq", label: "FAQ" },
                    { path: "/terms-and-condition", label: "Terms & Condition" },
                  ].map(({ path, label }) => (
                    <li key={path}>
                      <Link
                        className={location.pathname === path ? "active" : ""}
                        to={path}
                        style={{ color: "black" }} // Set text color to black
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