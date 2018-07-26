import {ADD_REMINDER, DELETE_REMINDER, CLEAR_REMINDERS, ALERT_REMINDERS} from '../constants';

export const addReminder = (text, dueDate) => {

    const action ={
        type:ADD_REMINDER,
        text,
        dueDate
    }

    console.log('action in addReminder', action);
   
    return action;
  
}

export const deleteReminder = (id) => {

    const action ={
        type:DELETE_REMINDER,
        id
        
    }

    console.log('deleting in actions', action);
   
    return action;
}

export const clearReminders = () => {

    return {
        type: CLEAR_REMINDERS
    }
}

export const alert = (dueDate) =>{

    const action ={
        dueDate: ALERT_REMINDERS
    }

    console.log('Due date is here', action)

    return action;

}
