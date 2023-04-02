"use client";
import React, { useEffect, useState } from "react";
import styles from "./Habbit.module.css";

//redux
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { habbitActions } from "@/store/habbitSlice";

//next router

import { useRouter } from "next/navigation";

//Toastr react
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

//components
import ChangeModal from "../UI/ChangeModal";

//react material components
import { Button, Avatar, TextField, Typography } from "@mui/material";

export const Habbit = (props) => {
  const router = useRouter()
  const [image, setImage] = useState(props.image);
  const dispatch = useDispatch();
  const openChange = useSelector((state) => state.habbit.changeOpen);
  const date = useSelector((state) => state.habbit.date);
  const dateChanged = useSelector((state) => state.habbit.dateChanged);
  const [btnClass, setBtnClass] = useState("btn-normal");
  const [answer, setAnswer] = useState("");
  const [disabled, setDisabled] = useState(false);
  const [btnText, setBtnText] = useState("Done");
  let success = false;

  const answerChangeHandler = (e) => {
    setAnswer(e.target.value);
  };

  const deleteButtonClickedHandler = async () => {
    const deletedHabbit = {
      email: localStorage.getItem("email"),
      name: props.name,
    };

    const request = await fetch("/api/deleteHabbit", {
      method: "POST",
      body: JSON.stringify(deletedHabbit),
    });

    const res = request.json();
    console.log(res);
    //toast
    const options = { autoClose: 1500 };

    toast.error("Deleting habbit...", options);
    dispatch(habbitActions.changeHabbitAdded());
  };

  const doneButtonClickedHandler = async () => {
    if (answer >= props.goal) {
      success = true;

      setBtnText("✔");
      setBtnClass("btn-success");
    } else {
      setBtnText("X");
      setBtnClass("btn-danger");
    }

    const habbitDone = {
      email: localStorage.getItem("email"),
      name: props.name,
      goal: props.goal,
      question: props.question,
      currency: props.currency,
      image: props.image,
      date: date,
      answer: answer,
      success: success,
    };

    const request = await fetch("/api/unesiNaviku", {
      method: "POST",
      body: JSON.stringify(habbitDone),
    });

    const res = request.json();
    console.log(res);
    setDisabled(true);
  };

  const modalChangeOpened = () => {
    dispatch(habbitActions.changeOpenChanged());
    localStorage.setItem("name", props.name);
  };

  //changing the buttons to normale if date changesc

  useEffect(() => {
    if (dateChanged) {
      setBtnClass("btn-normal");
      setBtnText("DONE");
      dispatch(habbitActions.dateChanged());
    }
  }, [dateChanged]);


  const sendToNameHabbitPage = ( ) => {
    router.push(`/habbits/${props.name}`)
  }

  return (
    <div key={props.name} className={styles["habbit-container"]}>
      <Avatar
       onClick={sendToNameHabbitPage}
        className={styles["avatar"]}
        sx={{ width: 52, height: 52 }}
      >
        <img
          style={{ width: "100%", height: "100%", backgroundSize: "cover" }}
          src={image}
        />
      </Avatar>
      <Typography variant="h5" className={styles["Habbit-name"]}>
        {props.name}
      </Typography>
      <TextField
        onChange={answerChangeHandler}
        className={`${styles["text-field"]} standard-basic`}
        label={`${props.question} ? (${props.currency})`}
        variant="standard"
      />

      <Typography
        style={{
          marginLeft: "7rem",
          display: "inline-block",
          minWidth: "91120px !important",
        }}
        variant="p"
        fontSize="1.2rem"
        className={styles["Habbit-name"]}
      >{`GOAL: ${props.goal} ${props.currency}`}</Typography>

      <Button
        id="btn-done"
        className={styles[`${btnClass}`]}
        //disabled={disabled}
        onClick={doneButtonClickedHandler}
        style={{ marginLeft: "6rem" }}
        variant="contained"
      >
        {btnText}
      </Button>
      <Button
      onClick={modalChangeOpened}
        id="btn-done"
        className={styles["btn-normal"]}
        style={{ marginLeft: "1rem" }}
        
      >
        Edit
      </Button>
      
      <Button
        id="btn-done"
        className={styles["btn-danger"]}
        onClick={deleteButtonClickedHandler}
        style={{ marginLeft: "1rem" }}
        variant="contained"
      >
        Delete
      </Button>
      <ChangeModal
        key={props.name}
        oldName={props.name}
        currency={props.currency}
        email={localStorage.getItem("email")}
        goal={props.goal}
        image={props.image}
        question={props.question}
        name={props.name}
      />
      <ToastContainer />
    </div>
  );
};
