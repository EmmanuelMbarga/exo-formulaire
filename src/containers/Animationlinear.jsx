import React, { useState } from "react";

const AnimationLin=()=>{

    const datas=[
        "chien",
        "chat"
    ] 

    const [valeur,setValeur]=useState("")
    const handlerchange=(e)=>{
        setValeur(e.target.value)
    }

    return(
        <div class="mx-28 mt-4">
            <input type="text" value={valeur} onChange={handlerchange} class="border rounded-l"></input>
            <button bg-black class="border-1 bg-blue-700 text-neutral-50"><span>rechercher</span></button>
            <ul>
                { valeur &&
                    datas.filter((element)=>element.includes(valeur))
                    .map((element,index)=><li key={index} class="cursor-pointer"> <a href={element}>{element}</a></li>)
                }
            </ul>

        </div>
    )
    // const datas=["chien","jouet","chèvre",'bts',"popcone"]

    // const [valeur,setValeur]=useState("")

    // const handlersearch=(e)=>{
    //     setValeur(e.target.value)
    // }

    // // const handlerClick=()=>{
    // //     console.log("yes");
    // // }
    // return(
    //     <div>
    //         <div class="mx-28 mt-4">
    //              <input type="text" id="search" name="seachbar" value={valeur} onChange={handlersearch} class="border rounded-l"   ></input>
    //              <button class="border-1 bg-black text-neutral-50" onClick={()=>console.log (valeur)}><span>rechercher</span></button>
    //              {/* <button class="border-1 bg-black text-neutral-50" onClick={()=>datas.forEach((element,index)=> {console.log(element===valeur? <a href={element} key={index}>{element}</a>:null ); })}><span>rechercher</span></button> */}
    //              <ul>
    //                 {  valeur &&
    //                 datas.filter((element)=>element.includes(valeur)
    //                     ).map((element,index)=> (
    //                         <li key={index} onClick={()=>setValeur(element)}>{element}</li>
    //                     )    
    //                     )
    //                 }
    //              </ul>
    //         </div>
        // </div>
    
} 

export default AnimationLin;