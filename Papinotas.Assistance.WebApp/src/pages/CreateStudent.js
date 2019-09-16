import React from 'react';
import './styles/FormStudent.css';
import SearchList from '../components/SearchStudent';
import AssistanceList from '../components/AssistanceList';
import FormStudent from '../components/FormStudent';
class CreateStudent extends React.Component{
    render(){
        return (
            <div>
                <FormStudent formTitle="Create Student" />
            </div>

        );
    }
}

export default CreateStudent;