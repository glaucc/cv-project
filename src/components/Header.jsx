import React from "react";

export default function Header() {
    const [formData, setFormData] = React.useState({
        "name": "",
        "email": "",
        "phoneNum": "+",
        "schoolName": "",
        "speciality": "",
        "startingYear": "",
        "endingYear": "",
        "currentStudent": false
    })

    function handleChange(event) {
        const {name, value, type, checked} = event.target
        setFormData(prevFormData => ({
            ...prevFormData,
            [name] : type === "checkbox" ? checked : value
        }))
    }

    function handleSubmit(event) {
        event.preventDefault()
    }

    return (
        <div>
            <form className="form" onSubmit={handleSubmit}>
                <input>
                    type="text"
                    placeholder="Your Name"
                    className = "form--input"
                    name="name"
                    onChange={handleChange}
                    value={formData.name}
                </input>
                <input
                    type="email"
                    placeholder="Your Email"
                    className="form--input"
                    name="email"
                    onChange={handleChange}
                    value={formData.email}
                >
                </input>
                <input
                    type="tel"
                    placeholder="Your Phone"
                    className="form--input"
                    name="phoneNum"
                    onChange={handleChange}
                    value={formData.phoneNum}
                >
                    
                </input>
                <input
                    type="text"
                    placeholder="Name of Your School"
                    className="form--input"
                    name="schoolName"
                    onChange={handleChange}
                    value={formData.schoolName}
                >
                </input>
                <input
                    type="text"
                    placeholder="Your Speciality"
                    className="form--input"
                    name="speciality"
                    onChange={handleChange}
                    value={formData.speciality}
                >
                    
                </input>
                <input 
                    type="number"
                    min="1900"
                    max="2023"
                    step="1"
                    onChange={handleChange}
                    value={formData.startingYear}
                >
                </input>
                <input>
                    
                </input>
                <input>
                    
                </input>
            </form>
        </div>
    )
}