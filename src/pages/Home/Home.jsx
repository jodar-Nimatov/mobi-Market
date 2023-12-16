import React from 'react';
import {Link} from "react-router-dom";

function Home(props) {
    return (
        <div>
            Home
            <Link to={'/signup'}>register</Link>
        </div>
    );
}

export default Home;