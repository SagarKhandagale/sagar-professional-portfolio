import React from "react"
import "./Home.css"
import hero from "../pic/hero.png"
import Typewriter from "typewriter-effect";
import CIcon from '@coreui/icons-react'
import { cibLeetcode } from '@coreui/icons/js/brand/cib-leetcode'
import Animation from "../Animation/Animation";

const Home = () => {
    return (
        <>
            <section className='hero' id='home'>
                <div className='container f_flex top'>
                    <div className='left top'>
                        <h3>WELCOME TO MY WORLD</h3>
                        <h1>
                            Hi, I’m <span>Sagar</span>
                        </h1>
                        <h2>
                            a
                            {/* <span> */}
                            {/* <Typewriter words={[" Full Stack Developer", " Front End Developer", " Back End Developer"]} loop cursor cursorStyle='|' typeSpeed={70} deleteSpeed={50} delaySpeed={0} /> */}
                            <Typewriter
                                onInit={(typewriter) => {
                                    typewriter
                                        .typeString("Full-Stack Developer")
                                        .pauseFor(1000)
                                        .deleteAll()
                                        .typeString("Front-End Developer")
                                        .pauseFor(1000)
                                        .deleteAll()
                                        .typeString("Back-End Developer")
                                        .pauseFor(1000)
                                        .deleteAll()
                                        .typeString("Software Developer")
                                        .start();
                                }}
                            />
                            {/* </span> */}
                        </h2>

                        <p>Power of imagination with the good logical skills makes the perfect code for anything we want to build. Building that combination and being better at it by improving my knowledge and skills on daily basis.</p>

                        <div className='hero_btn d_flex'>
                            <div className='col_1'>
                                <h4>FIND WITH ME</h4>
                                <div className='button'>
                                    <a href="https://www.linkedin.com/in/sagarjk2094/" target="_blank" rel="noreferrer">
                                        <button className='btn_shadow'><i class='fab fa-linkedin-in'></i></button>
                                    </a>
                                    <a href="https://github.com/SagarKhandagale" target="_blank" rel="noreferrer">
                                        <button className='btn_shadow'><i class="fab fa-github"></i></button>
                                    </a>
                                    <a href="https://leetcode.com/SagarKhandagale/" target="_blank" rel="noreferrer">
                                        <button className='btn_shadow'><CIcon icon={cibLeetcode} height="18" /></button>
                                    </a>
                                    <a href="https://www.instagram.com/sagar_k2094/" target="_blank" rel="noreferrer">
                                        <button className='btn_shadow'><i class='fab fa-instagram'></i></button>
                                    </a>
                                    <a href="https://www.facebook.com/sagar.khandagale.944/" target="_blank" rel="noreferrer">
                                        <button className='btn_shadow'><i class='fab fa-facebook-f'></i></button>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='right'>
                        <div className='right_img'>
                            <img src={hero} alt='' />
                        </div>
                    </div>
                </div>
                <Animation />
                {/* <div class="animation-area">
                    <ul class="box-area">
                        <li></li>
                        <li></li>
                        <li></li>
                        <li></li>
                        <li></li>
                        <li></li>
                    </ul>
                </div> */}
            </section>
        </>
    )
}

export default Home