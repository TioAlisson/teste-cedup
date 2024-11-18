'use client';
import { Navigation, Scrollbar, A11y, Autoplay } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';

import Teste from "@/public/img/img-sobre.png";
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import CardFotos from './CardFotos';

export default function SlideFotos() {
    return (
        <div className='relative'>
            <div className="pt-14">
                {/* Contêiner onde a paginação será posicionada */}
                <Swiper
                    modules={[Navigation, Scrollbar, A11y, Autoplay]}
                    spaceBetween={50}
                    pagination={{ clickable: true }}
                    slidesPerView={4}
                    navigation
                    scrollbar={{ draggable: true }}
                    loop={true}
                    autoplay={{
                        delay: 5000,
                        disableOnInteraction: false,
                    }}
                    onSwiper={(swiper) => console.log(swiper)}
                    onSlideChange={() => console.log('slide change')}
                >
                    <SwiperSlide>
                        <CardFotos 
                            title='lages'
                        />
                    </SwiperSlide>
                </Swiper>

                
            </div>
        </div>
    );
}
