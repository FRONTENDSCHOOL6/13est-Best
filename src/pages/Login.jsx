import { pb, read, setLogIn } from "@/api/pocketbase";
import { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { alertMessage } from "@u/index";

import SignTitle from "@c/SignInUp/SignTitle";
import SignInput from "@c/SignInUp/SignInput";
import SignButton from "@c/SignInUp/SignButton";
import SignForm from "@c/SignInUp/SignForm";
import SignLogo from "@c/SignInUp/SignLogo";
import SignContents from "@c/SignInUp/SignContents";

function Login() {
  const navigate = useNavigate();

  const [id, setId] = useState("");
  const [pw, setPw] = useState("");
  let idPw = [id, pw];

  // console.log(idPw);

  async function isValidId() {
    const usernameData = await read("users", "username");
    const usernamesObj = usernameData.items;
    const usernames = usernamesObj.map((item) => item.username);
    // console.log(usernamesObj);
    console.log(usernames);
    console.log(usernames.includes(id));
    return usernames.includes(id);

    // return isValidId;
  }

  async function handleLogin() {
    console.log(idPw)
    try {
      await setLogIn(idPw);
      globalThis.location.href = "/";
    } catch {
      // if (await isValidId()) {
      //   alertMessage("비밀번호가 일치하지 않습니다", "❌");
      // } else {
      // }
      alertMessage("사용자 정보가 없습니다", "❌");
    }
  }
  
  useEffect(() => {
    const handleKeyDown = (event) => {
      if (event.key === 'Enter') {
       handleLogin() 
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    
    // Don't forget to cleanup after component unmounts
    return () => window.removeEventListener('keydown', handleKeyDown);
  });
  
  return (
    <SignContents>
      <SignLogo />
      <SignTitle value="로그인" />

      <SignForm>
        <SignInput
          labelValue="아이디"
          ariaText="아이디 입력창"
          placeHolder="아이디를 입력하세요"
          inputValue={setId}
        />

        <SignInput
          labelValue="비밀번호"
          ariaText="비밀번호 입력창"
          placeHolder="비밀번호를 입력하세요"
          inputValue={setPw}
          type= "password"
        />
      </SignForm>

      <div className="flex flex-col gap-2 max-w-3xl w-full">
        <SignButton value="로그인" handleEvent={() => handleLogin()} bgColor="bg-white" textColor="text-black" />
        <SignButton value="회원가입" handleEvent={() => navigate("/Register")}/>
      </div>
    </SignContents>
  );
}

export default Login;
