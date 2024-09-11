// Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyCidxdgyfoeCWDmMyULnOO-zNCYGK9F_jA",
    authDomain: "click-b5425.firebaseapp.com",
    databaseURL: "https://click-b5425-default-rtdb.firebaseio.com/",
    projectId: "click-b5425",
    storageBucket: "click-b5425.appspot.com",
    messagingSenderId: "1050718593602",
    appId: "1:1050718593602:web:f34b928f83b88c6c15c3db"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
const database = firebase.database();

function updateCount(army) {
    const countRef = database.ref(army);
    countRef.transaction(currentValue => (currentValue || 0) + 1);
}

function updateDisplay() {
    database.ref('saddamArmy').on('value', snapshot => {
        document.getElementById('saddamCount').innerText = snapshot.val() || 0;
    });
    database.ref('muqtadaArmy').on('value', snapshot => {
        document.getElementById('muqtadaCount').innerText = snapshot.val() || 0;
    });
}

document.getElementById('saddamArmy').addEventListener('click', () => updateCount('saddamArmy'));
document.getElementById('muqtadaArmy').addEventListener('click', () => updateCount('muqtadaArmy'));

updateDisplay();
