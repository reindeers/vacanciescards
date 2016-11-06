import React, { Component } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { Link } from 'react-router'

import VacancyList from '../../components/VacancyList/VacancyList';
import SelectUser from '../../components/SelectUser/SelectUser';
import * as selectActions from '../../actions/SelectActions'
import * as vacancyActions from '../../actions/VacancyActions'

import './MainContainer.css';

class MainContainer extends Component {

    componentWillMount () {
        const { getNames } = this.props.selectActions;
        const { getVacancies } = this.props.vacancyActions;
        getNames();
        getVacancies();
    }

    render() {
        const { vacancies, namesForSelect, location } = this.props;
        const {changeSelectValue} = this.props.selectActions;
        const filter = Number(location.query.assignee) || namesForSelect.selectUserName;

        return (
            <div>
                <SelectUser
                    names = {namesForSelect.names}
                    fetching = {namesForSelect.fetching}
                    isGetNames = {namesForSelect.isGetNames}
                    changeSelectValue = { changeSelectValue}
                    selectedValue = {filter}
                    url = {location.pathname}
                />
                <VacancyList
                    vacancies = {vacancies.vacancies}
                    isGetVacancies = {vacancies.isGetVacancies}
                    selectUserName = {filter}
                />
                <Link to="/vacancies/create"><button>Создать</button></Link>
                {this.props.children}
            </div>
        )
    }
}

function mapStateToProps (state) {
    return {
        vacancies: state.vacancies,
        namesForSelect: state.namesForSelect
    }
}

function mapDispatchToProps(dispatch) {
    return {
        selectActions: bindActionCreators(selectActions, dispatch),
        vacancyActions: bindActionCreators(vacancyActions, dispatch)
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(MainContainer);
