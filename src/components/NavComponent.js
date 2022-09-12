import React from 'react';
import ReactDOM from 'react-dom/client';

class Nav extends React.Component {
    render() {
        return (
            <div className="dropdown dropdown-right fixed z-50">
                <label tabindex="0" className="btn btn-square btn-active m-5">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="inline-block w-6 h-6 stroke-current"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"></path></svg>
                </label>
                <ul tabindex="0" className="dropdown-content menu p-2 mt-4 shadow bg-base-100 rounded-box w-52">
                    <li><a>Portfolio</a></li>
                    <li><a>Connect</a></li>
                </ul>
            </div>
        );
    }
}

export default Nav;