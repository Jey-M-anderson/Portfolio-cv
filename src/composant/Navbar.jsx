import React from 'react'
import { Link } from 'react-router-dom'


export default function Navbar() {
  return (
    <nav className=" h-44 flex justify-around  flex-row bg-sky-400">

        <div class=" flex justify-center  align-bottom">

             <img src="./images/17.png" className="w-34 h-34 " alt="" /> 
        

            

        </div>

        <ul class="flex flex-row justify-around align-bottom">

            <li class="m-14">
                <Link className="btn glass" to={'/'}>Accueil</Link>
            </li>

            <li class="m-14">
                <Link className="btn glass" to={'/competence'}>Comptence</Link>
            </li>

            <li class="m-14">
                <Link className="btn glass" to={'/about'}>À propos</Link>
            </li>

            <li class="m-14">
                <Link className="btn glass" to={'/contact'}>Contact</Link>
            </li>
            <li class="m-14">
                <Link className="btn glass" to={'/admin'}>Admin</Link>
            </li>
        
        </ul>
    </nav>
  )     
}
