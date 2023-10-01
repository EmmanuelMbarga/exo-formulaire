import React from 'react'
import logo from "./../src/images/5.jpg"
import Formulairenote from './containers/formulaire'
import AnimationScrolls from './containers/Animations'
import AnimationLin from './containers/AnimationLinear'
import Navbarsearch from './components/navbar/Navbar'
// import './App.css'
import "./../src/index.css"


function App() {

  return (
    <div>
      <Navbarsearch/>,
      <AnimationLin/>
      <div class="my-7" >
        <div class="mx-40 ">
              <img src={logo} alt="" class="w-56"/>
              <div class="hover:shadow-lime-300 shadow-sm rounded-full">
            <h1 class="text-black-600 border-lime-800 border-l-4 mt-3 px-2 hover:shadow-lime-600 shadow-md " >Bienvenu Dans la cérémonie de mariage du couple AB Graphix !!!. Veillez reserver votre biellet pour la participation aux activées.</h1>
        </div>
          
        </div>
        <div class="mx-24">
          <Formulairenote/>
          </div>
      </div>
      <div>
      <AnimationScrolls/>
      </div>
      
      </div>
  )
}

export default App
