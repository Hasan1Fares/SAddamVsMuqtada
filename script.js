// Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyCviH2QwpetbwXHNHp_lpPRoCVwL7I2X94",
    authDomain: "saddamvsmuqtada.firebaseapp.com",
    databaseURL: "https://saddamvsmuqtada-default-rtdb.firebaseio.com/",
    projectId: "saddamvsmuqtada",
    storageBucket: "saddamvsmuqtada.appspot.com",
    messagingSenderId: "166377763076",
    appId: "1:166377763076:web:ec1b5b171b9160c1832051"
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
