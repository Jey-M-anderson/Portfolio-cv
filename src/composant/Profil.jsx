import React from 'react'



export default function Profil(nom, prenom) {
  return (
    <div className='flex flex-col items-center gap-5 mb-5'>
        <img  src="./images/17.png" className="w-[300px]" alt="" />
        <h2 className='text-4xl font-semibold'>{nom}{prenom}</h2>
        
    </div>
  )
}
