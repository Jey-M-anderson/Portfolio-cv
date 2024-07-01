import { useEffect, useState } from 'react'

export default function Contact() {
      // declarer une varaible d état
    const [contact, setContact] = useState()
      // fonction asyncronne pour recuperer les contact 
    async function getContact() {
        const reponse = await fetch('http://localhost:3333/contact')
        const data = await reponse.json()
        //  je recupere le premier et le seul element dans mon tableau data avec l index 0 
        setContact(data[0])
    }
    useEffect(() => {
        // j appelle la fonction dans le hook useEffect une seul fois 
        getContact()
    }, [])

    return (
        <div>
            {/* { je verifie si la variable contact contient des infos  } */}
            {contact &&
                <div>
                    <h2 className=' text-3xl font-bold text-center m-3'>{contact.nom} {contact.prenom}</h2>

                    <h2 className=' text-3xl text-decoration-line: underline ml-5'>Adresse: </h2>
                    <p className=' text-2xl m-5'>-{contact.adresse}</p>

                    <h2 className=' text-3xl text-decoration-line: underline ml-5'>Tel: </h2>
                    <p className=' text-2xl m-5'>-{contact.tel}</p>

                    <h2 className=' text-3xl text-decoration-line: underline ml-5'>Mail : </h2>
                    <p className=' text-2xl m-5'> -{contact.email}</p>
                </div>
            }
        </div>
    )
}
