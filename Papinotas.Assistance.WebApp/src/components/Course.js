import React from 'react';
import './styles/Course.css';
import logoPapinotas from '../assests/images/logoMini.png'


class Course extends React.Component{
    render(){
        return (
            <div>
                <header class="header">
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
                <section class="courseList">
                    <div class="container">
                        <div class="course">
                            Course 1
                        </div>
                        <div class="course">
                            Course 1
                        </div >
                        <div class="course">
                            Course 1
                        </div>
                    </div>
                </section>
            </div>
        );
    }
}

export default Course;