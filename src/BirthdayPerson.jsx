export default function BirthdayPerson({data}){
    return(
        <div className="personCard">
            <img src={data.image} alt="" />
            <div className="personDetails">
                <h3>{data.name}</h3>
                <p>{data.age} years</p>
            </div>
        </div>
    )
}