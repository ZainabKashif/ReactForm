import React from "react";
const Reg = () => {

    const [formData, setFormData] = React.useState({
        fullname: "",
        email: "",
        password: "",
        compass: "",
        coarses: "",
        isChecked: true
    })


    function handleChange(event) {
        const { name, value, type, checked } = event.target
        setFormData(prev => {
            return {
                ...prev,
                [name]: type === "checkbox" ? checked : value
            }
        })
    }

    function handleSubmit(event) {
        event.preventDefault()
        console.log(formData)
    }

    return (
        <div className="FormBox">
            <h1>Coarse Registration Form</h1>
            <form onSubmit={handleSubmit}>
                <label htmlFor="fullname">Enter your fullname: </label>
                <input
                    type="text"
                    placeholder="Fullname*"
                    id="fullname"
                    name="fullname"
                    onChange={handleChange}
                    value={formData.fullname}
                />
                <br></br>
                <label htmlFor="email">Enter your email: &nbsp;&nbsp;&nbsp;&nbsp;</label>
                <input
                    type="email"
                    placeholder="Email*"
                    id="email"
                    name="email"
                    onChange={handleChange}
                    value={formData.email}
                />
                <br></br>
                <label htmlFor="password">Enter your password: </label>
                <input
                    type="password"
                    placeholder="Password"
                    id="password"
                    name="password"
                    onChange={handleChange}
                    value={formData.password}
                />
                <br></br>
                <label htmlFor="conpass">Confirm password: &nbsp;&nbsp;</label>
                <input
                    type="password"
                    placeholder="Confirm password"
                    id="conpass"
                    name="compass"
                    onChange={handleChange}
                    value={formData.compass}
                />
                <br></br>
                <label htmlFor="coarses">Select your coarse: &nbsp;&nbsp;</label>
                <select
                    name="coarses"
                    onChange={handleChange}
                    value={formData.coarses}
                >
                    <option value="">---Choose---</option>
                    <option value="Graphic Designing">Graphic Designing</option>
                    <option value="Machine Learning">Machine Learning</option>
                    <option value="Cyber Security">Cyber Security</option>
                    <option value="Business Communication">Business Communication</option>
                    <option value="Calligraphy">Calligraphy</option>
                </select>
                <br></br>
                <input
                    type="checkbox"
                    id="isChecked"
                    name="isChecked"
                    onChange={handleChange}
                    value={formData.isChecked}
                />
                <label htmlFor="isChecked">All my given information is correct</label>
                <br></br><br></br>
                <button>Submit</button>
            </form>


        </div>
    )
}
export default Reg;