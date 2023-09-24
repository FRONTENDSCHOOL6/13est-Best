import { string, func } from "prop-types";
import { useState } from "react";
import { pb, read } from "@/api/pocketbase";
import { getPbImageURL } from "./../../utils/getPbImageURL";
import { useRef } from "react";
function SignInput({
  labelValue,
  ariaText,
  placeHolder,
  inputValue,
  bgColor = "bg-primary",
  textColor = "text-white",
  placeHolderColor = "placeholder-white",
}) {
  const [inputChange, setInputChange] = useState();
  const [fileUrl, setFileUrl] = useState(
    pb.authStore.model.avatar ? getPbImageURL(pb.authStore.model, pb.authStore.model.avatar) : "/button-check.svg"
  );

  const handleChangeInput = ({ target }) => {
    // setInputChange(target.value);
    // inputValue(target.value);
    const selectedFile = target.files[0];
    const url = URL.createObjectURL(selectedFile);
    setFileUrl(url);
    inputValue(selectedFile);
  };
  const inputFileRef = useRef(); // Create a ref

  const handleClickImage = () => {
    inputFileRef.current.click(); // Simulate click on input when image is clicked
  };

  return (
    <>
      <label className="" htmlFor="signInputId">
        {labelValue}
      </label>

      <div className="flex flex-col items-center">
        <img
          className="mx-5 mt-3 h-32 w-32 rounded-full border-4  border-primary"
          src={fileUrl}
          onClick={handleClickImage}
        />

        <input
          ref={inputFileRef}
          type="file"
          accept="*.jpg,*.png,*.jpeg,*.webp,*.avif"
          onChange={handleChangeInput}
          value={inputChange}
          id="signInputId"
          className={`hidden ${textColor} ${bgColor} ${placeHolderColor} w-full rounded px-7 py-4 text-base`}
          aria-label={ariaText}
          placeholder={placeHolder}
        />
      </div>
    </>
  );
}
SignInput.propTypes = {
  labelValue: string,
  ariaText: string,
  placeHolder: string,
  inputValue: func,
  bgColor: string,
  textColor: string,
  placeHolderColor: string,
};

export default SignInput;
