export default function Filter({value, onChange}) {
    return (
       <>
         <label htmlFor="filter">
            <p>Find contacts by name</p>
            <input type="text" value={value} onChange={onChange}/>
         </label>
       </>
       
    )
}