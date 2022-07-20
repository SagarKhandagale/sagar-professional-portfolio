import React, { useState, useEffect } from 'react'
import './Code.css'
import MergeSort from './images/MergeSort1.png'
import BinarySearchRecursion from './images/BinarySearchRecursion.png'
import FactorialByRecursion from './images/FactorialByRecursion.png'
import QuickSort from './images/QuickSort1.png'
import Scrollspy from 'react-scrollspy'
import Animation from '../Animation/Animation'

const Code = () => {
    const setActive = (e) => {
        console.log("setActive");
        document.getElementById('code1').classList.remove('code-active');
        document.getElementById('code2').classList.remove('code-active');
        document.getElementById('code3').classList.remove('code-active');
        document.getElementById('code4').classList.remove('code-active');
        console.log(e.target.id);
        var selectedValue = document.getElementById(e.target.id);
        // console.log(selectedValue.parentElement);
        selectedValue.classList.add("code-active");

        // console.log(e.target.parentElement.classList);
    }
    return (
        <>
            <section className="Code top" id="code">
                <div className="container ">
                    <div className="heading">
                        <h4>Code Snippet</h4>
                        <h1>Here is my sample code</h1>
                    </div>
                    <div className='bd-example '>
                        <div className="row">
                            <div className="col-width-4">
                                <Scrollspy items={['#list-item-1', '#list-item-2', '#list-item-3', '#list-item-4']} currentClassName="is-current">
                                    <div id="list-example" className="list-group" onClick={(e) => setActive(e)}>
                                        <a id='code1' className="list-group-item list-group-item-action" href="#list-item-1" >Merge Sort</a>
                                        <a id='code2' className="list-group-item list-group-item-action" href="#list-item-2" >Binary Search Recursion</a>
                                        <a id='code3' className="list-group-item list-group-item-action" href="#list-item-3" >Factorial By Recursion</a>
                                        <a id='code4' className="list-group-item list-group-item-action" href="#list-item-4" >Quick Sort</a>
                                        {/* <a className="list-group-item list-group-item-action" href="#list-item-1" >Merge Sort</a>
                                        <a className="list-group-item list-group-item-action" href="#list-item-2" >Binary Search Recursion</a>
                                        <a className="list-group-item list-group-item-action" href="#list-item-3" >Factorial By Recursion</a>
                                        <a className="list-group-item list-group-item-action" href="#list-item-4" >Quick Sort</a> */}
                                    </div>
                                </Scrollspy>
                            </div>
                            <div className="col-width-8">
                                <div className="scroll-code" >
                                    <h4 id="list-item-1">Merge Sort</h4>
                                    <p><img className='code-image' src={MergeSort} alt="" /></p>
                                    <h4 id="list-item-2">Binary Search Recursion</h4>
                                    <p><img className='code-image' src={BinarySearchRecursion} alt="" /></p>
                                    <h4 id="list-item-3">Factorial By Recursion</h4>
                                    <p><img className='code-image' src={FactorialByRecursion} alt="" /></p>
                                    <h4 id="list-item-4">Quick Sort</h4>
                                    <p><img className='code-image' src={QuickSort} alt="" /></p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <Animation />
            </section>
        </>
    )
}

export default Code
