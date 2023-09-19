import { array, bool, shape, string } from "prop-types";
import { getDate } from "@u";
import PhotoLayout from "./PhotoLayout";
import KeywordList from "./KeywordList";
import FeedItemHeader from "./FeedItemHeader";
import FeedItemFooter from "./FeedItemFooter";
import { Link } from "react-router-dom";
import { getPbImageURL } from "@/utils";
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectFade, Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

function FeedItem({ item, isPlace, isLink, hiddenHeader, hiddenFooter }) {
  return (
    <div className="flex flex-col gap-3 bg-white py-8">
      {hiddenHeader || <FeedItemHeader item={item} />}
      {isPlace ? (
        <figure>
          <Swiper
            className="h-[500px] w-[450px]"
            spaceBetween={30}
            navigation={true}
            loop={true}
            pagination={{
              type: "fraction",
            }}
            modules={[EffectFade, Navigation, Pagination]}
          >
            {item.photos.map((fileName) => (
              <SwiperSlide key={crypto.randomUUID()} className="bg-cover bg-center">
                <img
                  src={getPbImageURL(item, fileName)}
                  alt="리뷰 사진"
                  className="h-full w-full rounded-lg object-cover"
                />
              </SwiperSlide>
            ))}
          </Swiper>
          <figcaption>
            <p className="mt-3 text-gray-700">{item.contents}</p>
          </figcaption>
        </figure>
      ) : isLink ? (
        <Link to={`/place/${item.expand.place.id}/${item.id}`}>
          <figure>
            <PhotoLayout item={item} />
            <figcaption>
              <p className="mt-3 text-gray-700">{item.contents}</p>
            </figcaption>
          </figure>
        </Link>
      ) : (
        <figure>
          <PhotoLayout item={item} />
          <figcaption>
            <p className="mt-3  text-gray-700">{item.contents}</p>
          </figcaption>
        </figure>
      )}
      <div className="flex items-center justify-between">
        <ul className="flex gap-2">
          {item.keywords.map((item) => (
            <KeywordList key={crypto.randomUUID()} item={item} />
          ))}
        </ul>
        <time dateTime={item.created} className="text-sm text-gray-500">
          {getDate(item.created, "mm.dd day 방문")}
        </time>
      </div>
      {hiddenFooter || <FeedItemFooter item={item} />}
    </div>
  );
}

FeedItem.propTypes = {
  item: shape({
    contents: string,
    photos: array,
    keywords: array,
    created: string,
  }),
  isPlace: bool,
  isLink: bool,
  hiddenHeader: bool,
  hiddenFooter: bool,
};

export default FeedItem;
