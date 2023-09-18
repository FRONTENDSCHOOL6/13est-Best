import { useCategoryStore } from "@/store/category";
import { bool, string } from "prop-types";
import { useEffect } from "react";
import "swiper/css";
import { Swiper, SwiperSlide } from "swiper/react";

const CATEGORY = ["전체", "한식", "양식", "일식", "중식", "카페", "아시아/퓨전 음식", "뷔페/레스토랑", "술집"];

function SwiperCategory() {
  const { category: selectedCategory, addCategory, removeCategory, resetCategory } = useCategoryStore();

  useEffect(() => {
    !selectedCategory.length && resetCategory();
  }, [selectedCategory, resetCategory]);

  const handleActive = (e) => {
    const selectedItem = e.target.id;

    if (selectedItem === "전체") {
      resetCategory();
      return;
    }

    selectedCategory.includes(selectedItem) ? removeCategory(selectedItem) : addCategory(selectedItem);
  };

  return (
    <ul>
      <Swiper spaceBetween={8} slidesPerView={"auto"}>
        {CATEGORY.map((item, index) => (
          <SwiperSlide
            key={index}
            style={{
              width: "auto",
            }}
          >
            <li key={crypto.randomUUID()}>
              <button
                id={item}
                onClick={handleActive}
                className={`
        rounded-2xl border p-2 text-gray-700
        ${selectedCategory.includes(item) ? "bg-primary text-white" : ""}
      `}
              >
                {item}
              </button>
            </li>
          </SwiperSlide>
        ))}
      </Swiper>
    </ul>
  );
}

SwiperCategory.propTypes = {
  title: string,
  isActive: bool,
};

export default SwiperCategory;
