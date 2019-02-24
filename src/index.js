import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import './index.css';
//import App from './App';
import NavBar from './getNavBar/getNavBar';
import {HashRouter, Route} from 'react-router-dom';
import Header from './Header/Header';
import AboutMe from './AboutMe/AboutMe';
import WorkSamples from './WorkSamples/WorkSamples';
import Skills from './AboutMe/Skills/Skills';
import * as serviceWorker from './serviceWorker';


class App extends Component {
    render() {
        return (
            <HashRouter>
            <div> 
                <NavBar title="Penelope Curtis Web Design"> <Route exact path="#/" component={NavBar}/></NavBar>
                <Header title="Hi, I'm Penelope Curtis" subtitle="Full Stack Developer"button="View Work"><Route exact path="#/home" component={Header}/></Header>
                <AboutMe button="Find Out More"><Route exact path="#/about-me" component={AboutMe}/> </AboutMe>   
                <Skills title="Work Samples"/>  
                <WorkSamples/>
            </div>
          
            </HashRouter>
        );
    }
}

ReactDOM.render(<App />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
