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
  const [pagesMenuOpen, setPagesMenuOpen] = useState(false);
  const [feeAnchorEl, setFeeAnchorEl] = useState(null);
  const [pagesAnchorEl, setPagesAnchorEl] = useState(null);

  const handleNavToggle = () => setIsNavOpen(!isNavOpen);

  const handleFeeMenuOpen = (event) => setFeeAnchorEl(event.currentTarget);
  const handleFeeMenuClose = () => setFeeAnchorEl(null);

  const handlePagesMenuOpen = (event) => setPagesAnchorEl(event.currentTarget);
  const handlePagesMenuClose = () => setPagesAnchorEl(null);

  const handleDrawerClose = () => setIsNavOpen(false);

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
          {/* Home, About, Services, Contact Links */}
          {[
            { path: "/", label: "Home" },
            { path: "/about", label: "About" },
            { path: "/services", label: "Services" },
            { path: "/contact", label: "Contact" },
          ].map(({ path, label }) => (
            <Button
              key={path}
              component={Link}
              to={path}
              sx={{
                color: location.pathname === path ? "primary.main" : "inherit",
                textTransform: "none",
                fontSize: "1rem",
              }}
            >
              {label}
            </Button>
          ))}

          {/* Fee Structure Dropdown */}
          <Button
            sx={{ color: "inherit", textTransform: "none", fontSize: "1rem" }}
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
                sx={{ color: location.pathname === path ? "primary.main" : "inherit" }}
              >
                {label}
              </MenuItem>
            ))}
          </Menu>

          {/* Pages Dropdown */}
          <Button
            sx={{ color: "inherit", textTransform: "none", fontSize: "1rem" }}
            onClick={handlePagesMenuOpen}
            endIcon={<ArrowDropDownIcon />}
          >
            Pages
          </Button>
          <Menu
            anchorEl={pagesAnchorEl}
            open={Boolean(pagesAnchorEl)}
            onClose={handlePagesMenuClose}
          >
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
                onClick={handlePagesMenuClose}
                sx={{ color: location.pathname === path ? "primary.main" : "inherit" }}
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
              {/* Home, About, Services, Contact Links */}
              {[
                { path: "/", label: "Home" },
                { path: "/about", label: "About" },
                { path: "/services", label: "Services" },
                { path: "/contact", label: "Contact" },
              ].map(({ path, label }) => (
                <ListItem
                  key={path}
                  component={Link}
                  to={path}
                  onClick={handleDrawerClose} // Close Drawer when clicking a link
                  sx={{
                    color: location.pathname === path ? "primary.main" : "inherit",
                    textTransform: "none",
                    fontSize: "1rem",
                  }}
                >
                  <ListItemText primary={label} />
                </ListItem>
              ))}

              {/* Fee Structure Dropdown */}
              <ListItem button onClick={() => setFeeMenuOpen(!feeMenuOpen)}>
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
                      }}
                    >
                      <ListItemText primary={label} />
                    </ListItem>
                  ))}
                </List>
              </Collapse>

              {/* Pages Dropdown */}
              <ListItem button onClick={() => setPagesMenuOpen(!pagesMenuOpen)}>
                <ListItemText primary="Pages" />
                {pagesMenuOpen ? <ExpandLessIcon /> : <ExpandMoreIcon />}
              </ListItem>
              <Collapse in={pagesMenuOpen} timeout="auto" unmountOnExit>
                <List component="div" disablePadding>
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