"use client";
import React from "react";

//style
import "./Chart.css";
//react components

import { DatePicker } from "@mui/x-date-pickers";
import { LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { Button } from "@mui/material";
import Loading from "@/app/loading";
//chart library
import { LineChart, Line, CartesianGrid, XAxis, YAxis } from "recharts";

//hooks
import { useState } from "react";

const Chart = (props) => {
  function tommddyyyy(date) {
    return `${date.getFullYear()}-${date.getMonth() + 1}-${date.getDate()}`;
  }

  const [fromDate, setFromDate] = useState("");
  const [toDate, setToDate] = useState("");

  const fromChangeHandler = (e) => {
    const dateRaw = e.$d;
    const date = tommddyyyy(dateRaw);
    setFromDate(date);
  };
  const toChangeHandler = (e) => {
    const dateRaw = e.$d;

    const date = tommddyyyy(dateRaw);
    setToDate(date);
  };

  let dates = [];
  let answers = [];
  let sucess = [];

  const [resp, setResp] = useState([]);

  const getDataForChartHandler = async () => {
    const response = await fetch("/api/getChartData", {
      method: "POST",
      body: JSON.stringify({
        email: localStorage.getItem("email"),
        name: props.name,
        from: fromDate,
        to: toDate,
      }),
      headers: {
        "Content-Type": "application/json",
      },
    });

    const povratnaInformacija = await response.json().then((res) => {
      setResp(res);
    });

    resp.forEach((value) => {
      dates.push(value["date"]);
      answers.push((value = "" ? 0 : value["answer"]));
      sucess.push(value["success"]);
    });

    console.log(dates);
    console.log(answers);
    console.log(sucess);
    console.log("chart data je:", resp);
  };

  const data = [
    { name: "21.02.1222", uv: 500, pv: 2400, amt: 2400 },
    { name: "Page A", uv: 400, pv: 2400, amt: 2400 },
    { name: "Page A", uv: 400, pv: 2400, amt: 2400 },
    { name: "Page A", uv: 400, pv: 2400, amt: 2400 },
    { name: "Page A", uv: 200, pv: 3400, amt: 4400 },
    { name: "Page A", uv: 200, pv: 3400, amt: 4400 },
    { name: "Page A", uv: 200, pv: 3400, amt: 4400 },
  ];
  return (
    <div className="glavni-kontejner-div">
      <div className="fromToDiv">
        <LocalizationProvider dateAdapter={AdapterDayjs}>
          <div style={{ border: "0px" }}>
            <p>From </p>
            <DatePicker onChange={fromChangeHandler} />
          </div>

          <div style={{ border: "0px" }}>
            <p>To </p>
            <DatePicker onChange={toChangeHandler} />
          </div>
          <Button
            onClick={getDataForChartHandler}
            style={{ marginTop: "2.5rem" }}
            variant="contained"
          >
            submit
          </Button>
        </LocalizationProvider>
      </div>
      <div className="chart-div">
        {resp[0] == "undefined" ? (
          <Loading />
        ) : (
          <LineChart width={300} height={150} data={resp}>
            <Line type="monotone" dataKey="answer" stroke="#8884d8" />
            <CartesianGrid stroke="#ccc" />
            <XAxis dataKey="date" />
            <YAxis />
          </LineChart>
        )}
      </div>
    </div>
  );
};

export default Chart;
