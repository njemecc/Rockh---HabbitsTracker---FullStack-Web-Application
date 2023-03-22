"use client";

//hooks
import { useState } from "react";

//redux
import { useSelector } from "react-redux";

//next features
import { useRouter } from "next/router";

//css
import "./page.css";
const Progress = () => {
  const router = useRouter();
  const isLoggedIn = useSelector((state) => state.user.isLoggedIn);

  const localSLog = localStorage.getItem("isLoggedIn");

  const [isLoggedInLocalStorage, setIsLoggedInLocalStorage] =
    useState(localSLog);

  if (!isLoggedInLocalStorage || !isLoggedIn) {
    router.push("/login");
  }

  return <div>bidibao</div>;
};

export default Progress;
