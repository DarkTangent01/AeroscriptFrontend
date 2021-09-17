import React from 'react'
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import './notfound.css';


const Notfound = () => {

    return (
        <>
            <Helmet>
                <title>
                    404
                </title>
            </Helmet>
            <section className="error-container">
                <span className="four"><span className="screen-reader-text">4</span></span>
                <span className="zero"><span className="screen-reader-text">0</span></span>
                <span className="four"><span className="screen-reader-text">4</span></span>
            </section>
            <p className="zoom-area"><b>Page</b> you are looking for is not available to removed to new location. </p>
            <div className="link-container">
                <Link className="more-link" to='/' >Visit the original website</Link>
            </div>
        </>
    )
}

export default Notfound
