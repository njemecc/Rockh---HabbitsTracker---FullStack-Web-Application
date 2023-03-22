"use client";
import React from "react";
import { useRouter } from "next/navigation";
import "./page.css";
//redux
import { useSelector, useDispatch } from "react-redux";
import { userActions } from "@/store/userSlice";

//hooks
import { useState } from "react";

//komponente
import Habbits from "@/components/habbits/Habbits";
import AccountMenu from "@/components/UI/Menu";

import { Button } from "@mui/material";
import MyModal from "@/components/UI/Modal";

const HabbitsPage = () => {
  const router = useRouter();
  const dispatch = useDispatch();

  const isLoggedIn = useSelector((state) => state.user.isLoggedIn);

  const localSLog = localStorage.getItem("isLoggedIn");

  const [isLoggedInLocalStorage, setIsLoggedInLocalStorage] =
    useState(localSLog);

  console.log(isLoggedInLocalStorage);

  if (!isLoggedInLocalStorage) {
    router.push("/login");
  }

  //   if(!isLoggedIn){
  //     console.log(isLoggedIn)
  //     router.push("/login")
  //   }

  //log out after 24 hours
  setTimeout(() => {
    dispatch(userActions.changeLoginState());
    setIsLoggedInLocalStorage(false);
  }, 86400000);

  //modal
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <>
      <Habbits />
      <MyModal open={open} onClose={handleClose} />
    </>
  );
};

export default HabbitsPage;
