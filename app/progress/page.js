"use client";

//hooks
import { useState } from "react";

//redux
import { useSelector } from "react-redux";

//next features
import { useRouter } from "next/navigation";

//css
import "./page.css";
const Progress = () => {
  const router = useRouter();
  const isLoggedIn = useSelector((state) => state.user.isLoggedIn);

  const localSLog = localStorage.getItem("isLoggedIn");

  if (localSLog == "false") {
    router.push("/login");
  }

  return <div>bidibao</div>;
};

export default Progress;
