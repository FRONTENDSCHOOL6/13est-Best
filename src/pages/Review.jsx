import ReviewKeyword from '@c/review/ReviewKeyword';
import Button from '@c/review/Button';
import VisitedPlace from '@c/review/VisitedPlace';
import ReviewInput from '@c/review/ReviewInput';
import ReviewPhoto from '@c/review/ReviewPhoto';
import { BiX } from "react-icons/bi";
import { MdOutlineCancel } from "react-icons/md";

function Review() {
  return (
    <>
    {/* <BiX className="w-7 h-7 text-primary float-right"/> */}
    <form className="flex flex-col gap-4 flex-wrap mx-auto max-w-3xl">
      <button type="button" aria-label="작성취소"><MdOutlineCancel className="w-7 h-7 text-primary float-right ml-auto"/></button>
      <VisitedPlace/>
      <ReviewInput/>
      <ReviewPhoto/>
      <ReviewKeyword/>
      <Button type='submit' text='등록하기'/>
    </form>
    </>
  )
}

export default Review