import React from 'react';
import {Link} from 'react-router-dom';
import logoPapinotas from '../assests/images/logoMini.png';
import './styles/Navbar.css';

class Navbar extends React.Component{
    render(){
        return (
                <header className="header">
                    <div>
                        <Link to="/"><img src={logoPapinotas} alt="Papinotas"/></Link>
                    </div>

                    <div>
                        <h1>
                            apinotas Assistance
                        </h1>
                    </div>

                </header>

        );
    }
}

export default Navbar;