import { pb, read, setLogIn } from "@/api/pocketbase";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

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

  console.log(idPw);

  async function getIds() {
    const users = read("users");
    const ids = users.items.map((item) => item.username);
    const isValidId = ids.include(id);
    console.log(isValidId);
    return isValidId;
  }

<<<<<<< HEAD
  function isId() {}
=======
  async function handleLogin() {
    await setLogIn(idPw);

    if (pb.authStore.isValid) {
      globalThis.location.href = "/";
    }
  }
>>>>>>> e82c38e (fix : revert에 해당하는 커밋 재시도)

  return (
    <SignContents>
      <SignLogo />
      <SignTitle value="로그인" />

      <SignForm>
        <SignInput labelValue="아이디" ariaText="아이디 입력창" placeHolder="아이디를 입력하세요" inputValue={setId} />

        <SignInput
          labelValue="비밀번호"
          ariaText="비밀번호 입력창"
          placeHolder="비밀번호를 입력하세요"
          inputValue={setPw}
        />
      </SignForm>

      <div className="flex flex-col gap-2">
        <SignButton value="로그인" handleEvent={() => setLogIn(idPw)} bgColor="bg-white" textColor="text-black" />
        <SignButton value="회원가입" handleEvent={() => navigate("/Register")} />
      </div>
    </SignContents>
  );
}

export default Login;
