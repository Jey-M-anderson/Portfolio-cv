import React, { useEffect, useState } from 'react'
import { MdAutoDelete } from "react-icons/md";
import { GiHoleLadder } from "react-icons/gi";
import { MdDataSaverOn } from "react-icons/md";
import { TbEyeCancel } from "react-icons/tb";



export default function AdminCompetence() {
    const [competence, setCompetence] = useState([])
    const [skills,setSkills] = useState([])
    const [isAdd,setIsAdd] = useState([])
    async function fetchCompetence(){
        const response = await fetch ('http://localhost:3333/competence')
        const data = await response.json()
        console.log(data);
        setCompetence(data)
    }

    useEffect(()=>{
        fetchCompetence()
    },[])

    async function handleDelete(id){
        console.log(id);
        const response = await fetch (`http://localhost:3333/competence/${id}`,{
            method:'DELETE'
        })

        if (response.ok) {
            const data = await response.json()
            console.log(data);
            fetchCompetence()
        }
    }
    function handleSave(){
        console.log(skills);
    }
    function handleCancel(){
        setIsAdd(false)

    }
    function addSkill(){
        setIsAdd(true)
    }
    
  return (
    <div>
        <h1>Competence</h1>
        <button onClick={addSkill} className='w-16'><GiHoleLadder color='blue' size={25}/></button>
        {isAdd && <div className='flex gap-2'>
        <input
         placeholder='Ajouter une nouvelle competence'
         className="input input-bordered input-primary w-full"
        type="text" 
        onChange={(e)=>setSkills(e.target.value)} />
        <button onClick={handleSave}>
            <MdDataSaverOn color='blue' size={25}/>
        </button>
        <button onClick={()=> setIsAdd(false)}>
            <TbEyeCancel color='blue' size={25}/>
        </button>
        </div>}
        {competence.map(item =>
            <div className='flex justify-between align-center'>
                <p>{item.skills}</p>
                <p>{item.id}</p>
                <button onClick={()=>{handleDelete(item._id)}} className='btn my-1'><MdAutoDelete color='blue' size={25}/>
                </button>

            </div>
        )}
    </div>
  )
}
