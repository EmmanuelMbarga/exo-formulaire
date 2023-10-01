import React, { useEffect } from 'react'
import gsap from 'gsap'
import { ScrollToPlugin } from 'gsap/all'
import { ScrollTrigger } from 'gsap/src/all'
import "../../src/App.css"
gsap.registerPlugin(ScrollToPlugin, ScrollTrigger)

const AnimationScrolls=()=>{
    const SlideIntop=(elem,delay,duration)=>{ 

        gsap.fromTo(
            elem,
            {
                opacity:0,
                y:-120,
            }, 
            {
                opacity:1, 
                y:0, 
                duration:0.6,
                delay:0.4, 
                scrollTrigger:{
                    trigger: elem,
                    start:"top center",
                    end:"bottom center"
                }  
            }
        )

    } 

    useEffect(()=>{
        SlideIntop("#box1");
        
    },[]) 

    useEffect(()=>{
        SlideIntop("#box2")
    },[])

    const SlideInLeft=(elem,delay,duration)=>{ 

        gsap.fromTo(
            elem,
            {
                opacity:0,
                x:-120, 
            },  
            {
                opacity:1,  
                x:0, 
                duration:0.6,
                delay:0.8, 
                scrollTrigger:{
                    trigger: elem,
                    start:"top center",
                    end:"bottom center"
                }  
            }
        )

    }
        
    useEffect(()=>{
        SlideInLeft("#box3")
    },[])

    useEffect(()=>{
        SlideInLeft("#box4")
    },[])
 
    return(
        <div class="mt-14  mx-0 max-h-14">
              <section class="mx-0 bg-blue-700">
                            <div  id='box1' class="text-6xl border-b-[1px] border-neutral-50 text-neutral-50 py-16 text-center"> 
                             box 1
                            </div>
                            <div  id='box2' class="text-6xl border-b-[1px] border-neutral-50 text-neutral-50 py-16 text-center"> 
                             box 2
                            </div>
                            <div  id='box3' class="text-6xl border-b-[1px] border-neutral-50 text-neutral-50 py-16 text-center"> 
                             box 3 
                            </div> 
                            <div  id='box4' class="text-6xl border-b-[1px] border-neutral-50 text-neutral-50 py-16 text-center"> 
                             box 4 
                            </div> 
                  
              </section>
              <section class="bg-blue-700" >  
                    <div  id='box5' class="text-6xl border-b-[1px] border-neutral-50 text-neutral-50 py-16 text-center"> 
                             last section
                    </div> 
              </section>
        
        </div>
    )
} 

export default AnimationScrolls; 