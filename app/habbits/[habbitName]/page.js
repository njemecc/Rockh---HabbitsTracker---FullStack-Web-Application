"use client";
//css
import "./page.css";
//navigation
import React from "react";
import { useRouter, useSearchParams } from "next/navigation";

//components
import HabbitStat from "@/components/habbits/HabbitStat";
import Loading from "@/app/loading";
import Chart from "@/components/UI/Chart";

//redux
import { useDispatch } from "react-redux";
import { habbitActions } from "@/store/habbitSlice";

//hooks
import { useState } from "react";
import { useEffect } from "react";

const HabbitName = () => {
  const dispatch = useDispatch();

  //datepicker close
  dispatch(habbitActions.changeDatePickerFalse());

  const searchParams = useSearchParams();
  const name = searchParams.get("name");
  const email = localStorage.getItem("email");

  const [res, setRes] = useState({});

  useEffect(() => {
    const getStatAboutHabbitHandler = async () => {
      const response = await fetch("/api/getStats", {
        method: "POST",
        body: JSON.stringify({
          email: email,
          name: name,
        }),
        headers: {
          "Content-Type": "application/json",
        },
      });

      const resp = await response.json();
      setRes(resp);
    };
    getStatAboutHabbitHandler();
  }, []);

  return res.complete == undefined ? (
    <Loading />
  ) : (
    <>
      <h1 className="habbit-name">{name}</h1>
      <div className="container-containera">
        <HabbitStat
          text="COMPLETE"
          number={res?.complete}
          currency="days"
          emoji="✔️"
        />
        <HabbitStat
          text="FAILED"
          number={res?.failed}
          currency="days"
          emoji="❌"
        />
      </div>
      <div className="container-containera">
        <HabbitStat
          text="SKIPPED"
          number={res?.skipped}
          currency="days"
          emoji="➡️"
        />
        <HabbitStat text="TOTAL" number={res?.total} currency="hours" />
      </div>
      <div className="container-containera">
        <Chart name={name} />
      </div>
    </>
  );
};

export default HabbitName;
