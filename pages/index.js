import { Component } from 'react';
import { connect } from 'react-redux';

import styles from '~/styles/index.scss';
import getGameData from '~/redux/actions/get-game-data';
import Incident from '~/components/incident/incident.component.js';

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
        const { incidents = [] } = this.props.game;
        return (
            <div className={styles.indexPage}>
                { incidents.map((props) => <Incident {...props} key={props.id} />) }
            </div>
        );
    }
}

export function mapStateToProps({ game }) {
    return { game };
}

export default connect(mapStateToProps)(IndexPage);
