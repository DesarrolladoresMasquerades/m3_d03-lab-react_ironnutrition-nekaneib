import { useState } from "react"
import {Input} from "antd"


export default function SearchBar(props){

    const [searchData, setFormData] = useState("")

    
    function handleDataChange(event){
        setFormData(event.target.value)
       props.checkCoincidences(event.target.value)
    }


    return(
        <div>
        <h1>Search Food</h1>
            <form >
                <label>Search</label>
                <Input name = "search" value={searchData} type="text" onChange={handleDataChange} />
                
                <button type="submit">Search</button>
            </form>
        </div>

    )
}