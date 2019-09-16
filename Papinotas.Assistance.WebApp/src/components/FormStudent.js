import React from 'react';
import './styles/FormStudent.css';


class SearchStudent extends React.Component{

    handleChange = e=>{
        console.log({value: e.target.value});
    }

    handleClick = e=>{
        console.log({name: "Click a "+e.target.name});
    }

    render(){
        return (
            <div>
                <div>
                    <h1>{this.props.formTitle} </h1>
                </div>
                <form name="frmStudent" id="frmStudent">
                    <input type="text" onChange={this.handleChange} class="input" name="name" id="name" placeholder="Name"/>
                    <input type="text" onChange={this.handleChange} class="input" name="lastName" id="lastName" placeholder="Last Name"/>
                    <input type="text" onChange={this.handleChange} class="input" name="rut" id="rut" placeholder="Rut"/>
                    <select class="input" onChange={this.handleChange} name="course" id="course">
                        <option value="0">Select Course</option>
                        <option value="1">Course 1</option>
                        <option value="2">Course 2</option>
                        <option value="3">Course 3</option>
                    </select>
                </form>
                <div class="container">
                    <div>
                        <button type="button" onClick={this.handleClick} id="save" name="save" className="buttonSave">Save</button>
                    </div>
                    <div>
                        <button type="button" onClick={this.handleClick} id="cancel" name="cancel">Cancel</button>
                    </div>
                </div>

            </div>
        );
    }
}

export default SearchStudent;