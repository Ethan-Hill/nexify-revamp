import { Swiper, SwiperSlide } from "swiper/react";
import Slide from "./Items/Slide";

export default function Slider({ tracks }) {
  return (
    <sl-details
      summary="Your Top Tracks"
      style={{
        position: "absolute",
        right: 0,
      }}
    >
      <Swiper
        spaceBetween={10}
        slidesPerView={1}
        onSlideChange={() => console.log("slide change")}
        onSwiper={(swiper) => console.log(swiper)}
        style={{
          height: "60vh",
          width: "30vw",
        }}
      >
        <SwiperSlide>
          <Slide track={tracks[0]} />
        </SwiperSlide>

        <SwiperSlide>
          <Slide track={tracks[1]} />
        </SwiperSlide>

        <SwiperSlide>
          <Slide track={tracks[2]} />
        </SwiperSlide>

        <SwiperSlide>
          <Slide track={tracks[3]} />
        </SwiperSlide>

        <SwiperSlide>
          <Slide track={tracks[4]} />
        </SwiperSlide>
      </Swiper>
    </sl-details>
  );
}
