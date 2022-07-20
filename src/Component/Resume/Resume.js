import React from "react"
import "./Resume.css"
import ResumeApi from "./ResumeAPI"
import Card from "./Card"
import ResumePDF from "./SagarKhandagale.pdf";
import Animation from "../Animation/Animation"

const Resume = () => {
    return (
        <>
            <section className='Resume' id='resume'>
                <div className='container top'>
                    <div className='heading text-center'>
                        <h4>3+ YEARS OF EXPERIENCE</h4>
                        <h1>My Resume</h1>
                        <br />
                        <a href={ResumePDF} className="btn_shadow" target="_blank" rel="noreferrer">Resume</a>
                    </div>

                    <div className='content-section mtop d_flex'>
                        <div className='left'>
                            <div className='heading'>
                                <h4>2012-2016 | 2021-2023</h4>
                                <h1>Education</h1>
                            </div>

                            <div className='content'>
                                {ResumeApi.map((val, id) => {
                                    if (val.category === "education") {
                                        return <Card key={id} title={val.title} year={val.year} rate={val.rate} desc1={val.desc1} desc2={val.desc2} desc3={val.desc3} />
                                    }
                                })}
                            </div>
                        </div>
                        <div className='left'>
                            <div className='heading'>
                                <h4>2018-2021</h4>
                                <h1>Work Experience</h1>
                            </div>

                            <div className='content'>
                                {ResumeApi.map((val, index) => {
                                    if (val.category === "experience") {
                                        return <Card key={index} title={val.title} year={val.year} rate={val.rate} desc1={val.desc1} desc2={val.desc2} desc3={val.desc3} />
                                    }
                                })}
                            </div>
                        </div>
                    </div>
                </div>
                <Animation />
            </section>
        </>
    )
}

export default Resume