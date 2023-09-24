import { pb, update } from "@/api/pocketbase";
import ScrollToTop from "@/components/ScrollTop";
import { useFetchList } from "@/hooks/useFetchList";
import Header from "@/layout/Header";
import { getPbImageURL } from "@/utils";
import { array, func, object, string } from "prop-types";
import { useEffect } from "react";
import { useState } from "react";
import { GoChevronLeft } from "react-icons/go";
import { IoPersonCircleSharp } from "react-icons/io5";

function Follow() {
  const [selectGroup, setSelectGroup] = useState("following");

  const myId = pb.authStore.model.id;
  const { data, refetch } = useFetchList("follow", { expand: "followers,followings" });
  const myData = data?.filter((item) => item.owner === myId)[0];

  const followingList = myData?.expand.followings || [];
  const followerList = myData?.expand.followers || [];
  const followingId = followingList.map((item) => item.id);

  let renderList = [];
  renderList = selectGroup === "following" ? followingList : followerList;

  const handleClickPageBack = () => {
    history.back();
  };

  function handleChangeMenu(e) {
    switch (e.target.innerText) {
      case "팔로잉":
        setSelectGroup("following");
        break;
      case "팔로워":
        setSelectGroup("follower");
        break;
    }
  }

  return (
    <>
      <ScrollToTop />
      <Header />
      <div className="mx-auto max-w-3xl">
        <div className="my-4 flex items-center gap-2">
          {/* 창 닫기 */}
          <button type="button" onClick={handleClickPageBack} className="ml-1 px-1 text-4xl" aria-label="뒤로 가기">
            <GoChevronLeft />
          </button>
          {/* 제목 */}
          <h2 className="text-xl font-bold">팔로잉/팔로워</h2>
        </div>
        {/* 팔로잉 / 팔로워 Navigation */}
        <div className="flex rounded-md shadow-sm" role="group">
          <button
            type="button"
            className={`text-md basis-1/2 border-b border-r border-gray-200 bg-white px-4 py-2 font-medium text-gray-900 ${
              selectGroup === "following" ? "z-10 border-b-2 border-b-primary font-bold text-primary" : ""
            }`}
            onClick={handleChangeMenu}
          >
            팔로잉
          </button>
          <button
            type="button"
            className={`text-md basis-1/2 border-b border-gray-200 bg-white px-4 py-2 font-medium text-gray-900 ${
              selectGroup === "follower" ? "z-10 border-b-2 border-b-primary font-bold text-primary" : ""
            }`}
            onClick={handleChangeMenu}
          >
            팔로워
          </button>
        </div>
        {/* 리스트 */}
        <div>
          {renderList.map((item, index) => (
            <div key={index} className="flex items-center justify-center border-b border-gray-100 px-4 py-3">
              <dl className="flex grow items-center gap-4">
                <dt className="sr-only">유저 사진</dt>
                <dd className="rounded-full">
                  {item.avatar ? (
                    <img
                      src={getPbImageURL(item, item.avatar)}
                      alt="작성자 프로필"
                      className="h-14 w-14 rounded-full object-cover text-xs"
                    />
                  ) : (
                    <IoPersonCircleSharp className="h-14 w-14 text-gray-100" />
                  )}
                </dd>
                <dt className="sr-only">유저 닉네임</dt>
                <dd>
                  <p>{item.nickname}</p>
                </dd>
              </dl>
              <FollowButton
                myId={myId}
                item={item}
                data={data}
                refetch={refetch}
                myData={myData}
                followingId={followingId}
              />
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

function FollowButton({ myId, item, data, refetch, myData, followingId }) {
  const [isFollow, setIsFollow] = useState(false);

  useEffect(() => {
    const followingList = myData?.expand.followings?.map((el) => el.id);
    followingList?.includes(item.id) ? setIsFollow(true) : setIsFollow(false);
  }, [item, myData]);

  async function handleFollow(e) {
    let postUserData;
    let postTargetData;

    const targetData = data?.filter((item) => item.owner === e.target.id)[0];
    let target = data?.filter((item) => item.owner === e.target.id)[0].followers;

    if (followingId.includes(e.target.id)) {
      postUserData = followingId.filter((item) => item !== e.target.id);
      postTargetData = target.filter((item) => item !== myId);
      setIsFollow(false);
    } else {
      postUserData = [...followingId, e.target.id];
      postTargetData = [...target, myId];
      setIsFollow(true);
    }

    try {
      await update("follow", myData.id, { followings: postUserData });
      await update("follow", targetData.id, { followers: postTargetData });
    } catch (error) {
      console.error(error);
    }

    refetch();
  }

  return (
    <>
      {isFollow ? (
        <button className="h-8 rounded-md bg-gray-100 px-3 text-sm text-gray-500" id={item.id} onClick={handleFollow}>
          팔로우 취소
        </button>
      ) : (
        <button className="h-8 rounded-md bg-secondary px-3 text-sm text-white" id={item.id} onClick={handleFollow}>
          팔로우
        </button>
      )}
    </>
  );
}

FollowButton.propTypes = {
  myId: string,
  item: object,
  data: array,
  refetch: func,
  myData: object,
  followingId: array,
};

export default Follow;
