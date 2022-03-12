import React from "react";

const AddRoute = () => {

    const handleSubmit = (event) => {
        event.preventDefault();
        alert(event.target.value)
    }

    return(
    <form onSubmit={handleSubmit}>
        <div>
            <input type="text" name="grade" placeholder="V0"/>
            <label>Grade</label>
        </div>
        <div>
            <input type="text" name="color"/>
            <label>Color</label>
        </div>        
        <div>
            <input type="text" name="area"/>
            <label>Area</label>
        </div>        
        <div>
            <input type="text" name="description"/>
            <label>Description</label>
        </div>
        <div>
            <input type="text" name="setter"/>
            <label>Setter</label>
        </div>

        <button>Submit me</button>
    </form>
    );
}

export default AddRoute