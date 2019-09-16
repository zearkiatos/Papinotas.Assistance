import React from 'react';
import './styles/List.css';
import SearchList from '../components/SearchStudent';
import AssistanceList from '../components/AssistanceList';
class List extends React.Component{
    render(){
        return (
            <div>
                <SearchList />
                <AssistanceList />
            </div>
        );
    }
}

export default List;