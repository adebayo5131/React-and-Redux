import *as firebase from 'firebase';

const config = {
    apiKey: "Your apikey goes here",
    authDomain: "Your domain",
    databaseURL: "Your database URL",
    projectId: "Your project name",
    storageBucket: "",
    messagingSenderId: "sender ID"
  };

 export const firebaseApp = firebase.initializeApp(config)
 export const goalRef = firebase.database().ref('goals');
 export const completeGoalRef = firebase.database().ref('completeGoals');