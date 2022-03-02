import { useState } from "react"
import { Input } from "antd"

export default function AddFoodForm(props){
    const [formData, setFormData] = useState({
        name: "",
        image: "",
        calories: "",
        servings: ""
    })

    function handleDataChange(event){
        const inputName = event.target.name
        let value = event.target.value

        setFormData({...formData, [inputName]: value})
    }

    function handleSubmit(event){
        event.preventDefault()

        props.addFood(formData)

        setFormData({
            name: "",
            image: "",
            calories: "",
            servings: ""
        })
        }  

    return(
        <div>
        <h1>Add Food</h1>
            <form onClick={handleSubmit}>
                <label>Name</label>
                <Input name = "name" value={formData.name} type="text" onChange={handleDataChange} />
                <label>Image</label>
                <Input name = "image" value={formData.image} type="text" onChange={handleDataChange} />
                <label>Calories</label>
                <Input name = "calories" value={formData.calories} type="number" onChange={handleDataChange} />
                <label>Servings</label>
                <Input name = "servings" value={formData.servings} type="number" onChange={handleDataChange} />

                <button type="submit">Add Food</button>
            </form>
        </div>
    )
}