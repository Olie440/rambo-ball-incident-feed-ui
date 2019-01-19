import { Component } from 'react';
import { connect } from 'react-redux';

import styles from '~/styles/index.scss';
import getGameData from '~/redux/actions/get-game-data';
import Incident from '~/components/incident/incident.component';
import PaginatedList from '~/components/paginated-list/paginated-list.component';

export class IndexPage extends Component {

    // NextJS Lifecycle method that only runs on the server
    static async getInitialProps({ reduxStore, query }) {
        if (query.id) {
            const { dispatch, getState } = reduxStore;
            const getGameDataAction = getGameData(dispatch, getState);
            await getGameDataAction(query.id);
        }

        return {};
    }

    render() {
        const listClassNames = {
            controls: {
                container: styles.pageControls
            } 
        };

        return (
            <div className={styles.indexPage}>
                <PaginatedList 
                    classNames={listClassNames}
                    component={Incident} 
                    data={this.props.game.incidents} 
                    pageSize={4} />
            </div>
        );
    }
}

export function mapStateToProps({ game }) {
    return { game };
}

export default connect(mapStateToProps)(IndexPage);
