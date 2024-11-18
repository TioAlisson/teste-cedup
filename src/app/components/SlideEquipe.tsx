'use client';
import { Navigation, Scrollbar, A11y, Autoplay } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import CardEquipeGestora from "./CardEquipeGestora";
import Teste from "@/public/img/img-sobre.png";
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

export default function Customers() {
    return (
        <div className=''>
            <div className="pt-14 flex justify-between items-center gap-10">
                <div className='equipe-next-button'>
                    <svg width="29" height="54" viewBox="0 0 29 54" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M24.6026 0.0325928L28.4297 4.49912L8.20073 26.8317L28.4297 49.1644L24.6026 53.6309L-0.000192642 26.8317L24.6026 0.0325928Z" fill="#343233" />
                    </svg>
                </div>
                <Swiper
                    modules={[Navigation, Scrollbar, A11y, Autoplay]}
                    spaceBetween={50}
                    pagination={{ clickable: true }}
                    slidesPerView={4}
                    scrollbar={{ draggable: true }}
                    loop={true}
                    autoplay={{
                        delay: 5000,
                        disableOnInteraction: false,
                    }}
                    navigation={{
                        nextEl: '.equipe-next-button',
                        prevEl: '.equipe-prev-button',
                    }}
                    onSwiper={(swiper) => console.log(swiper)}
                    onSlideChange={() => console.log('slide change')}
                >


                    <SwiperSlide>
                        <CardEquipeGestora
                            image={Teste}
                            alt="teste"
                            name="Alisson"
                            description="Programador"
                        />

                    </SwiperSlide>
                    <SwiperSlide>
                        <CardEquipeGestora
                            image={Teste}
                            alt="teste"
                            name="Alisson"
                            description="Programador"
                        />

                    </SwiperSlide>
                    <SwiperSlide>
                        <CardEquipeGestora
                            image={Teste}
                            alt="teste"
                            name="Alisson"
                            description="Programador"
                        />

                    </SwiperSlide>
                    <SwiperSlide>
                        <CardEquipeGestora
                            image={Teste}
                            alt="teste"
                            name="Alisson"
                            description="Programador"
                        />

                    </SwiperSlide>
                    <SwiperSlide>
                        <CardEquipeGestora
                            image={Teste}
                            alt="teste"
                            name="Alisson"
                            description="Programador"
                        />

                    </SwiperSlide>


                </Swiper>
                <div className='equipe-prev-button rotate-180'>
                    <svg width="29" height="54" viewBox="0 0 29 54" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M24.6026 0.0325928L28.4297 4.49912L8.20073 26.8317L28.4297 49.1644L24.6026 53.6309L-0.000192642 26.8317L24.6026 0.0325928Z" fill="#343233" />
                    </svg>
                </div>
            </div>
        </div>
    );
}
