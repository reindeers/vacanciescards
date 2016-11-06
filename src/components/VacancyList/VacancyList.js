import React, { PropTypes, Component } from 'react';
import VacancyItem from '../VacancyItem/VacancyItem';

import './VacancyList.css';

class VacancyList extends Component {
    render() {
        const { vacancies, fetching, isGetVacancies, selectUserName } = this.props;

        function renderOptions() {

            let isInAssigneesArray = function (v, name) {
                return v.assignees.indexOf(name) !== -1;
            }
            
            if (isGetVacancies) {
                let data = [];
                if (selectUserName) {
                    data = vacancies.filter(function(v) {
                        return isInAssigneesArray(v, selectUserName);
                    })
                } else {data = vacancies};

                return data.map(function(vacancy, i) {
                    return (
                        <VacancyItem
                            key={i}
                            title={vacancy.title}
                            description={vacancy.description}
                        />
                    )
                })
            }
        };

        return (
            <div>{ renderOptions() }</div>
        )
    }
}

VacancyList.propTypes = {
    vacancies: PropTypes.array.isRequired,
    selectUserName: PropTypes.number.isRequired
};

export default VacancyList;
