import React from 'react';
import './styles/SearchList.css';


class SearchStudent extends React.Component{
    render(){
        return (
            <div>
                <div>
                    <h1>Lista de Curso {}: </h1>
                </div>
                <input class="searchInput" type="text" placeholder="Search Student"/>
            </div>
        );
    }
}

export default SearchStudent;