"use client";
import { Modal, Box, Typography, TextField, Button } from "@mui/material";
import React from "react";
import "./Modal.css";
import { useState } from "react";

//redux
import { habbitActions } from "@/store/habbitSlice";
import { useDispatch, useSelector } from "react-redux";

//Toastr react
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const MyModal = (props) => {

  const options = {autoClose:1500}
  const style = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: 400,
    bgcolor: "background.paper",
    border: "2px solid #000",
    boxShadow: 24,
    p: 4,
  };

  const dispatch = useDispatch();
  const open = useSelector((state) => state.habbit.open);

  const onCloseHandler = () => {
    dispatch(habbitActions.changeOpenState());
  };

  const [name, setName] = useState("");
  const [question, setQuestion] = useState("");
  const [goal, setGoal] = useState("");
  const [imageUrl, setImageUrl] = useState("");
  const [currency, setCurrency] = useState("");

  const changeNameHandler = (e) => {
    setName(e.target.value);
  };

  const changeQuestionHandler = (e) => {
    setQuestion(e.target.value);
  };

  const changeGoalHandler = (e) => {
    setGoal(e.target.value);
  };

  const changePictureHandler = (e) => {
    setImageUrl(e.target.value);
  };

  const changeCurrencyHandler = (e) => {
    setCurrency(e.target.value);
  };

  const sendHabbitToDB = async () => {
    const dataToSend = {
      email: `${localStorage.getItem("email")}`,
      name: name,
      question: question,
      goal: goal,
      currency: currency,
      imageUrl: imageUrl,
    };
    console.log(dataToSend);

    const request = await fetch("/api/newHabbit", {
      method: "POST",
      body: JSON.stringify(dataToSend),
    });

    const response = await request.json();
    console.log(response);

    if (response.acknowledged === true) {
      toast.success("New habbit is added!",options);
    } else {
      toast.error(`${response}`,options);
    }

    //zatvaranje modala
    dispatch(habbitActions.changeOpenState());
    dispatch(habbitActions.changeHabbitAdded());
  };

  return (
    <>
      <Modal
        open={open}
        onClose={onCloseHandler}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography sx={{color:"black !important"}} id="modal-modal-title" variant="h6" component="h2">
            New Habbit
          </Typography>
          <form>
            <div>
              <TextField
                onChange={changeNameHandler}
                className="standard-basic"
                label="Name"
                variant="standard"
              />
              <TextField
                onChange={changeQuestionHandler}
                className="standard-basic"
                label="Question"
                variant="standard"
              />
            </div>
            <div>
              <TextField
                onChange={changeGoalHandler}
                className="standard-basic"
                label="Goal"
                variant="standard"
              />
              <TextField
                onChange={changeCurrencyHandler}
                className="standard-basic"
                label="Currency"
                variant="standard"
              />
            </div>
            <div>
              <TextField
                onChange={changePictureHandler}
                className="standard-basic"
                label="Picture URL"
                variant="standard"
              />
              <Button
                onClick={sendHabbitToDB}
                className="button-add"
                size="large"
                variant="contained"
              >
                Add
              </Button>
            </div>
          </form>
        </Box>
      </Modal>
      <ToastContainer />
    </>
  );
};

export default MyModal;
