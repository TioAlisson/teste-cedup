'use client';
import { Navigation, Scrollbar, A11y, Autoplay } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import CardFotos from './CardFotos';

export default function Customers() {
    return (
        <div className="flex justify-between items-center xl:gap-10 pt-20">
            <div className='galeria-prev-button'>
                <svg width="29" height="54" viewBox="0 0 29 54" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M24.6026 0.0325928L28.4297 4.49912L8.20073 26.8317L28.4297 49.1644L24.6026 53.6309L-0.000192642 26.8317L24.6026 0.0325928Z" fill="#343233" />
                </svg>
            </div>
            <Swiper
                modules={[Navigation, Scrollbar, A11y, Autoplay]}
                spaceBetween={30}
                pagination={{ clickable: true }}
                slidesPerView={3}
                scrollbar={{ draggable: true }}
                loop={true}
                autoplay={{
                    delay: 5000,
                    disableOnInteraction: false,
                }}
                navigation={{
                    nextEl: '.galeria-next-button',
                    prevEl: '.galeria-prev-button',
                }}
                breakpoints={{
                    // Para telas pequenas (celular)
                    320: {
                        slidesPerView: 1, // Mostra 1 slide
                        centeredSlides: true,
                        spaceBetween: 20
                    },
                    // Para tablets
                    400: {
                        slidesPerView: 2, // Mostra 2 slides
                    },
                    768: {
                        slidesPerView: 3, // Mostra 2 slides
                    },
                }}
                onSwiper={(swiper) => console.log(swiper)}
                onSlideChange={() => console.log('slide change')}
            >
                <SwiperSlide>
                    <CardFotos
                        title='lages'
                    />
                </SwiperSlide>
                <SwiperSlide>
                    <CardFotos
                        title='lages'
                    />
                </SwiperSlide>
                <SwiperSlide>
                    <CardFotos
                        title='lages'
                    />
                </SwiperSlide>
                <SwiperSlide>
                    <CardFotos
                        title='lages'
                    />
                </SwiperSlide>
            </Swiper>
            <div className='galeria-next-button rotate-180'>
                <svg width="29" height="54" viewBox="0 0 29 54" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M24.6026 0.0325928L28.4297 4.49912L8.20073 26.8317L28.4297 49.1644L24.6026 53.6309L-0.000192642 26.8317L24.6026 0.0325928Z" fill="#343233" />
                </svg>
            </div>
        </div>
    );
}
