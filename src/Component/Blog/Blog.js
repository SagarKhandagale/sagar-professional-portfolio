import React from "react"
import "../Portfolio/Portfolio.css"
import "../Blog/Blog.css"
import Card from "./Card"
import BlogApi from "./BlogAPI"
import Animation from "../Animation/Animation"

const Blog = () => {
  return (
    <>
      <section className='Portfolio Blog' id='blog'>
        <div className='container top'>
          <div className='heading text-center'>
            <h4>KNOW MORE ABOUT ME OTHER THAN CODING</h4>
            <h1>Extra Curricular & Interests</h1>
          </div>

          <div className='content grid'>
            {BlogApi.map((value, index) => {
              return <Card key={index} image={value.image} date={value.date} main_title={value.main_title} img_one={value.img_one}  img_two={value.img_two}  img_three={value.img_three} title_one={value.title_one} title_two={value.title_two} title_three={value.title_three} desc_one={value.desc_one} desc_two={value.desc_two} desc_three={value.desc_three} />
            })}
          </div>
        </div>
        <Animation />
      </section>
    </>
  )
}

export default Blog