import { string } from "prop-types";

const PLACE_LIST = ["전체", "홍익대", "합정역", "+ 관심지역"];
const CATEGORY = ["한식", "양식", "일식", "중식", "카페", "아시아/퓨전 음식", "뷔페/레스토랑", "술집"];
const TAG_LIST = ["친절해요", "음식이 맛있어요", "재료가 신선해요"];

// 피드 페이지 컴포넌트
function Feed() {
  return (
    <>
      <ul className="flex gap-2">
        {PLACE_LIST.map((item) => (
          <Place key={crypto.randomUUID()} title={item} />
        ))}
      </ul>
      <ul className="flex gap-2 py-3 text-sm">
        {CATEGORY.map((item) => (
          <Category key={crypto.randomUUID()} title={item} />
        ))}
      </ul>
      <ul className="flex flex-col gap-2 py-4">
        <FeedItem />
      </ul>
    </>
  );
}

export default Feed;

// 관심지역 리스트
function Place({ title }) {
  return (
    <li>
      <button className="rounded-md bg-gray-100 p-2 text-gray-500 shadow hover:bg-secondary hover:text-white">
        {title}
      </button>
    </li>
  );
}

Place.propTypes = {
  title: string,
};

// 카테고리 리스트
function Category({ title }) {
  return (
    <li>
      <button className="rounded-2xl border p-2 text-gray-700">{title}</button>
    </li>
  );
}

Category.propTypes = {
  title: string,
};

// 피드 리스트 아이템
function FeedItem() {
  return (
    <li className="flex flex-col gap-3">
      <div className="flex items-center justify-between">
        <dl className="grid gap-1">
          <dt className="sr-only">작성자 프로필</dt>
          <dd className="col-start-1  row-start-1 row-end-3 h-12 w-12 rounded-full bg-gray-300"></dd>
          <dt className="sr-only">작성자</dt>
          <dd className="col-start-2 col-end-6 font-bold">멋쟁이 사자처럼</dd>
          <dt className="col-start-2 row-start-2 text-xs text-gray-500">사진리뷰</dt>
          <dd className="col-start-3 row-start-2 text-xs text-gray-500">20</dd>
          <dt className="col-start-4 row-start-2 text-xs text-gray-500">팔로워</dt>
          <dd className="col-start-5 row-start-2 text-xs text-gray-500">8</dd>
        </dl>
        <button className="h-8 rounded-md bg-secondary px-3 text-sm text-white">팔로우</button>
      </div>
      <figure>
        <img src="https://placehold.co/191x291?text=PHOTO" alt="" className="h-96 w-full" />
        <figcaption>
          <p className="mt-3  text-gray-700">
            초콜렛을 좋아해서 와봤는데 선물하기에 좋겠어요! 음료도 판매 하시는데 시간이 없어 초콜렛만 사서 나왔네요~
            사장님이 시식도 할수 있게 해주시니 하나씩 맛보고 취향에 맛는걸로 구입하면 됩답니다! 오늘 하루 달달한 초콜릿
            덕에 숲 산책이 더 활기찰꺼 같네요!^^
          </p>
        </figcaption>
      </figure>
      <div className="flex items-center justify-between">
        <ul className="flex gap-2">
          {TAG_LIST.map((item) => (
            <TagList key={crypto.randomUUID()} item={item} />
          ))}
        </ul>
        <time dateTime="2023-09-06" className="text-sm text-gray-500">
          9.6 수 방문
        </time>
      </div>
      <div className="flex items-center justify-between rounded-lg border p-4">
        <dl className="grid gap-1">
          <dt className="sr-only">가게이름</dt>
          <dd className="col-start-1 col-end-3 font-bold">미카의 달콤한 작업실</dd>
          <dt className="sr-only">가게유형</dt>
          <dd className="col-start-1 text-sm text-gray-500">
            초콜릿전문점 <span aria-hidden>·</span>
          </dd>
          <dt className="sr-only">주소</dt>
          <dd className="col-start-2 text-sm text-gray-500">제주특별자치도 서귀포시 안덕면</dd>
        </dl>
        <div className="flex flex-col items-center text-gray-400">
          <span>☆</span>
          <span className="text-xs">저장</span>
        </div>
      </div>
    </li>
  );
}

function TagList({ item }) {
  return <li className="w-fit rounded-md bg-gray-100 px-2 py-1 text-sm text-gray-500">{item}</li>;
}

TagList.propTypes = {
  item: string,
};
