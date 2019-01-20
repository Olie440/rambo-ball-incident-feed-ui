import React from 'react';

import styles from './incident-list.style.scss';
import Incident from '~/components/incident/incident.component';
import PaginatedList from '~/components/paginated-list/paginated-list.component';

const listClassNames = {
    container: styles.incidentList,
    controls: {
        container: styles.pageControls,
        leftButton: styles.pageButton,
        rightButton: styles.pageButton
    }
};

export function Header() {
    return (
        <header className={styles.header}>
            <span>Time</span>
            <span>Incident Type</span>
        </header>
    );
}

export default function IncidentList({ incidents, pageSize }) {
    return (
        <PaginatedList
            classNames={listClassNames}
            component={Incident}
            header={Header}
            data={incidents}
            pageSize={pageSize} />
    );
}
