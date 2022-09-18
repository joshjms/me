import React from 'react';
import ReactDOM from 'react-dom/client';

import { Link } from 'react-router-dom';

class Hero extends React.Component {
    render() {
        return (
            <div class="min-h-screen">
                <div className="hero min-h-screen bg-light lg:bg-fixed">
                    <div className="hero-overlay bg-opacity-60"></div>
                    <div className="hero-content text-center text-neutral-content">
                        <div className="max-w-md">
                            <p className="mb-5">Hello, I am</p>
                            <h1 className="mb-5 text-5xl lg:text-7xl font-bold">Joshua</h1>
                            <p className="mb-5">A very ordinary Indonesian living in Singapore</p>
                            <div className="flex btn-group m-auto align-center justify-center gap-1">
                                <a href="#education"><button className="btn">Check my Profile!</button></a>
                                <Link to="/blog"><button className="btn btn-primary">Check my Blog!<svg className="ml-3" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#ffffff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><g fill="none" fill-rule="evenodd"><path d="M18 14v5a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8c0-1.1.9-2 2-2h5M15 3h6v6M10 14L20.2 3.8"/></g></svg></button></Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Hero;