import React from "react"

const Card = (props) => {
    return (
        <>
            <div className='box btn_shadow'>
                <div className='title_content d_flex'>
                    <div className='title'>
                        <h2>{props.title}</h2>
                        <span>{props.year}</span>
                    </div>
                    <div className='rate'>
                        <button className='btn_shadow '>{props.rate}</button>
                    </div>
                </div>
                <hr />
                <p>{props.desc1}</p>
                <p>{props.desc2}</p>
                <p>{props.desc3}</p>
            </div>
        </>
    )
}

export default Card