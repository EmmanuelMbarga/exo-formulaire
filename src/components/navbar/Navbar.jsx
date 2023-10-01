import React from "react"
import "../../index.css"
const Navbarsearch=()=>{
    return(
    <nav class="bg-slate-700">
            <ul class="flex justify-around relative">
                <li class="text-neutral-50 px-[20px] py-[30px]">Menu
                        <ul class="w-48 bg-slate-300 absolute -bottom-12 left-3">
                            <li>Activités</li>
                            <li>Bulleterie</li>
                        </ul>
                </li>
                <li class="text-neutral-50 px-[20px] py-[30px]">services en ligne
                        <ul class="w-48 bg-slate-300 absolute -bottom-12">
                            <li>designh</li>
                            <li>macket</li>
                            <li>expert</li>
                        </ul>
                </li>
                <li class="text-neutral-50 px-[20px] py-[30px]">contact
                            <ul class="hidden">
                                <li>Whatsapp</li>
                                <li>Instagram</li>
                            </ul>
                </li>
            </ul>
    </nav>
    )

} 

export default Navbarsearch