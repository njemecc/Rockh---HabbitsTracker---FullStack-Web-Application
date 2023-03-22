"use client";

import * as React from "react";
import Box from "@mui/material/Box";
import Avatar from "@mui/material/Avatar";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import ListItemIcon from "@mui/material/ListItemIcon";
import Divider from "@mui/material/Divider";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Tooltip from "@mui/material/Tooltip";
import PersonAdd from "@mui/icons-material/PersonAdd";
import Settings from "@mui/icons-material/Settings";
import Logout from "@mui/icons-material/Logout";
import { Button } from "@mui/material";
import "./Menu.css";
import Image from "next/image";
import logo from "../../public/logo-nobg.png";
import { useRouter } from "next/navigation";
import Link from "next/link";

//redux
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { habbitActions } from "@/store/habbitSlice";
import { userActions } from "@/store/userSlice";

export default function AccountMenu() {
  const router = useRouter();
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  const dispatch = useDispatch();
  const photo = useSelector((state) => state.user.photo);

  const handleOpen = () => {
    dispatch(habbitActions.changeOpenState());
  };

  const logoutHandler = () => {
    dispatch(userActions.changeLoginState());

    localStorage.setItem("isLoggedIn", false);
    router.push("/login");
  };

  const dateChangeHandler = (e) => {
    const date = e.target.value;
    dispatch(habbitActions.changeDate(date));

    dispatch(habbitActions.dateChanged());
  };

  return (
    <div
      style={{
        display: "flex",
        borderBottom: "1px solid white",
        paddingBottom: "0.8rem",
      }}
    >
      <Box sx={{ display: "flex", alignItems: "center", textAlign: "center" }}>
        <Link href="/">
          {" "}
          <Image src={logo} />{" "}
        </Link>
        <Button sx={{ minWidth: 100 }}>My Habbits</Button>
        <Link
          className="link-koji-nervira"
          sx={{ textDecoration: "none !important" }}
          href="/progress"
        >
          {" "}
          <Button sx={{ minWidth: 100, textDecoration: "none" }}>
            Progress
          </Button>
        </Link>

        <Button onClick={handleOpen}>Add Habbit</Button>
        <input onChange={dateChangeHandler} type="date" />

        <Tooltip title="Account settings">
          <IconButton
            onClick={handleClick}
            size="small"
            sx={{ ml: 2 }}
            aria-controls={open ? "account-menu" : undefined}
            aria-haspopup="true"
            aria-expanded={open ? "true" : undefined}
          >
            <Avatar sx={{ width: 42, height: 42, border: "1px solid white" }}>
              <img style={{ width: "100%", height: "100%" }} src={photo} />
            </Avatar>
          </IconButton>
        </Tooltip>
      </Box>
      <Menu
        anchorEl={anchorEl}
        id="account-menu"
        open={open}
        onClose={handleClose}
        onClick={handleClose}
        PaperProps={{
          elevation: 0,
          sx: {
            overflow: "visible",
            filter: "drop-shadow(0px 2px 8px rgba(0,0,0,0.32))",
            mt: 1.5,
            "& .MuiAvatar-root": {
              width: 32,
              height: 32,
              ml: -0.5,
              mr: 1,
            },
            "&:before": {
              content: '""',
              display: "block",
              position: "absolute",
              top: 0,
              right: 14,
              width: 10,
              height: 10,
              bgcolor: "background.paper",
              transform: "translateY(-50%) rotate(45deg)",
              zIndex: 0,
            },
          },
        }}
        transformOrigin={{ horizontal: "right", vertical: "top" }}
        anchorOrigin={{ horizontal: "right", vertical: "bottom" }}
      >
        <MenuItem onClick={handleClose}>
          <Avatar /> Profile
        </MenuItem>
        <MenuItem onClick={handleClose}>
          <Avatar /> My account
        </MenuItem>
        <Divider />
        <MenuItem onClick={handleClose}>
          <ListItemIcon>
            <PersonAdd fontSize="small" />
          </ListItemIcon>
          Add another account
        </MenuItem>
        <MenuItem onClick={handleClose}>
          <ListItemIcon>
            <Settings fontSize="small" />
          </ListItemIcon>
          Settings
        </MenuItem>
        <MenuItem onClick={logoutHandler}>
          <ListItemIcon>
            <Logout fontSize="small" />
          </ListItemIcon>
          Logout
        </MenuItem>
      </Menu>
    </div>
  );
}
