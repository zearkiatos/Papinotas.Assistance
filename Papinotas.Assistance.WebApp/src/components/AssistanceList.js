import React from 'react';
import './styles/AssistanceList.css';
import '@fortawesome/fontawesome-free/css/all.css';


class AssistanceList extends React.Component{
    render(){
        return (
            <section>
                <ul>
                    <li>
                        <div className="containerGrow">
                            <div className="one">
                            1
                            </div>
                            <div className="two">
                                <input type="checkbox" className="check" />
                            </div>
                            <div className="three">
                                <i className="fas fa-edit edit"></i>
                            </div>
                            <div className="four">
                                <i className="fas fa-trash-alt delete"></i>
                            </div>
                        </div>
                       
                    </li>
                    <li>
                    <div className="containerGrow">
                            <div className="one">
                            2
                            </div>
                            <div className="two">
                                <input type="checkbox" className="check" />
                            </div>
                            <div className="three">
                                <i className="fas fa-edit edit"></i>
                            </div>
                            <div className="four">
                                <i className="fas fa-trash-alt delete"></i>
                            </div>
                        </div>
                    </li>
                    <li>
                    <div className="containerGrow">
                            <div className="one">
                            3
                            </div>
                            <div className="two">
                                <input type="checkbox" className="check" />
                            </div>
                            <div className="three">
                                <i className="fas fa-edit edit"></i>
                            </div>
                            <div className="four">
                                <i className="fas fa-trash-alt delete"></i>
                            </div>
                        </div>
                    </li>
                    <li>
                    <div className="containerGrow">
                            <div className="one">
                            4
                            </div>
                            <div className="two">
                                <input type="checkbox" className="check" />
                            </div>
                            <div className="three">
                                <i className="fas fa-edit edit"></i>
                            </div>
                            <div className="four">
                                <i className="fas fa-trash-alt delete"></i>
                            </div>
                        </div>
                    </li>
                </ul>
            </section>
        );
    }
}

export default AssistanceList;