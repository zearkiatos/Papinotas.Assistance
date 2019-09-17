import React from 'react';
import './styles/Course.css';
import {graphql} from 'react-apollo';
import gql from 'graphql-tag';
import {Link} from 'react-router-dom';
const courseList = ({data:{
    loading, error, courses
}})=>{
    if(loading)
        return <p>Loading...</p>;
    console.log(courses);
    return <Link to="/List"><div className="container">{
        courses.map(c=><div className="course">{c.courseLetter}</div>)
    }</div></Link>;
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