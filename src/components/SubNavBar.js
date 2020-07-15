import React from 'react';

import styles from './SubNavBar.module.css';

class SubNavBar extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
        };
    }

    render() {
        return (
            <div className={styles.subnav}>
                {this.props.children}
            </div>
        );
    }
}

export default SubNavBar;