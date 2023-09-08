import { PiPencilSimpleLineDuotone } from "react-icons/pi";
import { BsPatchCheck } from "react-icons/bs";

function Profile() {
  return (
    <div className="flex justify-center">
      <div>
        <dl className="grid gap-x-6 gap-y-2">
          <dt className="sr-only">내 프로필</dt>
          <dd className="col-start-1 row-start-1 row-end-3 h-16 w-16 rounded-full bg-gray-300"></dd>
          <dt className="sr-only">내 닉네임</dt>
          <dd className="col-start-2 text-xl font-bold">개미</dd>
          <dt className="sr-only">나의 활동</dt>
          <dd>
            <dl className="flex">
              <div className="border-r border-[rgba(4,160,124,.8)] pr-3">
                <dt className="text-sm">리뷰</dt>
                <dd className="text-center">9</dd>
              </div>
              <div className="border-r border-[rgba(4,160,124,.8)] px-3">
                <dt className="text-sm">사진</dt>
                <dd className="text-center">4</dd>
              </div>
              <div className="border-r border-[rgba(4,160,124,.8)] px-3">
                <dt className="text-sm">팔로잉</dt>
                <dd className="text-center">2</dd>
              </div>
              <div className="pl-3">
                <dt className="text-sm">팔로워</dt>
                <dd className="text-center">2</dd>
              </div>
            </dl>
          </dd>
        </dl>

        <div className="flex justify-between gap-2 py-2">
          <button className="flex w-[70%] items-center justify-center gap-1 rounded-xl bg-secondary py-2 text-sm">
            <PiPencilSimpleLineDuotone className="text-base" />
            리뷰 쓰기
          </button>
          <button className="flex w-[30%] items-center justify-center gap-1 rounded-xl bg-secondary px-4 py-2 text-sm">
            <BsPatchCheck className="text-base" />
            미션
          </button>
        </div>
      </div>
    </div>
  );
}

export default Profile;
