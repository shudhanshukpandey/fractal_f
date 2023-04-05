import React, { useState } from "react";
import "./login.css";

import AfterLogin from "./AfterLogin";

import { useNavigate } from "react-router-dom";

import axios from "../apis/axios.js"

export default function Login() {
  const [id, setID] = useState("");
  const [pw, setPW] = useState("");

const nav = useNavigate()

  const onidchange = (event) => {
    setID(event.target.value);
  };

  const onpwchange = (event) => {
    setPW(event.target.value);
  };
  const check_login = (event) => {
    event.preventDefault();

    if (id.length<5){
        console .log("checking id");
        alert("invalid id")
    }
    let config={
        method:"POST",
        url:"/login",
        data:{
            "id":id,
            "pw":pw
        }
    }

    console.log("form submitted");
    console.log(id, pw);

    console.log("form printed");

    axios(config).then((res)=>{

        let response_data=res.data
        console.log(response_data)

        if (response_data.status){

            console.log(response_data)
            nav("/afterlogin")
        }

    
    }
    ).catch((err)=>{
        console.log(err.response.data)
    })
  };
  return (
    <>
      <div className="logincard">
        <h2>Login Card</h2>

        <form onSubmit={check_login} className="loginform" id="form">

          <div className="userId">
            <label>User Id</label>
            <input type="text" value={id} onChange={onidchange} />
          </div>

          <div className="pw">
            <label>Password</label>
            <input type="password" value={pw} onChange={onpwchange} />
          </div>
          <div className="sub">

          <input type="submit" />
          </div>
        </form>
      </div>
    </>
  );
}
