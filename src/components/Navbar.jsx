import { useState, useRef, useEffect } from "react";
import { waLink, WHATSAPP_BOOKING_MESSAGE } from "../constants/contact";
import { Link, useLocation } from "react-router-dom";
import {
  AppBar,
  Toolbar,
  IconButton,
  Button,
  Box,
  Drawer,
  List,
  ListItem,
  ListItemText,
  Collapse,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import ExpandLessIcon from "@mui/icons-material/ExpandLess";

const navLink = (pathname, path) => ({
  color: pathname === path ? "white" : "inherit",
  textTransform: "none",
  fontSize: { lg: '0.8rem', xl: '0.9375rem' },
  whiteSpace: 'nowrap',
  backgroundColor: pathname === path ? "#4281ff" : "transparent",
  borderRadius: "4px",
  padding: { lg: '6px 8px', xl: '6px 12px' },
  "&:hover": {
    backgroundColor: pathname === path ? "#3a75e6" : "#e9ecef",
  },
});

const Navbar = () => {
  const location = useLocation();
  const [isNavOpen, setIsNavOpen] = useState(false);
  const [aboutMenuOpen, setAboutMenuOpen] = useState(false);
  const aboutMenuRef = useRef(null);

  const handleDrawerClose = () => setIsNavOpen(false);

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (aboutMenuRef.current && !aboutMenuRef.current.contains(e.target)) {
        setAboutMenuOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const isFeeActive = location.pathname.includes("fee-structure");
  const isTestPrepActive = location.pathname.startsWith("/test-prep");
  const isAboutActive =
    location.pathname === "/about" ||
    location.pathname === "/testimonial" ||
    location.pathname === "/tutors" ||
    location.pathname === "/faq" ||
    location.pathname === "/terms";

  return (
    <AppBar position="static" sx={{ backgroundColor: "white", color: "black", boxShadow: "none", position: "relative", zIndex: 1200 }}>
      <Toolbar sx={{ justifyContent: "space-between" }}>
        {/* Logo */}
        <Box sx={{ display: "flex", alignItems: "center", marginLeft: "50px" }}>
          <Link to="/">
            <img
              src="/images/LOGO/PNG/Color Logo PNG.png"
              alt="Mathedemic Logo"
              width="160"
              height="50"
              style={{ height: "50px", width: "auto" }}
            />
          </Link>
        </Box>

        {/* Mobile toggle */}
        <IconButton
          size="large"
          edge="start"
          color="inherit"
          aria-label="menu"
          sx={{ display: { xs: "block", lg: "none" } }}
          onClick={() => setIsNavOpen(!isNavOpen)}
        >
          <MenuIcon />
        </IconButton>

        {/* Desktop Nav */}
        <Box
          sx={{
            display: { xs: "none", lg: "flex" },
            flexDirection: "row",
            alignItems: "center",
            gap: { lg: 0.5, xl: 1.5 },
            position: "absolute",
            left: "50%",
            transform: "translateX(-50%)",
          }}
        >
          <Button component={Link} to="/" sx={navLink(location.pathname, "/")}>Home</Button>

          {/* Fee Structure — single link, no dropdown */}
          <Button
            component={Link}
            to="/fee-structure"
            sx={{
              color: isFeeActive ? "white" : "inherit",
              textTransform: "none",
              fontSize: { lg: '0.8rem', xl: '0.9375rem' },
              whiteSpace: 'nowrap',
              backgroundColor: isFeeActive ? "#4281ff" : "transparent",
              borderRadius: "4px",
              padding: { lg: '6px 8px', xl: '6px 12px' },
              "&:hover": { backgroundColor: isFeeActive ? "#3a75e6" : "#e9ecef" },
            }}
          >
            Fee Structure
          </Button>

          <Button component={Link} to="/services" sx={navLink(location.pathname, "/services")}>Services</Button>
          <Button
            component={Link}
            to="/test-prep"
            sx={{
              color: isTestPrepActive ? "white" : "inherit",
              textTransform: "none",
              fontSize: { lg: '0.8rem', xl: '0.9375rem' },
              whiteSpace: 'nowrap',
              backgroundColor: isTestPrepActive ? "#4281ff" : "transparent",
              borderRadius: "4px",
              padding: { lg: '6px 8px', xl: '6px 12px' },
              "&:hover": { backgroundColor: isTestPrepActive ? "#3a75e6" : "#e9ecef" },
            }}
          >
            Test Prep
          </Button>
          <Button component={Link} to="/contact" sx={navLink(location.pathname, "/contact")}>Contact</Button>

          {/* About dropdown */}
          <Box ref={aboutMenuRef} sx={{ position: "relative" }}>
            <Button
              onClick={() => setAboutMenuOpen(!aboutMenuOpen)}
              endIcon={aboutMenuOpen ? <ExpandLessIcon /> : <ExpandMoreIcon />}
              sx={{
                color: isAboutActive ? "white" : "inherit",
                textTransform: "none",
                fontSize: { lg: '0.8rem', xl: '0.9375rem' },
                whiteSpace: 'nowrap',
                backgroundColor: isAboutActive ? "#4281ff" : "transparent",
                borderRadius: "4px",
                padding: { lg: '6px 8px', xl: '6px 12px' },
                "&:hover": { backgroundColor: isAboutActive ? "#3a75e6" : "#e9ecef" },
              }}
            >
              About
            </Button>
            {aboutMenuOpen && (
              <Box sx={{
                position: "absolute", top: "100%", left: 0, zIndex: 1300,
                background: "#fff", borderRadius: "8px", boxShadow: "0 8px 24px rgba(0,0,0,0.12)",
                minWidth: "200px", py: 1,
              }}>
                {[
                  { path: "/about", label: "About Us" },
                  { path: "/tutors", label: "Our Tutors" },
                  { path: "/faq", label: "FAQ" },
                  { path: "/resources", label: "Resources" },
                  { path: "/terms", label: "Terms & Conditions" },
                ].map(({ path, label }) => (
                  <Box
                    key={path}
                    component={Link}
                    to={path}
                    onClick={() => setAboutMenuOpen(false)}
                    sx={{
                      display: "block",
                      px: 2, py: 1,
                      color: location.pathname === path ? "#4281FF" : "#374151",
                      fontWeight: location.pathname === path ? 700 : 400,
                      fontSize: "14px",
                      textDecoration: "none",
                      "&:hover": { background: "#F3F4F6", color: "#4281FF" },
                    }}
                  >
                    {label}
                  </Box>
                ))}
              </Box>
            )}
          </Box>

          {/* Get Free Trial CTA */}
          <Button
            component="a"
            href={waLink(WHATSAPP_BOOKING_MESSAGE)}
            target="_blank"
            rel="noopener noreferrer"
            sx={{
              backgroundColor: '#4281FF',
              color: '#FFFFFF',
              borderRadius: '8px',
              padding: { lg: '7px 14px', xl: '8px 20px' },
              textTransform: 'none',
              fontWeight: 600,
              fontSize: { lg: '0.8rem', xl: '0.9rem' },
              whiteSpace: 'nowrap',
              marginLeft: { lg: '4px', xl: '8px' },
              '&:hover': { backgroundColor: '#2d6ee8', transform: 'translateY(-1px)', color: '#FFFFFF' },
              transition: 'background-color 0.2s, transform 0.15s',
            }}
          >
            Get Free Trial
          </Button>
        </Box>

        <Box sx={{ display: { xs: "none", lg: "block" }, width: "8px" }}></Box>

        {/* Mobile Drawer */}
        <Drawer
          anchor="left"
          open={isNavOpen}
          onClose={handleDrawerClose}
          sx={{ display: { xs: "block", lg: "none" } }}
        >
          <Box sx={{ width: 250 }} role="presentation" onClick={(e) => e.stopPropagation()} onKeyDown={(e) => e.stopPropagation()}>
            <Box sx={{ p: 2, display: "flex", justifyContent: "center" }}>
              <Link to="/" onClick={handleDrawerClose}>
                <img src="/images/LOGO/PNG/Color Logo PNG.png" alt="Mathedemic Logo" style={{ height: "40px" }} />
              </Link>
            </Box>
            <List>
              <ListItem component={Link} to="/" onClick={handleDrawerClose}
                sx={{ color: location.pathname === "/" ? "white" : "inherit", backgroundColor: location.pathname === "/" ? "#4281ff" : "transparent", "&:hover": { backgroundColor: "#e9ecef" } }}>
                <ListItemText primary="Home" />
              </ListItem>

              <ListItem component={Link} to="/fee-structure" onClick={handleDrawerClose}
                sx={{ color: isFeeActive ? "white" : "inherit", backgroundColor: isFeeActive ? "#4281ff" : "transparent", "&:hover": { backgroundColor: "#e9ecef" } }}>
                <ListItemText primary="Fee Structure" />
              </ListItem>

              <ListItem component={Link} to="/services" onClick={handleDrawerClose}
                sx={{ color: location.pathname === "/services" ? "white" : "inherit", backgroundColor: location.pathname === "/services" ? "#4281ff" : "transparent", "&:hover": { backgroundColor: "#e9ecef" } }}>
                <ListItemText primary="Services" />
              </ListItem>

              <ListItem component={Link} to="/test-prep" onClick={handleDrawerClose}
                sx={{ color: isTestPrepActive ? "white" : "inherit", backgroundColor: isTestPrepActive ? "#4281ff" : "transparent", "&:hover": { backgroundColor: "#e9ecef" } }}>
                <ListItemText primary="Test Prep" />
              </ListItem>

              <ListItem component={Link} to="/contact" onClick={handleDrawerClose}
                sx={{ color: location.pathname === "/contact" ? "white" : "inherit", backgroundColor: location.pathname === "/contact" ? "#4281ff" : "transparent", "&:hover": { backgroundColor: "#e9ecef" } }}>
                <ListItemText primary="Contact" />
              </ListItem>

              <ListItem button onClick={() => setAboutMenuOpen(!aboutMenuOpen)}
                sx={{ backgroundColor: isAboutActive ? "#4281ff" : "transparent", color: isAboutActive ? "white" : "inherit", "&:hover": { backgroundColor: "#e9ecef" } }}>
                <ListItemText primary="About" />
                {aboutMenuOpen ? <ExpandLessIcon /> : <ExpandMoreIcon />}
              </ListItem>
              <Collapse in={aboutMenuOpen} timeout="auto" unmountOnExit>
                <List component="div" disablePadding>
                  {[
                    { path: "/about", label: "About Us" },
                    { path: "/tutors", label: "Our Tutors" },
                    { path: "/faq", label: "FAQ" },
                    { path: "/resources", label: "Resources" },
                    { path: "/terms", label: "Terms & Conditions" },
                  ].map(({ path, label }) => (
                    <ListItem key={path} component={Link} to={path} onClick={handleDrawerClose}
                      sx={{ pl: 4, color: location.pathname === path ? "white" : "inherit", backgroundColor: location.pathname === path ? "#4281ff" : "transparent", "&:hover": { backgroundColor: "#e9ecef" } }}>
                      <ListItemText primary={label} />
                    </ListItem>
                  ))}
                </List>
              </Collapse>

              <ListItem component="a" href={waLink(WHATSAPP_BOOKING_MESSAGE)} target="_blank" rel="noopener noreferrer" onClick={handleDrawerClose}
                sx={{ backgroundColor: '#4281FF', color: '#FFFFFF', borderRadius: '8px', margin: '12px 8px 4px', fontWeight: 600, justifyContent: 'center', '&:hover': { backgroundColor: '#2d6ee8', color: '#FFFFFF' } }}>
                <ListItemText primary="Get Free Trial" sx={{ textAlign: 'center' }} />
              </ListItem>
            </List>
          </Box>
        </Drawer>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
