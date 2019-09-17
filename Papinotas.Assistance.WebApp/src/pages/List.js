import React from 'react';
import './styles/List.css';
import {Link} from 'react-router-dom';
import SearchList from '../components/SearchStudent';
import AssistanceList from '../components/AssistanceList';
class List extends React.Component{
    render(){
        return (
            <div>
                <SearchList />
                <Link to="student/new"><button class="buttonSave"  type="button" name="newStudent" id="newStudent"><i class="fas fa-plus-circle"></i> Add Student </button></Link>
                <AssistanceList />
            </div>
        );
    }
}

export default List;