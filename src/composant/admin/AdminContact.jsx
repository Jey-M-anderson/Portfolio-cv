import React from 'react'
import { useState, useEffect } from 'react'
export default function AdminContact() {
    const [nom, setNom] = useState("")
    const [prenom, setPrenom] = useState("")
    const [tel, setTel] = useState("")
    const [email, setEmail] = useState("")
    const [adresse, setAdresse] = useState("")

    async function fetchContact() {
        const response = await fetch('http://localhost:3333/contact');
            const data = await response.json();
            console.log(data);
            console.log(data[0].name);
            setNom(data[0].name);
            setPrenom(data[0].lastname);
           setTel(data[0].tel);
           setEmail(data[0].email);
           setAdresse(data[0].adresse);

    }
    
    useEffect(() => {
        fetchContact();
    }, []);

    function handleSubmit(e) {
        e.preventDefault();
        fetch('http://localhost:3333/contact', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ name: nom, lastname: prenom, tel, email, adresse }),
        })
        .then((response) => response.json())
        .then((data) => {
            console.log('Success:', data);
        })
        .catch((error) => {
            console.error('Error:', error);
        });
    }
  return (
  
  <form onSubmit={handleSubmit} > 
    <div>
      <h1>Contact</h1>
        <label htmlFor="tel">Tel</label>
        <input type="text" placeholder='Taper votre Tel' value={tel}
         className='border-2 border-[#6E9289]' 
        onChange={(e) => setTel(e.target.value)} />
    </div>
    <div>
        <label htmlFor="email">Email</label>
        <input type="text" placeholder='Taper votre Email' value={email}
         className='border-2 border-[#6E9289]' 
        onChange={(e) => setEmail(e.target.value)} />
    </div>
    <div>
        <label htmlFor="adress">Adresse</label>
        <input type="text" placeholder='Taper votre Adresse' value={adresse}
         className='border-2 border-[#6E9289]' 
        onChange={(e) => setAdresse(e.target.value)} />
    </div>
    <button type="submit" className='bg-[#9AE1D3] border-2 border-[#6E9289] rounded-xl text-black font-[LeagueSpartan] hover:bg-[#6E9289] hover:text-white'>Submit</button>
  </form>
 
  )
}