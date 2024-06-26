import { useNavigate } from "react-router-dom"
import { BottomWarning } from "../components/BottomWarning"

import { Heading } from "../components/Heading"
import { InputBox } from "../components/InputBox"
import { SubHeading } from "../components/SubHeading"
import { useState } from "react"
import axios from "axios"

export const Signin = () => {

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();


  const handlelogin =async () => {
    const response = await axios.post(`${process.env.REACT_APP_API_URL}/api/auth/login`, {

      email : email,
      password: password
    });
    if(response.status == 200){

      console.log(response.data._id)
      console.log("suces login")
      localStorage.setItem("user", response.data._id)
      navigate("/dashboard")

    }else{
      console.log("error")
    }



 
  } 

    return <div className="bg-slate-300 h-screen flex justify-center">
    <div className="flex flex-col justify-center">
      <div className="rounded-lg bg-white w-80 text-center p-2 h-max px-4">
        <Heading label={"Sign in"} />
        <SubHeading label={"Enter your credentials to access your account"} />
       
        <InputBox onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
          setEmail(e.target.value);
        }} placeholder="Harsh@gmail.com" label={"Email"} />

        <InputBox onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
          setPassword(e.target.value)
        }} placeholder="123456" label={"Password"} />

        <div className="pt-4 p-0 " >
          <button onClick={handlelogin}  
          className="w-30 text-white bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2"
          > Sign in </button>
        </div>


      
        <BottomWarning label={"Don't have an account?"} buttonText={"Sign up"} to={"/signup"} />
      </div>
    </div>
  </div>
}