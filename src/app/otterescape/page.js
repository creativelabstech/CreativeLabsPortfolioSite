"use client";

import Image from "next/image";
import styles from "../page.module.css";
import Button, { ButtonProps } from '@mui/material/Button';
import { purple, blue } from '@mui/material/colors';
import { styled } from '@mui/material/styles';
import { Parallax, ParallaxLayer } from "@react-spring/parallax";
import Link from 'next/link';

import { Roboto_Mono } from "next/font/google";
// import styled from "styled-components";





// import Slider from "react-slick";
// import { useState } from "react";
// import "slick-carousel/slick/slick.css";
// import "slick-carousel/slick/slick-theme.css";
// import Link from 'next/link';

// import 'glider-js/glider.min.css';

const roboto_mono = Roboto_Mono({subsets: ["latin"]});


export default function OtterEscape() {
//   const Container = styled.div`
//   width: 100%;
//   height: 100vh;
//   background-color: #f0f0f0;
//   overflow: hidden;
// `;

// const ParallaxPage = styled.div`
//   width: 100%;
//   height: 100vh;
//   // display: flex;
//   // justify-content: center;
//   // align-items: center;
//   // font-size: 3rem;
//   // font-weight: bold;
//   color: #333;
// `;

// const ParallaxBackground = styled.div`
//   width: 100%;
//   height: 100%;
//   background-size: cover;
//   background-position: center;
// `;
  
const ColorButton = styled(Button)(({ theme }) => ({
  color: theme.palette.getContrastText('#045263'),
  backgroundColor: '#045263',
  '&:hover': {
    backgroundColor: '#d3e5fb',
  },
  width:'9em',
  height:'3em',
  textTransform: 'none',
  borderRadius:'20px',
  marginTop:'2%',
  fontSize:'1vw',
  fontFamily:roboto_mono
}));

  return (
    // <Container>
    <main className={styles.detailPageMain}>
      {/* <div className={styles.navbar}>
        <Link href="/">
            <div className={styles.navSubcontainer}>
                <Image 
                  src="/cl_logo.png"
                  width={25}
                  height={25}
                />
              <h1 className={styles.title}>Creative Labs</h1>
            </div>
          </Link>

          <h1 className={styles.siteLinkTitle}>
            <a href="https://www.instagram.com/creativelabsusc/">Club Website</a>
          </h1>
      </div> */}
      <div className={styles.detailPageBody}>
      {/* <ParallaxBackground style={{
              backgroundImage:
                "url(https://images.pexels.com/photos/7130498/pexels-photo-7130498.jpeg)",
            }}/> */}
      
      {/* <Parallax pages={1}> */}
      {/* <div style={{display:"flex", width:'100%',  flexDirection:"column"}}> */}
        {/* title, basic details + hero image */}
        {/* LAYER 1 */}
        {/* <ParallaxLayer offset={0} speed={0.05}> */}
        {/* <ParallaxPage> */}
        {/* <ParallaxPage> */}
        <div style={{display:"flex", flexDirection:"row", justifyContent: "space-between", width: '100%', alignItems: 'start', marginTop:'5%'}}>
          <div style={{display:"flex", flexDirection:"column", width:'50%'}}>
            <span style={{color:'#045263'}}> <a href="/"> &lt; Projects </a></span>
            <span style={{fontSize:'4em', fontWeight:'bold', marginTop:'2%', color:'#045263'}}>Otter Escape</span>
            <span style={{fontSize:'1vw', marginTop:'2%', color:'#045263'}}>HELP OLLIE THE OTTER FIND HIS FAMILY!</span>
            <span style={{marginTop:'2%', fontStyle: 'italic', color:'#045263'}}>Fall 2022 - Spring 2023</span>
            <ColorButton variant="contained"><span style={{fontSize:'1vw'}}><a href="https://kxrmenglin.github.io/CLOtterEscape/">View Project</a></span></ColorButton>
            <div style={{display:'flex', flexDirection:'row', width:'100%', justifyContent:'space-between', marginTop:'2%'}}>
              <div style={{display:'flex', flexDirection:'column'}}>
                <span style={{fontWeight:'bold', color:'#045263'}}>Project Lead</span>
                <span className={styles.memberName}>Sarah Woo</span>
              </div>
              <div style={{display:'flex', flexDirection:'column'}}>
                <span style={{fontWeight:'bold', color:'#045263'}}>Designers</span>
                <span className={styles.memberName}>Won Choi</span>
                <span className={styles.memberName}>Yeji Seo</span>
              </div>
              <div style={{display:'flex', flexDirection:'column'}}>
                <span style={{fontWeight:'bold', color:'#045263'}}>Developers</span>
                <span className={styles.memberName}>Kerry Meng-Lin</span>
                <span className={styles.memberName}>Jimmy Cha</span>
                <span className={styles.memberName}>Hanyoung Kim</span>
                <span className={styles.memberName}>Nicole Concepcion</span>
              </div>
            </div>
            <span style={{marginTop:'10%', color:'#045263'}}>/01 Brief</span>
            <span className={styles.projDetailPar}>
            Otter Escape is a browser-based, single-player game where you can help the otter find his way
            back to the ocean. Ollie was only two years old when he was captured by the evil human and
            forced to say goodbye to the wild. One quiet night, the human forgot to lock his cage, and Ollie
            took his chance to escape! How will his journey end...? Will he finally return to his home in the
            ocean? Will he be caught by the human again? Play to find out!
            </span>
          </div>
          <div>
          <Image 
                src="/card_otter-escape.png"
                width={500}
                height={700}
                style={{margin:'0 auto'}}
          />
          </div>
        </div>
        {/* </ParallaxPage> */}
        {/* </ParallaxLayer> */}
        <div style={{marginTop:'10em'}}>
          <div style={{display:'flex', flexDirection:'row', alignItems:'center'}}>
          <Image 
                src="/ollieProg1.png"
                width={400}
                height={400}
                style={{margin:'0 auto'}}
          />
          <Image 
                src="/ollieProg2.png"
                width={400}
                height={400}
                style={{margin:'0 auto'}}
          />
          <Image 
                src="/ollieProg3.png"
                width={400}
                height={400}
                style={{margin:'0 auto'}}
          />
          </div>
        </div>
        <div className={styles.projDetailViewContainer}>
          <div className={styles.heroHeader}>
            <span style={{marginTop:'2%', color:'#045263'}}>/01 Idea </span>
            <span style={{marginTop:'2%', fontSize:'2em', color:'#045263'}}>Create a <span style={{fontWeight:'bold', fontStyle:'italic'}}>game</span> for all ages embodying Creative Labs’ mascot, <span style={{fontWeight:'bold', fontStyle:'italic'}}>Ollie the Otter </span></span>
          </div>
          <div className={styles.parContainer}>
            <span style={{fontWeight:'normal', color:'#045263'}}>
            Otter Escape is a browser-based, single-player game where you can help Ollie the Otter find his way
            back to his family. Ollie was only two years old when he was captured by humans and
            forced to say goodbye to his fam. One quiet night, the human forgot to lock his cage, and Ollie
            took his chance to escape! How will his journey end...? Will he finally return to his home in the
            ocean? Will he be caught by the human again? Play to find out!
            </span>
          </div>
        </div>
        <div>
          <div style={{display:'flex', flexDirection:'row', alignItems:'center'}}>
          <Image 
                src="/ollieProg1.png"
                width={400}
                height={400}
                style={{margin:'0 auto'}}
          />
          <Image 
                src="/ollieProg2.png"
                width={400}
                height={400}
                style={{margin:'0 auto'}}
          />
          <Image 
                src="/ollieProg3.png"
                width={400}
                height={400}
                style={{margin:'0 auto'}}
          />
          </div>
        </div>
        <div className={styles.projDetailViewContainer}>
          <div className={styles.heroHeader}>
            <span style={{marginTop:'2%', color:'#045263'}}>/02 Design </span>
            <span style={{marginTop:'2%', fontSize:'2em', color:'#045263'}}>Design goal was to create simple, pixelated designs for <span style={{fontWeight:'bold', fontStyle:'italic'}}>all ages </span></span>
          </div>
          <div className={styles.parContainer}>
            <span style={{fontWeight:'normal', color:'#045263'}}>
            As the dawn broke and the world stirred into motion, a team of designers embarked on a journey of creativity and innovation. Armed with nothing but their imagination and a blank canvas, they set out to tackle the challenges of their latest design project. <br /><br />
            Each member brought their own unique perspective to the table, weaving together a tapestry of ideas that danced across the room like whispers of a forgotten dream.<br /><br />
            Their thought process was a labyrinth of twists and turns, a maze of possibilities waiting to be explored. They pondered the intricacies of form and function, balancing aesthetics with practicality in a delicate dance of compromise.
            </span>
          </div>
        </div>
        <div>
          <div style={{display:'flex', flexDirection:'row', alignItems:'center'}}>
          <Image 
                src="/ollieProg1.png"
                width={400}
                height={400}
                style={{margin:'0 auto'}}
          />
          <Image 
                src="/ollieProg2.png"
                width={400}
                height={400}
                style={{margin:'0 auto'}}
          />
          <Image 
                src="/ollieProg3.png"
                width={400}
                height={400}
                style={{margin:'0 auto'}}
          />
          </div>
        </div>
        <div className={styles.projDetailViewContainer}>
          <div className={styles.heroHeader}>
            <span style={{marginTop:'2%', color:'#045263'}}>/03 Marketing </span>
            <span style={{marginTop:'2%', fontSize:'2em', color:'#045263'}}>Captivating Our Audience,<span style={{fontWeight:'bold', fontStyle:'italic'}}>One Pixel</span> at a Time</span>
          </div>
          <div className={styles.parContainer}>
            <span style={{fontWeight:'normal', color:'#045263'}}>
            To captivate our target audience – the USC community – we tapped into the power of Instagram and other social platforms. We also created adorable stickers featuring Ollie the Otter, our lovable mascot, which were a hit at our annual exhibition and around campus, boosting audience appeal.<br/><br/>
            Additionally, we crafted engaging blog posts that not only explained the game's mechanics but also highlighted how it embodied the innovative spirit of Creative Labs. These posts deepened our connection with our audience, inviting them to explore the game's creative process.            </span>
          </div>
        </div>
        <div className={styles.blobCont}>
            <div className={styles.yellowBlob}></div>
            <div className={styles.greenBlob}></div>
          </div>
        
      {/* </div> */}
      {/* </Parallax> */}
    </div>
    </main>
    // </Container>
  );
}
