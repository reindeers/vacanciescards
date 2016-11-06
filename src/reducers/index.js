import { combineReducers } from 'redux'
import vacancies from './vacancies'
import namesForSelect from './namesForSelect'

export default combineReducers({
    vacancies,
    namesForSelect
})
