import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import {
  AppBar,
  Toolbar,
  IconButton,
  Menu,
  MenuItem,
  Button,
  Box,
  Drawer,
  List,
  ListItem,
  ListItemText,
  Collapse,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import ExpandLessIcon from "@mui/icons-material/ExpandLess";

const Navbar = () => {
  const location = useLocation();
  const [isNavOpen, setIsNavOpen] = useState(false);
  const [feeMenuOpen, setFeeMenuOpen] = useState(false);
  const [aboutMenuOpen, setAboutMenuOpen] = useState(false);
  const [feeAnchorEl, setFeeAnchorEl] = useState(null);
  const [aboutAnchorEl, setAboutAnchorEl] = useState(null);

  const handleNavToggle = () => setIsNavOpen(!isNavOpen);

  const handleFeeMenuOpen = (event) => setFeeAnchorEl(event.currentTarget);
  const handleFeeMenuClose = () => setFeeAnchorEl(null);

  const handleAboutMenuOpen = (event) => setAboutAnchorEl(event.currentTarget);
  const handleAboutMenuClose = () => setAboutAnchorEl(null);

  const handleDrawerClose = () => setIsNavOpen(false);

  // Check if the current path is related to fee structure
  const isFeeActive = location.pathname.includes("fee-structure");
  
  // Check if the current path is related to about or its subpages
  const isAboutActive = 
    location.pathname === "/about" || 
    location.pathname === "/testimonial" || 
    location.pathname === "/teacher-details" || 
    location.pathname === "/faq" || 
    location.pathname === "/terms-and-condition";

  return (
    <AppBar position="static" sx={{ backgroundColor: "white", color: "black", boxShadow: "none" }}>
      <Toolbar sx={{ justifyContent: "space-between" }}>
        {/* Logo on the left */}
        <Box sx={{ display: "flex", alignItems: "center", marginLeft: "50px" }}>
          <Link to="/">
            <img 
              src="/images/LOGO/PNG/Color Logo PNG.png" 
              alt="Logo" 
              style={{ height: "50px" }} 
            />
          </Link>
        </Box>

        {/* Toggle Button for Mobile */}
        <IconButton
          size="large"
          edge="start"
          color="inherit"
          aria-label="menu"
          sx={{ display: { xs: "block", md: "none" } }}
          onClick={handleNavToggle}
        >
          <MenuIcon />
        </IconButton>

        {/* Navbar Content for Desktop */}
        <Box
          sx={{
            display: { xs: "none", md: "flex" },
            flexDirection: "row",
            alignItems: "center",
            gap: 2,
            position: "absolute",
            left: "50%",
            transform: "translateX(-50%)",
          }}
        >
          {/* Home Link */}
          <Button
            component={Link}
            to="/"
            sx={{
              color: location.pathname === "/" ? "white" : "inherit",
              textTransform: "none",
              fontSize: "1rem",
              backgroundColor: location.pathname === "/" ? "#4281ff" : "transparent",
              borderRadius: "4px",
              padding: "6px 12px",
              "&:hover": {
                backgroundColor: location.pathname === "/" ? "#3a75e6" : "#e9ecef",
              },
            }}
          >
            Home
          </Button>

          {/* Fee Structure Dropdown */}
          <Button
            sx={{
              color: isFeeActive ? "white" : "inherit",
              textTransform: "none",
              fontSize: "1rem",
              backgroundColor: isFeeActive ? "#4281ff" : "transparent",
              borderRadius: "4px",
              padding: "6px 12px",
              "&:hover": {
                backgroundColor: isFeeActive ? "#3a75e6" : "#e9ecef",
              },
            }}
            onClick={handleFeeMenuOpen}
            endIcon={<ArrowDropDownIcon />}
          >
            Fee Structure
          </Button>
          <Menu
            anchorEl={feeAnchorEl}
            open={Boolean(feeAnchorEl)}
            onClose={handleFeeMenuClose}
          >
            {[
              { path: "/us-international-fee-structure", label: "For US & International" },
              { path: "/uk-fee-structure", label: "For United Kingdom" },
            ].map(({ path, label }) => (
              <MenuItem
                key={path}
                component={Link}
                to={path}
                onClick={handleFeeMenuClose}
                sx={{ 
                  color: location.pathname === path ? "white" : "inherit",
                  backgroundColor: location.pathname === path ? "#4281ff" : "transparent",
                  "&:hover": {
                    backgroundColor: location.pathname === path ? "#3a75e6" : "#e9ecef",
                  },
                }}
              >
                {label}
              </MenuItem>
            ))}
          </Menu>

          {/* Services Link */}
          <Button
            component={Link}
            to="/services"
            sx={{
              color: location.pathname === "/services" ? "white" : "inherit",
              textTransform: "none",
              fontSize: "1rem",
              backgroundColor: location.pathname === "/services" ? "#4281ff" : "transparent",
              borderRadius: "4px",
              padding: "6px 12px",
              "&:hover": {
                backgroundColor: location.pathname === "/services" ? "#3a75e6" : "#e9ecef",
              },
            }}
          >
            Services
          </Button>

          {/* Contact Link */}
          <Button
            component={Link}
            to="/contact"
            sx={{
              color: location.pathname === "/contact" ? "white" : "inherit",
              textTransform: "none",
              fontSize: "1rem",
              backgroundColor: location.pathname === "/contact" ? "#4281ff" : "transparent",
              borderRadius: "4px",
              padding: "6px 12px",
              "&:hover": {
                backgroundColor: location.pathname === "/contact" ? "#3a75e6" : "#e9ecef",
              },
            }}
          >
            Contact
          </Button>

          {/* About Dropdown */}
          <Button
            sx={{
              color: isAboutActive ? "white" : "inherit",
              textTransform: "none",
              fontSize: "1rem",
              backgroundColor: isAboutActive ? "#4281ff" : "transparent",
              borderRadius: "4px",
              padding: "6px 12px",
              "&:hover": {
                backgroundColor: isAboutActive ? "#3a75e6" : "#e9ecef",
              },
            }}
            onClick={handleAboutMenuOpen}
            endIcon={<ArrowDropDownIcon />}
          >
            About
          </Button>
          <Menu
            anchorEl={aboutAnchorEl}
            open={Boolean(aboutAnchorEl)}
            onClose={handleAboutMenuClose}
          >
            <MenuItem
              component={Link}
              to="/about"
              onClick={handleAboutMenuClose}
              sx={{ 
                color: location.pathname === "/about" ? "white" : "inherit",
                backgroundColor: location.pathname === "/about" ? "#4281ff" : "transparent",
                "&:hover": {
                  backgroundColor: location.pathname === "/about" ? "#3a75e6" : "#e9ecef",
                },
              }}
            >
              About Us
            </MenuItem>
            {[
              { path: "/testimonial", label: "Testimonial" },
              { path: "/teacher-details", label: "Teacher Single" },
              { path: "/faq", label: "FAQ" },
              { path: "/terms-and-condition", label: "Terms & Condition" },
            ].map(({ path, label }) => (
              <MenuItem
                key={path}
                component={Link}
                to={path}
                onClick={handleAboutMenuClose}
                sx={{ 
                  color: location.pathname === path ? "white" : "inherit",
                  backgroundColor: location.pathname === path ? "#4281ff" : "transparent",
                  "&:hover": {
                    backgroundColor: location.pathname === path ? "#3a75e6" : "#e9ecef",
                  },
                }}
              >
                {label}
              </MenuItem>
            ))}
          </Menu>
        </Box>

        {/* Empty Box for spacing on the right side */}
        <Box sx={{ display: { xs: "none", md: "block" }, width: "150px" }}></Box>

        {/* Drawer for Mobile */}
        <Drawer
          anchor="left"
          open={isNavOpen}
          onClose={handleDrawerClose}
          sx={{ display: { xs: "block", md: "none" } }}
        >
          <Box
            sx={{ width: 250 }}
            role="presentation"
            onClick={(e) => e.stopPropagation()} // Prevent Drawer from closing
            onKeyDown={(e) => e.stopPropagation()} // Prevent Drawer from closing
          >
            {/* Logo in Drawer */}
            <Box sx={{ p: 2, display: "flex", justifyContent: "center" }}>
              <Link to="/" onClick={handleDrawerClose}>
                <img 
                  src="/images/LOGO/PNG/Color Logo PNG.png" 
                  alt="Logo" 
                  style={{ height: "40px" }} 
                />
              </Link>
            </Box>
            
            <List>
              {/* Home Link */}
              <ListItem
                component={Link}
                to="/"
                onClick={handleDrawerClose} // Close Drawer when clicking a link
                sx={{
                  color: location.pathname === "/" ? "white" : "inherit",
                  textTransform: "none",
                  fontSize: "1rem",
                  backgroundColor: location.pathname === "/" ? "#4281ff" : "transparent",
                  "&:hover": {
                    backgroundColor: location.pathname === "/" ? "#3a75e6" : "#e9ecef",
                  },
                }}
              >
                <ListItemText primary="Home" />
              </ListItem>

              {/* Fee Structure Dropdown */}
              <ListItem 
                button 
                onClick={() => setFeeMenuOpen(!feeMenuOpen)}
                sx={{
                  backgroundColor: isFeeActive ? "#4281ff" : "transparent",
                  color: isFeeActive ? "white" : "inherit",
                  "&:hover": {
                    backgroundColor: isFeeActive ? "#3a75e6" : "#e9ecef",
                  },
                }}
              >
                <ListItemText primary="Fee Structure" />
                {feeMenuOpen ? <ExpandLessIcon /> : <ExpandMoreIcon />}
              </ListItem>
              <Collapse in={feeMenuOpen} timeout="auto" unmountOnExit>
                <List component="div" disablePadding>
                  {[
                    { path: "/us-international-fee-structure", label: "For US & International" },
                    { path: "/uk-fee-structure", label: "For United Kingdom" },
                  ].map(({ path, label }) => (
                    <ListItem
                      key={path}
                      component={Link}
                      to={path}
                      onClick={handleDrawerClose} // Close Drawer when clicking a link
                      sx={{
                        pl: 4,
                        color: location.pathname === path ? "white" : "inherit",
                        backgroundColor: location.pathname === path ? "#4281ff" : "transparent",
                        "&:hover": {
                          backgroundColor: location.pathname === path ? "#3a75e6" : "#e9ecef",
                        },
                      }}
                    >
                      <ListItemText primary={label} />
                    </ListItem>
                  ))}
                </List>
              </Collapse>

              {/* Services Link */}
              <ListItem
                component={Link}
                to="/services"
                onClick={handleDrawerClose} // Close Drawer when clicking a link
                sx={{
                  color: location.pathname === "/services" ? "white" : "inherit",
                  textTransform: "none",
                  fontSize: "1rem",
                  backgroundColor: location.pathname === "/services" ? "#4281ff" : "transparent",
                  "&:hover": {
                    backgroundColor: location.pathname === "/services" ? "#3a75e6" : "#e9ecef",
                  },
                }}
              >
                <ListItemText primary="Services" />
              </ListItem>

              {/* Contact Link */}
              <ListItem
                component={Link}
                to="/contact"
                onClick={handleDrawerClose} // Close Drawer when clicking a link
                sx={{
                  color: location.pathname === "/contact" ? "white" : "inherit",
                  textTransform: "none",
                  fontSize: "1rem",
                  backgroundColor: location.pathname === "/contact" ? "#4281ff" : "transparent",
                  "&:hover": {
                    backgroundColor: location.pathname === "/contact" ? "#3a75e6" : "#e9ecef",
                  },
                }}
              >
                <ListItemText primary="Contact" />
              </ListItem>

              {/* About Dropdown */}
              <ListItem 
                button 
                onClick={() => setAboutMenuOpen(!aboutMenuOpen)}
                sx={{
                  backgroundColor: isAboutActive ? "#4281ff" : "transparent",
                  color: isAboutActive ? "white" : "inherit",
                  "&:hover": {
                    backgroundColor: isAboutActive ? "#3a75e6" : "#e9ecef",
                  },
                }}
              >
                <ListItemText primary="About" />
                {aboutMenuOpen ? <ExpandLessIcon /> : <ExpandMoreIcon />}
              </ListItem>
              <Collapse in={aboutMenuOpen} timeout="auto" unmountOnExit>
                <List component="div" disablePadding>
                  <ListItem
                    component={Link}
                    to="/about"
                    onClick={handleDrawerClose} // Close Drawer when clicking a link
                    sx={{
                      pl: 4,
                      color: location.pathname === "/about" ? "white" : "inherit",
                      backgroundColor: location.pathname === "/about" ? "#4281ff" : "transparent",
                      "&:hover": {
                        backgroundColor: location.pathname === "/about" ? "#3a75e6" : "#e9ecef",
                      },
                    }}
                  >
                    <ListItemText primary="About Us" />
                  </ListItem>
                  {[
                    { path: "/testimonial", label: "Testimonial" },
                    { path: "/teacher-details", label: "Teacher Single" },
                    { path: "/faq", label: "FAQ" },
                    { path: "/terms-and-condition", label: "Terms & Condition" },
                  ].map(({ path, label }) => (
                    <ListItem
                      key={path}
                      component={Link}
                      to={path}
                      onClick={handleDrawerClose} // Close Drawer when clicking a link
                      sx={{
                        pl: 4,
                        color: location.pathname === path ? "white" : "inherit",
                        backgroundColor: location.pathname === path ? "#4281ff" : "transparent",
                        "&:hover": {
                          backgroundColor: location.pathname === path ? "#3a75e6" : "#e9ecef",
                        },
                      }}
                    >
                      <ListItemText primary={label} />
                    </ListItem>
                  ))}
                </List>
              </Collapse>
            </List>
          </Box>
        </Drawer>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;