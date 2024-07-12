import { useState } from "react";
import BirthdayPerson from "./BirthdayPerson";
import Button from "./Button";
export default function BirthdayTemplate({data}){
    let [value, setValue] =  useState(data)

    const clearData = ()=>{
        setValue([])
    }

    return(
        <main className="main">
        <h1 className="heading">
            {value.length} Birthdays Today
        </h1>
        <div>
            {value.map((ele)=>(
                <BirthdayPerson data={{...ele}} key={ele.id}/>
            ))}
            {/* <BirthdayPerson data={...ele}/> */}
        </div>
        <Button reset={clearData} />

        </main>
    )

}