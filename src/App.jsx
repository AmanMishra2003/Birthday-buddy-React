import { useState } from 'react'
import BirthdayTemplate from './BirthdayTemplate'
import './App.css'
import './BirthdayTemplate.css'

const birthdayData=[
  {age: 29, id: 1, image: "https://www.course-api.com/images/people/person-1.jpeg",name:"Bertie Yates"},
  {age: 32, id: 2, image:"https://www.course-api.com/images/people/person-2.jpeg",name:"Hester Hogan" },
  {age: 32, id: 3, image:"https://www.course-api.com/images/people/person-3.jpeg",name:"Larry Little"},
  {age: 32, id: 4, image:"https://www.course-api.com/images/people/person-4.jpeg",name:"Sean Walsh" },
  {age: 29, id: 5, image: "https://www.course-api.com/images/people/person-5.jpeg",name:"Lola Gardner"},
]

function App() {
  return (
    <>
    <BirthdayTemplate data={birthdayData}/>
    </>
  )
}

export default App
