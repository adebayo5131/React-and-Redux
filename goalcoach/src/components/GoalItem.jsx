import React, {Component} from 'react';
/* Connect to redux store to get user who is signed in */
import {connect} from 'react-redux';
import {completeGoalRef, goalRef} from '../firebase';


class GoalItem extends Component{

    completeGoal(){
        /* Add to complete goals on the database */
        /* Remove this goal from the goals reference */

        const {email} = this.props.user;
        const {title , serverKey} = this.props.goal;
        console.log('serverkey', serverKey)

        /* Removing goals by getting gaolRef, the child element of a specific goal and firebase remove meethod. */
        goalRef.child(serverKey).remove();
        console.log('email', email, 'title', title);
     /* Push to firebase database */
     completeGoalRef.push({email, title});

    }
    render(){

        const {email, title} = this.props.goal
        return(
            <div style ={{margin: '5px'}}>
            <strong>{title}</strong>
            <span style={{marginRight: '5px'}}> submitted by <em>{email}</em></span>
            <button 
            className="btn btn-sm btn-success"
            onClick={()=> this.completeGoal()}
            >
             Complete
            </button>
            
            </div>
        )
    }
}

function mapStateToProps(state){

    const {user} = state;

    return{
        user
    }
}

export default connect(mapStateToProps, null)  (GoalItem);