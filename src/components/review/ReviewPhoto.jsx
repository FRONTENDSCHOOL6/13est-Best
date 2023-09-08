import { CiImageOn } from "react-icons/ci";

function ReviewPhoto() {
  return (
    <button type="button" className="flex justify-center items-center gap-1 py-1 border border-primary rounded font-semibold w-full self-center">
      <CiImageOn />
      사진추가
      <span className="text-slate-400 text-xs">최대 10장</span>
    </button>
  )
}

export default ReviewPhoto