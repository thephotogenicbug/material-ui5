import React,{useState} from "react";
import { AppBar, Toolbar, IconButton, Typography, Button, Badge, Menu, MenuItem } from "@mui/material";
import MenuOutlinedIcon from "@mui/icons-material/MenuOutlined";
import { Box } from "@mui/system";
import ShoppingBasketIcon from "@mui/icons-material/ShoppingBasket";
import ShoppingBagIcon from "@mui/icons-material/ShoppingBag";

const Navbar = () => {

    const [anchorEl, setAnchorEl] = useState(null);

    const openMenu = Boolean(anchorEl);


    const handleClick =(e) =>{
        setAnchorEl(e.currentTarget)
    }
   
    const handleClose = () =>{
        setAnchorEl(null)
    }
  return (
    <Box elevation={0} sx={{ backgroundColor: "white" }}>
      <Toolbar>
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            width: "100%",
            padding:'10px 0px'
          }}
          component="div"
        >
          {/* logo */}
          <Box>
            <IconButton>
              <ShoppingBagIcon sx={{fontSize:'2.4rem'}} />
            </IconButton>
          </Box>

          {/* links */}
          <Box sx={{ display: "flex" }}>
            <Typography
              sx={{
                marginRight: "20px",
                cursor: "pointer",
                color: "#616161",
              }}
            >
              Home
            </Typography>
            <Typography
              sx={{
                marginRight: "20px",
                cursor: "pointer",
                color: "#616161",
              }}
            >
              Brand
            </Typography>
            <Typography
              sx={{
                marginRight: "20px",
                cursor: "pointer",
                color: "#616161",
              }}
              aria-controls="basic-menu"
              aria-aria-haspopup="true"
              aria-expanded={openMenu ? "true" : undefined}
              onClick={handleClick}
            >
              Categories
            </Typography>
            {/* dropdown items */}
            <Menu
              id="basic-menu"
              anchorEl={anchorEl}
              open={openMenu}
              onClose={handleClose}
            >
              <MenuItem onClick={handleClose}>Men</MenuItem>
              <MenuItem onClick={handleClose}>Women</MenuItem>
              <MenuItem onClick={handleClose}>Phones</MenuItem>
              <MenuItem onClick={handleClose}>Accessories</MenuItem>
              <MenuItem onClick={handleClose}>Others</MenuItem>
            </Menu>
            <Typography
              sx={{
                marginRight: "20px",
                cursor: "pointer",
                color: "#616161",
              }}
            >
              Men
            </Typography>
            <Typography
              sx={{
                marginRight: "20px",
                cursor: "pointer",
                color: "#616161",
              }}
            >
              Women
            </Typography>
            <Typography
              sx={{
                marginRight: "20px",
                cursor: "pointer",
                color: "#616161",
              }}
            >
              FAQ
            </Typography>
          </Box>

          {/* Button links */}
          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Button
              sx={{ background: "#ff4081" }}
              disableElevation
              variant="contained"
            >
              Account
            </Button>
            <IconButton>
              <Badge badgeContent={4} color="primary">
                <ShoppingBasketIcon color="action" />
              </Badge>
            </IconButton>
          </Box>
        </Box>
      </Toolbar>
    </Box>
  );
};

export default Navbar;
