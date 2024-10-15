"use client";

import Image from "next/image";
import styles from "../page.module.css";
import Button, { ButtonProps } from '@mui/material/Button';
import { purple, blue } from '@mui/material/colors';
import { styled } from '@mui/material/styles';
import { Parallax } from 'react-scroll-parallax';




// import Slider from "react-slick";
// import { useState } from "react";
// import "slick-carousel/slick/slick.css";
// import "slick-carousel/slick/slick-theme.css";
// import Link from 'next/link';

// import 'glider-js/glider.min.css';

export default function CollegeCookbook() {
  
// const ColorButton = styled(Button)(({ theme }) => ({
//   color: theme.palette.getContrastText('#045263'),
//   backgroundColor: '#045263',
//   '&:hover': {
//     backgroundColor: '#d3e5fb',
//   },
//   width:'8em',
//   height:'3em',
//   textTransform: 'none',
//   borderRadius:'20px',
//   marginTop:'2%',
// }));

  return (
    <main className={styles.detailPageMain}>
      <div className={styles.navbar}>
          <div className={styles.navSubcontainer}>
            <Image 
              src="/images/cl_logo.png"
              width={25}
              height={25}
            />
            <h1 className={styles.title}>Creative Labs</h1>
          </div>
          <h1 className={styles.siteLinkTitle}>
            <a href="https://www.instagram.com/creativelabsusc/">Club Website</a>
          </h1>
        </div>
      <div style={{display:"flex", width:'100%',  flexDirection:"column"}}>
        {/* title, basic details + hero image */}
        <div style={{display:"flex", flexDirection:"row", justifyContent: "space-evenly", width: '100%', alignItems: 'start', marginTop:'5%'}}>
          <div style={{display:"flex", flexDirection:"column", width:'40%'}}>
            <span> <a href="/"> &lt; Projects </a></span>
            <span style={{fontSize:'3vw', fontWeight:'bold', marginTop:'2%'}}>College Cookbook</span>
            <span style={{fontSize:'1vw', marginTop:'2%'}}>Description</span>
            <span style={{marginTop:'2%', fontStyle: 'italic'}}>Fall 2022</span>
            {/* <ColorButton variant="contained"><span style={{fontSize:'1vw'}}>View Project</span></ColorButton> */}
            <div style={{display:'flex', flexDirection:'row', width:'100%', justifyContent:'space-between', marginTop:'2%'}}>
              <div style={{display:'flex', flexDirection:'column'}}>
                <span style={{fontWeight:'bold'}}>Project Lead</span>
                <span>Genna Yu</span>
                <span>Aahana</span>
              </div>
              <div style={{display:'flex', flexDirection:'column'}}>
                <span style={{fontWeight:'bold'}}>Designer</span>
                <span>Skyler</span>
                <span>Michaela Chang</span>
              </div>
              <div style={{display:'flex', flexDirection:'column'}}>
                <span style={{fontWeight:'bold'}}>Writer</span>
                <span>Ishita</span>
              </div>
            </div>
            <span style={{marginTop:'10%'}}>/01 Brief</span>
            <span style={{marginTop:'2%'}}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Felis eget velit aliquet sagittis id consectetur purus ut faucibus. Augue mauris augue neque gravida in. Neque laoreet suspendisse interdum consectetur libero. </span>
          </div>
          <div>
          <Image 
                src="/card_college-cookbook.png"
                width={500}
                height={750}
                style={{margin:'0 auto'}}
          />
          </div>
        </div>
        <span style={{marginTop:'2%'}}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Felis eget velit aliquet sagittis id consectetur purus ut faucibus. Augue mauris augue neque gravida in. Neque laoreet suspendisse interdum consectetur libero. </span>
        <span style={{marginTop:'2%'}}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Felis eget velit aliquet sagittis id consectetur purus ut faucibus. Augue mauris augue neque gravida in. Neque laoreet suspendisse interdum consectetur libero. </span>
        <span style={{marginTop:'2%'}}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Felis eget velit aliquet sagittis id consectetur purus ut faucibus. Augue mauris augue neque gravida in. Neque laoreet suspendisse interdum consectetur libero. </span>
        <span style={{marginTop:'2%'}}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Felis eget velit aliquet sagittis id consectetur purus ut faucibus. Augue mauris augue neque gravida in. Neque laoreet suspendisse interdum consectetur libero. </span>
        <span style={{marginTop:'2%'}}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Felis eget velit aliquet sagittis id consectetur purus ut faucibus. Augue mauris augue neque gravida in. Neque laoreet suspendisse interdum consectetur libero. </span>

      </div>
    </main>
  );
}