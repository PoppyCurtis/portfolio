import React, { Component } from 'react';
import './Skills.css';

class Skills extends Component {
    render() {
        return (
            <div className="skills">
                <h3>Skills</h3>
                <h2>Work Skills and Methodologies</h2>
                <div className="row">
                    <Icons myIcon={iconsObj[2].icon} myTitle={iconsObj[2].name} />
                    <Icons myIcon={iconsObj[1].icon} myTitle={iconsObj[1].name} />
                    <Icons myIcon={iconsObj[0].icon} myTitle={iconsObj[0].name} />
                    <Icons myIcon={iconsObj[3].icon} myTitle={iconsObj[3].name} />
                    <Icons myIcon={iconsObj[4].icon} myTitle={iconsObj[4].name} />
                </div>
            </div>
        );
    }
}

const iconsObj = [
    {
        icon: <i class="fab fa-js-square"></i>,
        name: 'JavaScript',
    },
    {
        icon: <i class="fab fa-css3-alt"></i>,
        name: 'CSS',
    },
    {
        icon: <i class="fab fa-css3-alt"></i>,
        name: 'HTML5',
    },
    {
        icon: <i class="fab fa-react"></i>,
        name: 'Reactjs',
    },
    {
        icon: <i class="fab fa-node"></i>,
        name: 'node JS',
    },
]
class Icons extends Component {
    render() {
        return (
            <div>
                <span>
                    {this.props.myIcon}
                </span>
                <h4>{this.props.myTitle}</h4>
            </div>
        );
    }
}
export default Skills;