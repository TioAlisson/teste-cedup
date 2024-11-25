'use client';
import { Navigation, Scrollbar, A11y, Autoplay, Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import SlideHome from '../components/SlideHome';

export default function Customers() {
  return (
    <div>
      <div>
        <Swiper
          modules={[Navigation, Pagination, Scrollbar, A11y, Autoplay]}
          pagination={{ clickable: true }}
          slidesPerView={1}
          scrollbar={{ draggable: true }}
          loop={true}
          autoplay={{
            delay: 5000,
            disableOnInteraction: false,
          }}
          navigation={true}
          onSwiper={(swiper) => console.log(swiper)}
          onSlideChange={() => console.log('slide change')}
        >
          <SwiperSlide>
            <SlideHome />
          </SwiperSlide>
          <SwiperSlide>
            <SlideHome />
          </SwiperSlide>
          <SwiperSlide>
            <SlideHome />
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  );
}
