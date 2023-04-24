"use client";
import { useRef } from "react";
import { useRouter } from "next/navigation";
import React from "react";
import "./page.css";
import Link from "next/link";
//Toastr react
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

//redux
import { useDispatch } from "react-redux";
import { userActions } from "@/store/userSlice";

//components
import Image from "next/image";
import logo from "../../public/logo-nobg.png";

const Login = () => {
  const dispatch = useDispatch();
  const router = useRouter();
  let emailRef = useRef();
  let passwordRef = useRef();

  const loginHandler = async (e) => {
    e.preventDefault();

    const response = await fetch("/api/loginuj", {
      method: "POST",
      body: JSON.stringify({
        email: emailRef.current.value,
        password: passwordRef.current.value,
      }),
      headers: {
        "Content-Type": "application/json",
      },
    });

    const res = await response.json();
    console.log(res);
    

    if (res == "Welcome back!") {
      toast.success("Welcome back!");
      dispatch(userActions.changeLoginState());
      dispatch(userActions.addEmail(emailRef.current.value));

      //localStorage resenje

      localStorage.setItem("isLoggedIn", true);
      localStorage.setItem("email", emailRef.current.value);

      router.push("/habbits");
    } else {
      toast.error(`${res}`);
    }
  };

  return (
    <div className="login-container">
      <Link className="image-logo" href="/">
        <Image alt="logo"  src={logo} />
      </Link>
      <div className="box">
        <form onSubmit={loginHandler} className="form">
          <h2>LOGIN</h2>
          <div className="inputBox">
            <input ref={emailRef} type="text" required />
            <span>Username</span>
            <i></i>
          </div>
          <div className="inputBox">
            <input ref={passwordRef} type="password" required />
            <span>Password</span>
            <i></i>
          </div>
          <div className="links">
            <a href="#"></a>
            <Link href="/register">register</Link>
          </div>
          <input type="submit" value="Login" />
        </form>
      </div>
      <ToastContainer />
    </div>
  );
};

export default Login;
