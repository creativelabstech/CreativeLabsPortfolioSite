"use client";

import Image from "next/image";
import styles from "./page.module.css";
// import Slider from "react-slick";
import { useState } from "react";
// import "slick-carousel/slick/slick.css";
// import "slick-carousel/slick/slick-theme.css";
import Link from 'next/link';
import { Swiper, SwiperSlide } from 'swiper/react';
// import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Pagination, Navigation, Mousewheel } from 'swiper/modules';
// import { Parallax, ParallaxLayer } from '@react-spring/parallax'
import 'glider-js/glider.min.css';
import img_immersive_fashion from '../../public/images/card_immersive-fashion.png';
import img_card_otter_escape from '../../public/images/card_otter-escape.png';
import img_card_college_cookbook from '../../public/images/card_college-cookbook.png';
import img_card_ovid from '../../public/images/card_ovid.png';
import img_zen_productivity from '../../public/images/card_zen-productivity.png';




export default function Home() {

  // const [currIndex, setCurrIndex] = useState(100000);
  const currIndex = 100;
  const settings = {
    className: "center",
    centerMode: true,
    infinite: true,
    centerPadding: "60px",
    slidesToShow: 3,
    speed: 500,
    swipeToSlide: true
  };


  return (
    <main className={styles.main}>
      <div className={styles.blobCont}>
            <div className={styles.yellowBlob}></div>
            <div className={styles.greenBlob}></div>
          </div>
      {/* <div className={styles.navbar}>
          <div className={styles.navSubcontainer}>
            <Image 
              src="../../public/cl_logo.png"
              width={25}
              height={25}
            />
            <h1 className={styles.title}>Creative Labs SC</h1>
          </div>
          <h1 className={styles.siteLinkTitle}>
            <a href="https://www.instagram.com/creativelabsusc/">Club Website</a>
          </h1>
       </div> */}
       <div className={styles.swiperContainer}>
        {/* note: because swiper v9 or the carousel library i use for this has a bug that requires the number of slides to be at least twice the 
        number of slides shown on a page at a time, i just create a copy of the projects so that we are at 10 slides (but basically a cycle) */}
       <Swiper
        onSlideChange={(swiper) => console.log('slide changed', swiper.realIndex)}
        direction={'horizontal'}
        effect="coverflow"
        initialSlide="3"
        slidesPerView={5}
        speed= {1000}
        spaceBetween={400}
        centeredSlides={true}
        loop={true}
        parallax={true}
        loading="eager"
        // lazy= {{
        //   loadPrevNext: true, // pre-loads the next image to avoid showing a loading placeholder if possible
        //   loadPrevNextAmount: 10 //or, if you wish, preload the next 2 images
        // }}
        mousewheel={{
          forceToAxis: true
        }}
        modules={[Pagination, Navigation, Mousewheel]}
        className="mySwiper"
      >
        <SwiperSlide onSlideChange={(swiper) => console.log('slide changed', swiper.realIndex)}>
          {({ isActive }) => (
            <>
              <div className={styles.carouselFrame} data-swiper-parallax="-3000">
                <Image 
                  src={img_card_otter_escape}
                  width={currIndex==0 ? 450 : 400}
                  height={currIndex==0 ? 650 : 600}
                  style={{margin:'0 auto'}}
                  loading="eager"
                />
                {isActive &&
                  <div style={{marginTop: 15, }}>
                    <Link href="/otterescape"><h3 className={styles.projectTitle}>Otter Escape</h3></Link>
                    <h6 className={styles.projectSubtext}>Help Ollie Find His Family!</h6>
                  </div>
                }
              </div>
            </>
          )}
        </SwiperSlide>
        <SwiperSlide>
          {({ isActive }) => (
            <>
            
              <div className={styles.carouselFrame}>
                <Image 
                  src={img_card_college_cookbook}
                  // width={currIndex==0 ? 450 : 400}
                  // height={currIndex==0 ? 650 : 600}
                  width={currIndex==0 ? 450 : 400}
                  height={currIndex==0 ? 650 : 600}
                  style={{margin:'0 auto'}}
                  loading="eager"
                />
                {isActive &&
                  <div style={{marginTop: 15, }}>
                    <Link href="/collegecookbook"><h3 className={styles.projectTitle}>College Cookbook</h3></Link>
                    <h6 className={styles.projectSubtext}>Description</h6>
                  </div>
                }
              </div>
            </>
          )}
        </SwiperSlide>
        <SwiperSlide>
          {({ isActive }) => (
            <>
              <div className={styles.carouselFrame}>
                <Image 
                  src={img_immersive_fashion}
                  width={currIndex==0 ? 450 : 400}
                  height={currIndex==0 ? 650 : 600}
                  style={{margin:'0 auto'}}
                  loading="eager"
                />
                {isActive &&
                  <div style={{marginTop: 15, }}>
                    <Link href="/otterescape"><h3 className={styles.projectTitle}>Immersive Fashion</h3></Link>
                    <h6 className={styles.projectSubtext}>Description</h6>
                  </div>
                }
              </div>
            </>
          )}
        </SwiperSlide>
        <SwiperSlide>
          {({ isActive }) => (
            <>
              <div className={styles.carouselFrame}>
                <Image 
                  src={img_card_ovid}
                  width={currIndex==0 ? 450 : 400}
                  height={currIndex==0 ? 650 : 600}
                  style={{margin:'0 auto'}}
                  loading="eager"
                />
                {isActive &&
                  <div style={{marginTop: 15, }}>
                    <Link href="/otterescape"><h3 className={styles.projectTitle}>Ovid</h3></Link>
                    <h6 className={styles.projectSubtext}>Description</h6>
                  </div>
                }
              </div>
            </>
          )}
        </SwiperSlide>
        <SwiperSlide>
          {({ isActive }) => (
            <>
              <div className={styles.carouselFrame}>
                <Image 
                  src={img_zen_productivity}
                  width={currIndex==0 ? 450 : 400}
                  height={currIndex==0 ? 650 : 600}
                  style={{margin:'0 auto'}}
                  loading="eager"
                />
                {isActive &&
                  <div style={{marginTop: 15, }}>
                    <Link href="/zenproductivity"><h3 className={styles.projectTitle}>Zen Productivity</h3></Link>
                    <h6 className={styles.projectSubtext}>Description</h6>
                  </div>
                }
              </div>
            </>
          )}
        </SwiperSlide>
        <SwiperSlide onSlideChange={(swiper) => console.log('slide changed', swiper.realIndex)}>
          {({ isActive }) => (
            <>
              <div className={styles.carouselFrame}>
                <Image 
                  src="/images/card_otter-escape.png"
                  width={currIndex==0 ? 450 : 400}
                  height={currIndex==0 ? 650 : 600}
                  style={{margin:'0 auto'}}
                  loading="eager"
                />
                {isActive &&
                  <div style={{marginTop: 15, }}>
                    <Link href="/otterescape"><h3 className={styles.projectTitle}>Otter Escape</h3></Link>
                    <h6 className={styles.projectSubtext}>Help Ollie Find His Family!</h6>
                  </div>
                }
              </div>
            </>
          )}
        </SwiperSlide>
        <SwiperSlide>
          {({ isActive }) => (
            <>
              <div className={styles.carouselFrame}>
                <Image 
                  src="/images/card_college-cookbook.png"
                  // width={isActive ? 450 : 400}
                  // height={isActive ? 650 : 600}
                  width={400}
                  height={600}
                  style={{margin:'0 auto'}}
                />
                {isActive &&
                  <div style={{marginTop: 15, }}>
                    <Link href="/otterescape"><h3 className={styles.projectTitle}>College Cookbook</h3></Link>
                    <h6 className={styles.projectSubtext}>Description</h6>
                  </div>
                }
              </div>
            </>
          )}
        </SwiperSlide>
        <SwiperSlide>
          {({ isActive }) => (
            <>
              <div className={styles.carouselFrame}>
                <Image 
                  src="/images/card_immersive-fashion.png"
                  width={currIndex==0 ? 450 : 400}
                  height={currIndex==0 ? 650 : 600}
                  style={{margin:'0 auto'}}
                />
                {isActive &&
                  <div style={{marginTop: 15, }}>
                    <Link href="/otterescape"><h3 className={styles.projectTitle}>Immersive Fashion</h3></Link>
                    <h6 className={styles.projectSubtext}>Description</h6>
                  </div>
                }
              </div>
            </>
          )}
        </SwiperSlide>
        <SwiperSlide>
          {({ isActive }) => (
            <>
              <div className={styles.carouselFrame}>
                <Image 
                  src="/images/card_ovid.png"
                  width={currIndex==0 ? 450 : 400}
                  height={currIndex==0 ? 650 : 600}
                  style={{margin:'0 auto'}}
                />
                {isActive &&
                  <div style={{marginTop: 15, }}>
                    <Link href="/otterescape"><h3 className={styles.projectTitle}>Ovid</h3></Link>
                    <h6 className={styles.projectSubtext}>Description</h6>
                  </div>
                }
              </div>
            </>
          )}
        </SwiperSlide>
        <SwiperSlide>
          {({ isActive }) => (
            <>
              <div className={styles.carouselFrame}>
                <Image 
                  src="/images/card_zen-productivity.png"
                  width={currIndex==0 ? 450 : 400}
                  height={currIndex==0 ? 650 : 600}
                  style={{margin:'0 auto'}}
                />
                {isActive &&
                  <div style={{marginTop: 15, }}>
                    <Link href="/otterescape"><h3 className={styles.projectTitle}>Zen Productivity</h3></Link>
                    <h6 className={styles.projectSubtext}>Description</h6>
                  </div>
                }
              </div>
            </>
          )}
        </SwiperSlide>
        <SwiperSlide>
          {({ isActive }) => (
            <>
              <div className={styles.carouselFrame}>
                <Image 
                  src="/images/card_immersive-fashion.png"
                  width={currIndex==0 ? 450 : 400}
                  height={currIndex==0 ? 650 : 600}
                  style={{margin:'0 auto'}}
                />
                {isActive &&
                  <div style={{marginTop: 15, }}>
                    <Link href="/otterescape"><h3 className={styles.projectTitle}>Immersive Fashion</h3></Link>
                    <h6 className={styles.projectSubtext}>Description</h6>
                  </div>
                }
              </div>
            </>
          )}
        </SwiperSlide>
      </Swiper>
      
      </div>
      
      {/* <div className={styles.container}> */}
        {/* <div className={styles.carouselContainer}>   */}
          {/* <Slider {...settings}>
            <div className={styles.carouselFrame}>
              <Image 
                src="/card_otter-escape.png"
                width={currIndex==0 ? 450 : 400}
                height={currIndex==0 ? 650 : 600}
                style={{margin:'0 auto'}}
              />
              <div style={{marginTop: 15, }}>
                <Link href="/otterescape"><h3 className={styles.projectTitle}>Otter Escape</h3></Link>
                <h6 className={styles.projectSubtext}>Help Ollie Find His Family!</h6>
              </div>
            </div>
            <div className={styles.carouselFrame}>
              <Image 
                src="/card_college-cookbook.png"
                width={currIndex==1 ? 450 : 400}
                height={currIndex==1 ? 650 : 600}
                style={{margin:'0 auto'}}
              />
              <Link href="/brainbet"><h3 className={styles.projectTitle}>College Cookbook</h3></Link>
              <h6 className={styles.projectSubtext}>Description</h6>
            </div>
            <div className={styles.carouselFrame}>
              <Image 
                src="/card_immersive-fashion.png"
                width={currIndex==2 ? 450 : 400}
                height={currIndex==2 ? 650 : 600}
                style={{margin:'0 auto'}}
              />
              <h3 className={styles.projectTitle}>Immersive Fashion</h3>
              <h6 className={styles.projectSubtext}>Description</h6>
            </div>
            <div className={styles.carouselFrame}>
              <Image 
                src="/card_ovid.png"
                width={currIndex==2 ? 450 : 400}
                height={currIndex==2 ? 650 : 600}
                style={{margin:'0 auto'}}
              />
              <h3 className={styles.projectTitle}>Ovid</h3>
              <h6 className={styles.projectSubtext}>Description</h6>
            </div>
            <div className={styles.carouselFrame}>
              <Image 
                src="/card_zen-productivity.png"
                width={currIndex==2 ? 450 : 400}
                height={currIndex==2 ? 650 : 600}
                style={{margin:'0 auto'}}
              />
              <h3 className={styles.projectTitle}>Zen Productivity</h3>
              <h6 className={styles.projectSubtext}>Description</h6>
            </div>
          </Slider> */}
        {/* </div> */}
      {/* </div> */}
    </main>
  );
}
