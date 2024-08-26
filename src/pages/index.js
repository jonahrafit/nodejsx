import React, { useEffect } from "react";
// import React, {useEffect, useState} from "react";
import { useDispatch, useSelector } from "react-redux";
import { io } from "socket.io-client";

import Home from "../components/home/home";
import Profile from "../components/home/profile";

// import Layout from "../components/layout/Layout";
import { getUserAuth } from "../store/actions/userAction";

let socket;

function Blank() {
  const dispatch = useDispatch();
  const auth = useSelector((state) => state.auth);
  useEffect(() => {
    dispatch(getUserAuth()).then();
  }, [dispatch]);
  useEffect(() => {
    socketInitializer().then();
  }, []);
  const socketInitializer = async () => {
    await fetch("/api/auth/socket");
    socket = io();

    socket.on("connect", () => {
      console.log("connected");
    });

    socket.on("update-input", (msg) => {
      console.log("setInput");
      console.log(setInput);
      console.log(typeof setInput);
      if (typeof setInput === "function") {
        setInput(msg);
      }
    });
  };
  return <>{auth.isAuth ? <Profile /> : <Home />}</>;
}

export default Blank;
