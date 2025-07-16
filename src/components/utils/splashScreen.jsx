// 'use client'

import { blur } from "@/constants";
// import { useEffect, useState } from "react"
export const SplashScreen = () => {

    // const [active, setActive] = useState({ visible: true, slideOff: false });

    // useEffect(() => {
    //     setTimeout(() => {
    //       setActive(pre => ({...pre, slideOff: true}));
    //     }, 2000);
    //     setTimeout(() => {
    //       setActive(pre => ({...pre, visible: false}));
    //     }, 3000);
    // },[])

    // if (blur) return children;
    return (
        <>
          <style>{`
            :root {
              --shadow-hue: #62209c;
              --shadow-lightness: #3a0d63;
            }
            .circle {
              aspect-ratio: 1;
              width: 100%;
              position: relative;
              height: 56em;
              width: 56em; 
              font-size: clamp(0.8rem, 2vw, 1rem);
            }
            .circle span {
              height: 50%;
              width: 50%;
              display: block;
              border-radius: 50%;
              position: absolute;
              top: 50%;
              left: 50%;
              transform: translate(-50%, -50%); 
            }
            .circle .circle__btn {
              z-index: 300;
              background: #431071;
              box-shadow: 0.3em 0.3em 0.6em #4c157e, -0.2em -0.2em 0.5em #5a1a94;
            }
            .circle .circle__back-1,
            .circle .circle__back-2 {
              filter: blur(1px); 
            }
            .circle .circle__back-1 {
              box-shadow: 0.4em 0.4em 0.8em var(--shadow-hue), -0.4em -0.4em 0.8em var(--shadow-lightness);
              background: linear-gradient(to bottom right, var(--shadow-hue) 0%, var(--shadow-lightness) 100%);
              animation: waves 4s linear infinite; 
            }
            .circle .circle__back-2 {
              box-shadow: 0.4em 0.4em 0.8em var(--shadow-hue), -0.4em -0.4em 0.8em var(--shadow-lightness);
              animation: waves 4s linear 2s infinite; 
            }
            .circle .brand-box {
              position: absolute;
              top: 48%;
              left: 50%;
              transform: translate(-50%, -50%);
              z-index: 400;
              display: flex;
              flex-direction: column;
              gap: 2.2rem;
              align-items: center;
            }
            .loading-label {
              font-size: 2em;
              font-weight: 500;
              letter-spacing: 0.2em;
              line-height: 1;
              color: #0e3742;
              text-align: center;
              -webkit-box-reflect: below 1px linear-gradient(transparent, #0000000a, #00000021);
              color: white;
              text-shadow: 0 0 10px #03bcf4,
                            0 0 20px #03bcf4,
                            0 0 40px #03bcf4,
                            0 0 80px #03bcf4,
                            0 0 160px #03bcf4;
              animation: animate_text 1s steps(1) infinite;
            }
            @keyframes animate_text {
                0%, 100% {
                    opacity: 0;
                }
                50% {
                    opacity: 1;
                }
            }
            @keyframes waves {
              0% {
                transform: translate(-50%, -50%) scale(1);
                opacity: 1; 
              }
              50% {
                opacity: 1; 
              }
              100% {
                transform: translate(-50%, -50%) scale(2);
                opacity: 0; 
              } 
            }`}
          </style>
            {/* {active.visible ?  */}
              <div style={{background: '#4c157e', 
                  fontSize: 'clamp(1rem, 5vw, 2rem)', 
                  position: 'fixed', 
                  inset: 0, 
                  zIndex: '1111', 
                  display: 'flex', 
                  flexDirection: 'column', 
                  justifyContent: 'center', 
                  alignItems: 'center', 
                  gap: '4rem',
                  // transform: active.slideOff ? 'translateY(-105%)' : 'none',
                  transition: '0.6s ease-in-out'
                }}>
                  {/* <Image src={'/images/logo.jpg'} style={{borderRadius: 5}} width={200} height={68} alt="Logo" />
                  <div className="pl" style={{fontSize: 'clamp(1.6rem, 6vw, 2.2rem)'}}>
                      <div className="pl__dot"></div>
                      <div className="pl__dot"></div>
                      <div className="pl__dot"></div>
                      <div className="pl__dot"></div>
                      <div className="pl__dot"></div>
                      <div className="pl__dot"></div>
                      <div className="pl__dot"></div>
                      <div className="pl__dot"></div>
                      <div className="pl__dot"></div>
                      <div className="pl__dot"></div>
                      <div className="pl__dot"></div>
                      <div className="pl__dot"></div>
                      <div className="pl__text">Loading…</div>
                  </div> */}

                  <div className="circle">
                    <div className="brand-box">
                      <img src={'/images/shopify-icon.png'} style={{borderRadius: 5, maxWidth: '46%'}} alt="Logo" />
                      <h2 className="loading-label">LOADING</h2>
                    </div>
                    <span className="circle__btn"></span>
                    <span className="circle__back-1"></span>
                    <span className="circle__back-2"></span>
                  </div>
              </div> 
            {/* : ''} */}
            {/* {children} */}
        </>
    )
}