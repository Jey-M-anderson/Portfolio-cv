import React from 'react'
import AdminContact from '../composant/admin/AdminContact'
import AdminCompetence from '../composant/admin/AdminCompetence'

export default function Admin() {
  return (
   
    <div>

        <ul class="flex flex-row justify-around align-bottom">
            <li>
            <AdminContact/>,
            </li>
            <li>
            <AdminCompetence/>
            </li>
        </ul>

    </div>
    
  )
}
