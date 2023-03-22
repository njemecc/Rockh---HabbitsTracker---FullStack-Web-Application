"use client";
import { useRouter } from "next/navigation";

import React from "react";
import "./page.css";
import Link from "next/link";
import { useRef } from "react";

//Toastr react
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

//components
import logo from "../../public/logo-nobg.png";
import Image from "next/image";

const Register = () => {
  const router = useRouter();
  let emailRef = useRef();
  let passwordRef = useRef();
  let photoRef = useRef();

  async function submitRegisterHandler(e) {
    e.preventDefault();
    console.log(emailRef.current.value);
    console.log(passwordRef.current.value);

    const dataToSend = {
      email: emailRef.current.value.toString(),
      password: passwordRef.current.value.toString(),
      photo: photoRef.current.value.toString(),
    };

    const response = await fetch("/api/registruj", {
      method: "POST",
      body: JSON.stringify(dataToSend),
      headers: {
        "Content-Type": "application/json",
      },
    });

    const res = await response.json();

    console.log(res);

    if (res.acknowledged === true) {
      toast.success("You are succesfully registrated!");

      router.push("/login");
    } else {
      return toast.error(`${JSON.stringify(res)}`, {
        position: "top-right",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
    }
  }

  return (
    <>
      <Link href="/">
        <Image className="image-logo" src={logo} />
      </Link>
      <div className="box">
        <form onSubmit={submitRegisterHandler} className="form">
          <h2>REGISTER</h2>
          <div className="inputBox">
            <input ref={emailRef} type="email" required />
            <span>Email</span>
            <i></i>
          </div>
          <div className="inputBox">
            <input ref={passwordRef} type="password" required />
            <span>Password</span>
            <i></i>
          </div>
          <div className="inputBox">
            <input ref={photoRef} type="text" required />
            <span>photo url</span>
            <i></i>
          </div>
          <div className="links">
            <a href="#"></a>
            <Link href="/login">login</Link>
          </div>
          <input type="submit" value="register" />
        </form>
      </div>
      <ToastContainer />
    </>
  );
};

export default Register;
