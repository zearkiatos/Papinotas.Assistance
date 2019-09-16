import React from 'react';
import './styles/Course.css';
import {graphql} from 'react-apollo';
import gql from 'graphql-tag';
import logoPapinotas from '../assests/images/logoMini.png';
const courseList = ({data:{
    loading, error, courses
}})=>{
    if(loading)
        return <p>Loading...</p>;
    console.log(courses);
    return <div className="container">{
        courses.map(c=><div className="course">{c.courseLetter}</div>)
    }</div>;
};

const CoursesWithData = graphql(gql`{
    courses{
        id
        courseId
        courseLetter
    }
}`)(courseList);
class Course extends React.Component{
    render(){
        return (
            <div>
                <header className="header">
                    <div>
                        <img src={logoPapinotas} alt="Papinotas"/>
                    </div>

                    <div>
                        <h1>
                            apinotas Assistance
                        </h1>
                    </div>
 
                </header>
                <div>
                    <h1>Courses: </h1>
                </div>
                <section className="courseList">
                    <CoursesWithData />
                </section>
            </div>
        );
    }
}

export default Course;