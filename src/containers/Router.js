import React, { Component, PropTypes } from 'react';
import { Router as ReactRouter, Route, IndexRedirect, IndexRoute } from 'react-router';
import MainContainer from './MainContainer/MainContainer';
import VacancyCard from './VacancyCard/VacancyCard';
import AppContainer from './AppContainer';

export default class Router extends Component {
    static propTypes = {
        history: PropTypes.object.isRequired
    };

    render() {
        const { history } = this.props;

        return (
            <ReactRouter history={history}>
                <Route path="/" component={AppContainer}>
                    <IndexRoute component={MainContainer}/>
                    <IndexRedirect to="/vacancies" />
                    <Route path="/vacancies" component={MainContainer}>
                        <Route path="/vacancies/:id" component={VacancyCard}>
                            <Route path=":action" component={VacancyCard}/>
                        </Route>
                        <Route path="/vacancies/create" component={VacancyCard}/>
                    </Route>
                </Route>

            </ReactRouter>
        );
    }
}
