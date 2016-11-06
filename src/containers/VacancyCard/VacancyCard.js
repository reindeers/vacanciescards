import React, { PropTypes, Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux'
import SelectUser from '../../components/SelectUser/SelectUser';
import VacancyItem from '../../components/VacancyItem/VacancyItem';
import * as selectActions from '../../actions/SelectActions'
import * as vacancyActions from '../../actions/VacancyActions'

import './VacancyCard.css';

class VacancyCard extends Component {
    handleSubmit = (e) => {
        e.preventDefault();
        const id = (this.props.params.id === 'create') ? this.props.vacancies.vacancies.length : this.props.params.id;
        const { vacancies, vacancyActions } = this.props;
        let form = this.refs.form;
        let changedData = {
            id,
            title: form.title.value,
            description: form.description.value
            //assignees: form.assignees.value
        }
        const { saveChanges } = vacancyActions;
        saveChanges(changedData, vacancies.vacancies, id);
    }

    render() {
        const self = this;
        const paramsId = this.props.params.id;
        const { vacancies, namesForSelect, params, location } = this.props;
        const {changeSelectValue} = this.props.selectActions;

        function renderEditCard() {
            const id = (paramsId === 'create') ? vacancies.vacancies.length : paramsId;
            self.v = vacancies.vacancies[id] || '';
            const selectedValue =  (paramsId === 'create') ? 0 : namesForSelect.names[self.v.assignees[0]].id;

            return (
                <form ref="form" className="vacancy-card__form">
                    <input
                        defaultValue={self.v.title}
                        name="title"
                        className="block"
                    />
                    <SelectUser
                        names = {namesForSelect.names}
                        fetching={namesForSelect.fetching}
                        isGetNames={namesForSelect.isGetNames}
                        changeSelectValue = { changeSelectValue}
                        selectedValue={Number(location.query.assignee) || selectedValue}
                        url={location.pathname}
                        className="block"
                    />
                    <textarea
                        defaultValue={self.v.description}
                        name="description"
                        className="block"
                    />
                    <button onClick={self.handleSubmit} className="block">Сохранить</button>
                </form>
            )
        }

        function renderWatchCard() {
            let v = vacancies.vacancies[paramsId] || '';
            return (
                <div className="vacancy-card__form">
                    <h1 className="block">{v.title}</h1>
                    {v.assignees.map(function(a, i) {
                        return (<p key={i} className="block">{namesForSelect.names[a-1].name}</p>)
                    })}
                    <p className="block">{v.description}</p>
                </div>
            )
        }

        if (vacancies && vacancies.isGetVacancies) {
            return ( //обработка ошибок
                <div>
                    {(paramsId === 'create' || params.action === 'edit') ? renderEditCard() : renderWatchCard()}
                </div>
            )
        } else return (<div></div>);
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


export default connect(mapStateToProps, mapDispatchToProps)(VacancyCard);
