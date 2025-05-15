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
      <Toolbar sx={{ justifyContent: { xs: "space-between", md: "center" } }}>
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
          }}
        >
          {/* Home Link */}
          <Button
            component={Link}
            to="/"
            sx={{
              color: location.pathname === "/" ? "primary.main" : "inherit",
              textTransform: "none",
              fontSize: "1rem",
              backgroundColor: location.pathname === "/" ? "#f8f9fa" : "transparent",
              borderRadius: "4px",
              padding: "6px 12px",
              "&:hover": {
                backgroundColor: "#e9ecef",
              },
            }}
          >
            Home
          </Button>

          {/* Fee Structure Dropdown */}
          <Button
            sx={{
              color: isFeeActive ? "primary.main" : "inherit",
              textTransform: "none",
              fontSize: "1rem",
              backgroundColor: isFeeActive ? "#f8f9fa" : "transparent",
              borderRadius: "4px",
              padding: "6px 12px",
              "&:hover": {
                backgroundColor: "#e9ecef",
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
                  color: location.pathname === path ? "primary.main" : "inherit",
                  backgroundColor: location.pathname === path ? "#f8f9fa" : "transparent",
                  "&:hover": {
                    backgroundColor: "#e9ecef",
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
              color: location.pathname === "/services" ? "primary.main" : "inherit",
              textTransform: "none",
              fontSize: "1rem",
              backgroundColor: location.pathname === "/services" ? "#f8f9fa" : "transparent",
              borderRadius: "4px",
              padding: "6px 12px",
              "&:hover": {
                backgroundColor: "#e9ecef",
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
              color: location.pathname === "/contact" ? "primary.main" : "inherit",
              textTransform: "none",
              fontSize: "1rem",
              backgroundColor: location.pathname === "/contact" ? "#f8f9fa" : "transparent",
              borderRadius: "4px",
              padding: "6px 12px",
              "&:hover": {
                backgroundColor: "#e9ecef",
              },
            }}
          >
            Contact
          </Button>

          {/* About Dropdown */}
          <Button
            sx={{
              color: isAboutActive ? "primary.main" : "inherit",
              textTransform: "none",
              fontSize: "1rem",
              backgroundColor: isAboutActive ? "#f8f9fa" : "transparent",
              borderRadius: "4px",
              padding: "6px 12px",
              "&:hover": {
                backgroundColor: "#e9ecef",
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
                color: location.pathname === "/about" ? "primary.main" : "inherit",
                backgroundColor: location.pathname === "/about" ? "#f8f9fa" : "transparent",
                "&:hover": {
                  backgroundColor: "#e9ecef",
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
                  color: location.pathname === path ? "primary.main" : "inherit",
                  backgroundColor: location.pathname === path ? "#f8f9fa" : "transparent",
                  "&:hover": {
                    backgroundColor: "#e9ecef",
                  },
                }}
              >
                {label}
              </MenuItem>
            ))}
          </Menu>
        </Box>

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
            <List>
              {/* Home Link */}
              <ListItem
                component={Link}
                to="/"
                onClick={handleDrawerClose} // Close Drawer when clicking a link
                sx={{
                  color: location.pathname === "/" ? "primary.main" : "inherit",
                  textTransform: "none",
                  fontSize: "1rem",
                  backgroundColor: location.pathname === "/" ? "#f8f9fa" : "transparent",
                }}
              >
                <ListItemText primary="Home" />
              </ListItem>

              {/* Fee Structure Dropdown */}
              <ListItem 
                button 
                onClick={() => setFeeMenuOpen(!feeMenuOpen)}
                sx={{
                  backgroundColor: isFeeActive ? "#f8f9fa" : "transparent",
                  color: isFeeActive ? "primary.main" : "inherit",
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
                        color: location.pathname === path ? "primary.main" : "inherit",
                        backgroundColor: location.pathname === path ? "#f8f9fa" : "transparent",
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
                  color: location.pathname === "/services" ? "primary.main" : "inherit",
                  textTransform: "none",
                  fontSize: "1rem",
                  backgroundColor: location.pathname === "/services" ? "#f8f9fa" : "transparent",
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
                  color: location.pathname === "/contact" ? "primary.main" : "inherit",
                  textTransform: "none",
                  fontSize: "1rem",
                  backgroundColor: location.pathname === "/contact" ? "#f8f9fa" : "transparent",
                }}
              >
                <ListItemText primary="Contact" />
              </ListItem>

              {/* About Dropdown */}
              <ListItem 
                button 
                onClick={() => setAboutMenuOpen(!aboutMenuOpen)}
                sx={{
                  backgroundColor: isAboutActive ? "#f8f9fa" : "transparent",
                  color: isAboutActive ? "primary.main" : "inherit",
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
                      color: location.pathname === "/about" ? "primary.main" : "inherit",
                      backgroundColor: location.pathname === "/about" ? "#f8f9fa" : "transparent",
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
                        color: location.pathname === path ? "primary.main" : "inherit",
                        backgroundColor: location.pathname === path ? "#f8f9fa" : "transparent",
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