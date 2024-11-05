"use client"


import {Swiper, SwiperSlide} from 'swiper/react';
import 'swiper/css';
import { SlideData } from '../constans/slider';
import Image from 'next/image';
import { Controller } from 'swiper/modules';
import { useEffect, useState } from 'react';
import { Channel, Hero, Navbar } from '@/components';

export default function Home() {

  const [swiperControll, setSwiperControll] = useState<any | null>(null);
  const [swiperControllSecond, setSwiperControllSecond] = useState<any | null>(null);
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    // <div className="w-dvw min-h-screen relative bg-black">
    //   <div className="left">
    //     <div className="flex mb-4">
    //       <button className="button-nav" onClick={() => swiperControll.slidePrev()}>{'<'}</button>
    //       <button className="button-nav" onClick={() => swiperControll.slideNext()}>{'>'}</button>
    //     </div>
    //     <Swiper
    //       slidesPerView={1}
    //       onSwiper={(swiper) => setSwiperControll(swiper)}
    //       onSlideChange={() => setActiveIndex(swiperControll.activeIndex)}
    //       modules={[Controller]}
    //       controller={{ control: swiperControllSecond }}
    //     >
    //       {SlideData.map((slide, index) => (
    //         <SwiperSlide key={index}>
    //           <h1 className='uppercase'>{slide.title}</h1>
    //           <p className="desc">{slide.desc}</p>
    //         </SwiperSlide>
    //       ))}
    //     </Swiper>
    //   </div>
    //   <div className="right">
    //       <Swiper
    //         modules={[Controller]}
    //         controller={{ control: swiperControll }}
    //         onSwiper={(swiper) => setSwiperControllSecond(swiper)}
    //       >
    //         {SlideData.map((slide, index) => (
    //           <SwiperSlide key={index}>
    //             <div className="img-container">
    //               <Image className='object-cover' src={slide.img} alt={slide.title} width={900} height={900} />
    //             </div>
    //           </SwiperSlide>
    //         ))}
    //       </Swiper>
    //   </div>
    // </div>
    <div className="relative z-0 bg-night min-h-screen">
        <Navbar />
        <Hero />
        <Channel />
    </div>
  );
}
