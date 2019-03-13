import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Header from './Header/Hero';
import AboutMe from './AboutMe/AboutMe';
import WorkSamples from './WorkSamples/WorkSamples';
import Skills from './AboutMe/Skills/Skills';
import Footer from './Footer/Footer';
import SideDrawer from './getNavBar/SideDrawer/SideDrawer';
import MenuDrawerToggleButton from './getNavBar/DrawerToggleButton';
import * as serviceWorker from './serviceWorker';


class App extends Component {
    state = {
        SideDrawerOpen: false
    };

    drawerToggleClickHandler = () => {
        this.setState((prevState) => {
            return { SideDrawerOpen: !prevState.SideDrawerOpen };
        });
    };

    exitHandler = () => {
        this.setState({ SideDrawerOpen: false })
    };

    render() {
        let sideDrawer;
        let isSideBarVisible = this.state.SideDrawerOpen

        if (isSideBarVisible) {
            sideDrawer = <SideDrawer />

        }
        else {
            
        }


        return (
            <div style={{ height: '100%' }}>
                {sideDrawer}
                <Header drawerClickHandler={this.drawerToggleClickHandler} ></Header>
                <AboutMe button="Find Out More"></AboutMe>
                <Skills title="Work Samples" />
                <WorkSamples />
               <Footer title="Contact"></Footer>
            </div>
        );
    }
}

ReactDOM.render(<App />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();

