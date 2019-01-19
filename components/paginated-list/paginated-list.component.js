import React from 'react';

export default class PaginatedList extends React.Component {
    state = {
        currentPage: 1
    }

    render() {
        const { component: Component, classNames = {} } = this.props;
        const { container, children, controls = {} } = classNames;
        const { currentPage } = this.state;

        const elements = this.currentPageData.map((props) => (
            <Component {...props} key={props.id} className={children} />
        ));

        return (
            <div className={container}>
                <div className={controls.container}>
                    <button
                        className={controls.leftButton}
                        disabled={(currentPage === 1)}
                        onClick={this.previousPage}>
                        &lt;
                    </button>
                    <span className={controls.pageText}>
                        Page {currentPage} of {this.totalPages}
                    </span>
                    <button
                        className={controls.rightButton}
                        disabled={(currentPage === this.totalPages)}
                        onClick={this.nextPage}>
                        &gt;
                    </button>
                </div>
                {elements}
            </div>
        )
    }

    get currentPageData() {
        const { currentPage } = this.state;
        const { pageSize = 20, data = [] } = this.props;
        const pageStart = (currentPage - 1) * pageSize;

        return data.slice(pageStart, pageStart + pageSize);
    }

    get totalPages() {
        const { pageSize = 20, data = [] } = this.props;
        return Math.ceil(data.length / pageSize);
    }

    nextPage = () =>  {
        this.setState((state) => ({ 
            currentPage: state.currentPage + 1
        }));
    }

    previousPage = () => {
        this.setState((state) => ({ 
            currentPage: state.currentPage - 1 
        }));
    }
}