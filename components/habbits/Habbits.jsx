"use client";
import React from "react";
import styles from "./Habbits.module.css";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { habbitActions } from "@/store/habbitSlice";
import { userActions } from "@/store/userSlice";
import { useDispatch } from "react-redux";
//componenets
import { Habbit } from "./Habbit";
import Loading from "../../app/loading";
const Habbits = () => {
  const dispatch = useDispatch();
  const [data, setData] = useState([]);
  const [photo, setPhoto] = useState("");
  const email = localStorage.getItem("email");
  const habbitAdded = useSelector((state) => state.habbit.habbitAdded);
  const isLoading = useSelector((state) => state.habbit.isLoading);

  useEffect(() => {
    const fetchData = async () => {
      const result = await fetch("/api/getHabbits", {
        method: "POST",
        body: JSON.stringify(email),
      });

      const res = await result.json().then((res2) => {
        console.log("evo me u resu", res2);
        setData(res2[0]);
        setPhoto(res2[1]);
      });
    };
    fetchData();
  }, [habbitAdded]);

  console.log("Data je ", data);

  useEffect(() => {
    dispatch(habbitActions.isLoadingChange());
    console.log("ISLOADING:", isLoading);
  }, []);

  useEffect(() => {
    //adding the user photo
    dispatch(userActions.addPhoto(photo));
  }, [photo]);

  const habbitsToShow = data?.map((habbit) => (
    <Habbit
      goal={habbit.goal}
      name={habbit.name}
      question={habbit.question}
      valuta={habbit.valuta}
      image={habbit.imageUrl}
      currency={habbit.currency}
    />
  ));

  const handleOpen = () => {
    dispatch(habbitActions.changeOpenState());
  };

  return data == [] ? <Loading /> : habbitsToShow;
};

export default Habbits;
