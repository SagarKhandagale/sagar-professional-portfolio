import React from 'react'
import Card from './Card'
import "./Feature.css"
import data from './FeaturesAPI'

const Feature = () => {
  return (
    <>
        <section className="features top" id="features">
            <div className="container">
                <div className="heading">
                    <h4>Skills</h4>
                    <h1>What I Can Do</h1>
                </div>

                <div className="content grid-skill">
                    {data.map((val, index) => {
                        return <Card key={index} image={val.image} title={val.title} desc={val.desc} />
                    })}
                </div>

            </div>
        </section>
    </>
  )
}

export default Feature