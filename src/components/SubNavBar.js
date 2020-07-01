import React from 'react';

import './SubNavBar.css';

class SubNavBar extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
        };
    }

    render() {
        return (
            <div className="subnav">
                {this.props.children}
            </div>
        );
    }
}

export default SubNavBar;