"use client";
import React from "react";
import { useRouter } from "next/navigation";
import "./page.css";
//redux
import { useSelector, useDispatch } from "react-redux";
import { userActions } from "@/store/userSlice";
import { habbitActions } from "@/store/habbitSlice";

//hooks
import { useState } from "react";

//komponente
import Habbits from "@/components/habbits/Habbits";

import MyModal from "@/components/UI/Modal";

const HabbitsPage = () => {
  //test koliko se puta revalidira ova komponenta

  //datepciker
  localStorage.setItem("datepicker", true);
  const router = useRouter();
  const dispatch = useDispatch();

  dispatch(habbitActions.changeDatePickerTrue());

  //const isLoggedIn = useSelector((state) => state.user.isLoggedIn);

  const localSLog = localStorage.getItem("isLoggedIn");
  console.log(localSLog);

  if (localSLog == "false") {
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

    localStorage.setItem("isLoggedIn", false);
  }, 86400000);

  //modal
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <>
      <Habbits />
      <MyModal />
    </>
  );
};

export default HabbitsPage;
