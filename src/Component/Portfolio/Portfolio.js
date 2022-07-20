import React from 'react'
import "./Portfolio.css";
import Card from "./Card";
import Portfolio_data from './Portfolio_data';

const Portfolio = () => {
  return (
    <>
        <section className="Portfolio top" id="portfolio">
            <div className="container">
                <div className="heading text-center">
                    <h4>VISIT MY PORTFOLIO AND KEEP YOUR FEEDBACK</h4>
                    <h1>My Portfolio</h1>
                </div>
                <div className="content grid">
                    {Portfolio_data.map((value, index) => {
                        return <Card key={index} category={value.category} titleLike={value.titleLike} title={value.title} subtitle={value.subtitle} image={value.image} p1={value.p1} p2={value.p2} p3={value.p3}/>
                    })}
                </div>
            </div>
        </section>
    </>
  )
}

export default Portfolio