import {combineReducers} from 'redux';
import goals from './reducer_goal'
import user from './reducer_user'
import completeGoals from './reducer_completed_goals'

export default combineReducers({
  user,
  goals,
  completeGoals
})