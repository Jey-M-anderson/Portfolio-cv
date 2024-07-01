import React, { useEffect, useState } from 'react'


  export default function Competence() {
    const [competence, setCompetence] = useState([])
    async function fetchCompetence(){
        const response = await fetch ('http://localhost:3333/competence')
        const data = await response.json()
        console.log(data);
        setCompetence(data)
    }

    useEffect(()=>{
        fetchCompetence()
    },[])


  return (
    <div>
    <h1 className=' text-3xl font-bold text-center m-3'>Compétence</h1>

    <div>
    {competence.map(item =>
        <div className='flex justify-between align-center'>
            <p>{item.skills}</p>
            <p>{item.id}</p>
            {/* <button onClick={()=> {handleDelete(item._id)}} className='btn btn-secondary my-1'>Delete</button> */}

        </div>
    )}
    </div>
    </div>
  )
  }
