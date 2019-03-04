import React, { Component } from 'react';
import './Skills.css';

class Skills extends Component {
    render() {
        return (
            <div className="skills" id="skills">
                <h1>Work Skills and Methodologies</h1>
                <div className="row">
                    <Icons myIcon={iconsObj[2].icon} myTitle={iconsObj[2].name} />
                    <Icons myIcon={iconsObj[1].icon} myTitle={iconsObj[1].name} /> 
                    <Icons myIcon={iconsObj[0].icon} myTitle={iconsObj[0].name} />
                </div>
                <br/>
            <div className="row">
                    <Icons myIcon={iconsObj[3].icon} myTitle={iconsObj[3].name} />
                    <Icons myIcon={iconsObj[4].icon} myTitle={iconsObj[4].name} />
                </div>
            </div>
        );
    }
}

const iconsObj = [
    {
        icon: <i className="skilllogo" class="fab fa-js-square"></i>,
        name: 'JavaScript',
    },
    {
        icon: <i className="skilllogo" class="fab fa-css3-alt"></i>,
        name: 'CSS',
    },
    {
        icon: <i className="skilllogo" class="fab fa-html5"></i>,
        name: 'HTML5',
    },
    {
        icon: <i className="skilllogo" class="fab fa-react"></i>,
        name: 'Reactjs',
    },
    {
        icon: <i className="skilllogo" class="fab fa-node"></i>,
        name: 'node JS',
    },
]
class Icons extends Component {
    render() {
        return (
            <div>
                    {this.props.myIcon}
                <h4 className="skillname">{this.props.myTitle}</h4>
            </div>
        );
    }
}
export default Skills;