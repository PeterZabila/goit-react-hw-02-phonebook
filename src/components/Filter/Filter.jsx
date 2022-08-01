import styled from 'styled-components';

export default function Filter({value, onChange}) {
    return (
       <FilterDiv>
         <label htmlFor="filter">
            <p>Find contacts by name</p>
            <input type="text" value={value} onChange={onChange}/>
         </label>
       </FilterDiv>
       
    )
}

const FilterDiv = styled.div`
   padding: 10px;
   width: 300px;
`