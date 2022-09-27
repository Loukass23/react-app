import { useState } from 'react'

function Form() {
    const [name, setName] = useState("John")
    const handleSubmit = (e) => {
        e.preventDefault()
        console.log("test")
    }
    const handleChange = (e) => {

        setName(e.target.value)
    }
    console.log(name)
    return (
        <form onSubmit={handleSubmit}>
            <label>
                Name:
                <input type="text"
                    value={name}
                    onChange={handleChange}
                />
            </label>
            <input type="submit" value="Submit" />
        </form>
    )
}

export default Form