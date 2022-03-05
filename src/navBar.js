import React, { useState } from "react";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import MenuList from "@mui/material/MenuList";
import Button from "@mui/material/Button";
import MenuRoundedIcon from "@mui/icons-material/MenuRounded";
// import { Link } from "@mui/material/Link";
import { Link } from "react-router-dom";

function NavBar() {
  const [anchorEl, setAnchorEl] = useState(null);

  const handelOpenMenu = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleCloseMenu = (event) => {
    setAnchorEl(null);
  };
  return (
    <>
      <AppBar
        position="static"
        color="transparent"
        elevation={0}
        sx={{ color: "#D3D3D3" }}
      >
        <Toolbar>
          <Button
            aria-controls="menu"
            onClick={handelOpenMenu}
            sx={{ color: "#D3D3D3" }}
          >
            <MenuRoundedIcon fontSize="medium" sx={{ color: "#D3D3D3" }} />
          </Button>
        </Toolbar>
      </AppBar>

      <Menu
        id="menu"
        onClose={handleCloseMenu}
        anchorEl={anchorEl}
        open={Boolean(anchorEl)}
      >
        <MenuItem style={{ fontFamily: "dosis" }}>
          <Link to="/" style={{ color: "#808080" }}>
            Clouds
          </Link>
        </MenuItem>
        <MenuItem style={{ fontFamily: "dosis" }}>
          <Link to="/ocean" style={{ color: "#808080" }}>
            Ocean
          </Link>
        </MenuItem>
        <MenuItem style={{ fontFamily: "dosis" }}>
          <Link to="/galaxy" style={{ color: "#808080" }}>
            Galaxy
          </Link>
        </MenuItem>
      </Menu>
    </>
  );
}

export default NavBar;
