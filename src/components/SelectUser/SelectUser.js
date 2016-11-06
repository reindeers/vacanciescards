import React, { PropTypes, Component } from 'react'
import { browserHistory } from 'react-router'

import * as selectActions from '../../actions/SelectActions'

//import './SelectUser.css';

class SelectUser extends Component {

    handleClick = () => {
        const { changeSelectValue, names, url } = this.props;
        const selectedNameValue = (names[this.refs.select.value-1]);
        if (selectedNameValue) {
            changeSelectValue(selectedNameValue.id);
            browserHistory.push(`${url}?assignee=${selectedNameValue.id}`);
        } else {
            changeSelectValue(0);
            browserHistory.push(`${url}`);
        }
    }


    render() {
        const { names, fetching, isGetNames } = this.props;

        function renderOptions() {
            if (isGetNames) {
                return names.map(function(name, i) {
                    return (
                        <option key={i} value={name.id}>{name.name}</option>
                    )
                })
            }
        };

        return (
            <select
                onChange={this.handleClick}
                value={this.props.selectedValue}
                ref='select'
            >
                <option key='0' value='0'></option>
                { renderOptions() }
            </select>
        )
    }
}

SelectUser.propTypes = {
    names: PropTypes.array.isRequired,
    selectedValue: PropTypes.number.isRequired,
    url: PropTypes.string.isRequired
};

export default SelectUser;
