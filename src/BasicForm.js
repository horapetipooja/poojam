import React, {useState} from 'react';

function BasicForm() {
    const [formData,setFormData]=
    useState({
        name:"",
        description:"",
        country:"",
        termsAccepted:false,
        gender:"",
    });

    const handleChange=(e)=>{
        const{name,value,type,checked}=e.target;
        setFormData((prev)=>({
            ...prev,
            [name]:type=="checkbox"?checked:value,
        }));
    };
    const handleSubmit=(e)=>{
        e.preventDefault();
        console.log("Form Submitted:",formData);
        alert("Form submitted! Check console");
    };

    return(
        <form onSubmit={handleSubmit}
        style={{maxWidth:"400px",margin:"20px auto"}}>
            <h2>Basic Form</h2>

            <label>Name:</label>
            <input type="text"
            name="name"
            placeholder="Name"
            value={formData.name}
            onChange={handleChange}
            required/>
            <br/><br/>

            <label>description:</label>
            <textarea
            name="description"
            placeholder="Description"
            value={formData.description}
            onChange={handleChange}
            />

            <br/><br/>

            <label>country:</label>
            <select name="country"
            
            
            value={formData.country}
            onChange={handleChange} required>
                <option value="in">india</option>
                <option value="us">USA</option>
            </select>

            <br/><br/>

            <label>
                <input type="checkbox"
                name="termsAccepted"

                checked={formData.termsAccepted}
                onChange={handleChange}/>
                Accept Terms
            </label>

            <br/><br/>

            <label>gender:</label><br/>
            <label>
                <input type="radio"
            name="gender"
            value="male"
            checked={formData.gender==="male"}
            onChange={handleChange}/>
        Male
        </label>
        <label style={{marginLeft:"10px"}}>
             <input type="radio"
            name="gender"
            value="female"
            checked={formData.gender==="female"}
            onChange={handleChange}/>
            Female
        </label>

        <br/><br/>

        <button type="submit">Submit</button>
        </form>
        


    );
}

export default BasicForm;