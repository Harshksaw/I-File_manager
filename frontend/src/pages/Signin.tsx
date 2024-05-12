import { useNavigate } from "react-router-dom"
import { BottomWarning } from "../components/BottomWarning"
import { Button } from "../components/Button"
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
    const response = await axios.post("http://localhost:3000/api/auth/login", {

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
       
        <InputBox onChange={e => {
          setEmail(e.target.value);
        }} placeholder="harkirat@gmail.com" label={"Email"} />

        <InputBox onChange={(e) => {
          setPassword(e.target.value)
        }} placeholder="123456" label={"Password"} />
        <div className="pt-4">
          <Button onClick={handlelogin}  label={"Sign in"} />
        </div>


      
        <BottomWarning label={"Don't have an account?"} buttonText={"Sign up"} to={"/signup"} />
      </div>
    </div>
  </div>
}