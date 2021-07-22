import React from 'react';
import { Router } from '@reach/router';
import Overview from './overview/overview';


const Pages = () => {
    return(
        <Router>
            <Overview path="/" />
        </Router>
    )
}
export default Pages;