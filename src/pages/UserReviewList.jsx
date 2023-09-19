import { pb } from "@/api/pocketbase";
import FeedItem from "@/components/Feed/FeedItem/FeedItem";
import Spinner from "@/components/Spinner";
import { useFeedList, useIntersect } from "@/hooks";
import { useUserInfo } from "@/hooks/useUserInfo";
import Footer from "@/layout/Footer";
import Header from "@/layout/header";
import { getPbImageURL } from "@/utils";
import { useState, useEffect } from "react";
import { IoPersonCircleSharp } from "react-icons/io5";
import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";

function UserReviewList() {
  const { userId } = useParams();
  const myId = pb.authStore.model.id;
  const { data: my } = useUserInfo(myId);
  const [isFollow, setIsFollow] = useState(false);
  const { data, isLoading, hasNextPage, fetchNextPage } = useFeedList();
  const result = data?.flatMap((el) => el.items).filter((el) => el.writer === userId) || null;

  useEffect(() => {
    if (result) {
      my?.following.includes(result[0].expand.writer.id) ? setIsFollow(true) : setIsFollow(false);
    }
  }, []);

  // 인피니트 스크롤
  const ref = useIntersect(
    async (entry, observer) => {
      observer.unobserve(entry.target);
      if (hasNextPage && !isLoading) {
        fetchNextPage();
      }
    },
    { threshold: 1 }
  );

  // 로딩 중
  if (isLoading) {
    return (
      <div className="flex items-center justify-center">
        <Spinner size={160} />
      </div>
    );
  }

  const handleFollow = async () => {
    let following;

    if (isFollow) {
      following = my.following.filter((el) => el !== result[0].expand.writer.id);
      setIsFollow(false);
    } else {
      following = [...my.following, result[0].expand.writer.id];
      setIsFollow(true);
    }

    try {
      await pb.collection("users").update(myId, {
        following,
      });
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <>
      <Header />
      <header className="sticky top-0 z-10 bg-white py-4 shadow-[0_6px_6px_-2px_rgba(0,0,0,0.1)]">
        <div className="mx-auto flex max-w-3xl items-center justify-between px-2">
          <Link to={`/userReview/${userId}`}>
            <dl className="flex items-center gap-1">
              <dt className="sr-only">작성자 프로필</dt>
              <dd className="mr-1 h-7 w-7 rounded-full bg-gray-300">
                {result[0].expand.writer.avatar ? (
                  <img
                    src={getPbImageURL(result[0].expand.writer, result[0].expand.writer.avatar)}
                    alt="작성자 프로필"
                    className="h-full w-full rounded-full object-cover text-xs"
                  />
                ) : (
                  <IoPersonCircleSharp className="h-full w-full text-gray-100" />
                )}
              </dd>
              <dt className="sr-only">작성자</dt>
              <dd className="text-xl font-bold">
                {result[0].expand.writer.nickname}
                <span className="text-base font-semibold"> 님의 플레이스</span>
              </dd>
            </dl>
          </Link>
          {isFollow ? (
            <button className="h-8 rounded-md bg-gray-100 px-3 text-sm text-gray-500" onClick={handleFollow}>
              팔로우 취소
            </button>
          ) : (
            <button className="h-8 rounded-md bg-secondary px-3 text-sm text-white" onClick={handleFollow}>
              팔로우
            </button>
          )}
        </div>
      </header>
      <main className="mx-auto max-w-3xl p-2">
        <h2 className="sr-only">유저 리뷰리스트 페이지</h2>
        <ul className="flex flex-col gap-1 bg-gray-50">
          {result.map((item) => (
            <li key={item.id}>
              <FeedItem item={item} hiddenHeader={true} isPlace={true} />
            </li>
          ))}
        </ul>
        <div ref={ref} className="h-[1px]"></div>
      </main>
      <Footer />
    </>
  );
}

export default UserReviewList;
