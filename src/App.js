import './App.css';

import React from 'react';
import ReactDOM from 'react-dom/client';

import Hero from './components/HeroComponent';
import Skillset from './components/SkillsetComponent';
import Education from './components/EducationComponent';

class App extends React.Component {
    render() {
        return (
            <>
                <Hero />
                <Education />
                <Skillset />
            </>
        );
    }
}

export default App;
