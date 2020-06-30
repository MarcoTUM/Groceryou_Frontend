import React from 'react';
import styles from './DeliverView.module.css'

class DeliverView extends React.Component {

    render() {
        return (
            <main>
                <div class="content" className={styles.content}>
                    <div className={styles.itemList}>
                        <h2 className={styles.title}>Item List</h2>
                    </div>
                    <div className={styles.replacement}>
                        <h2 className={styles.title}>Replacement</h2>
                    </div>
                </div>
            </main>
        );
    }
}

export default DeliverView;
