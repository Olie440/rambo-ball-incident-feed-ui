import { Component } from 'react';
import { connect } from 'react-redux';

import styles from '~/styles/index.scss';
import getGameData from '~/redux/actions/get-game-data';

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
            <h1 className={styles.indexPage}>こんにちは世界！</h1>
        );
    }
}

export default connect()(IndexPage);
