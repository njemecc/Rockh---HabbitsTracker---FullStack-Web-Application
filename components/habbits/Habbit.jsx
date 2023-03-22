"use client";
import React, { useEffect, useState } from "react";
import styles from "./Habbit.module.css";

//redux
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { habbitActions } from "@/store/habbitSlice";

import { Button, Avatar, TextField, Typography } from "@mui/material";

export const Habbit = (props) => {
  const dispatch = useDispatch();
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

  //changing the buttons to normale if date changesc

  useEffect(() => {
    if (dateChanged) {
      setBtnClass("btn-normal");
      setBtnText("DONE");
      dispatch(habbitActions.dateChanged());
    }
  }, [dateChanged]);

  return (
    <div className={styles["habbit-container"]}>
      <Avatar sx={{ width: 52, height: 52 }}>
        <img
          style={{ width: "100%", height: "100%", backgroundSize: "cover" }}
          src={props.image}
        />
      </Avatar>
      <Typography variant="h5" className={styles["Habbit-name"]}>
        {props.name}
      </Typography>
      <TextField
        onChange={answerChangeHandler}
        className="standard-basic"
        label={`${props.question} ? (${props.currency})`}
        variant="standard"
      />
      <Typography
        style={{ marginLeft: "7rem" }}
        variant="p"
        fontSize="1.2rem"
        className={styles["Habbit-name"]}
      >{`GOAL: ${props.goal} ${props.currency}`}</Typography>
      <Button
        id="btn-done"
        className={styles[`${btnClass}`]}
        //disabled={disabled}
        onClick={doneButtonClickedHandler}
        style={{ marginLeft: "12rem" }}
        variant="contained"
      >
        {btnText}
      </Button>
    </div>
  );
};
