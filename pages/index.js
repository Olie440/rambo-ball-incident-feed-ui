import { Component } from 'react';
import { connect } from 'react-redux';

import getGameData from '~/redux/actions/get-game-data';
import styles from '~/styles/index.scss';

import IncidentList from '~/components/incident-list/incident-list.component';

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
        return (
            <section className={styles.indexPage}>
                <IncidentList
                    pageSize={4}
                    incidents={this.props.game.incidents} />
            </section>
        );
    }
}

export function mapStateToProps({ game }) {
    return { game };
}

export default connect(mapStateToProps)(IndexPage);
