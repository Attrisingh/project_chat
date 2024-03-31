const firebaseConfig = {
    apiKey: "AIzaSyBIMG0AmGRJLxF9L988tgQiWcsjNeAJJkQ",
    authDomain: "kwitter-e731d.firebaseapp.com",
    databaseURL: "https://kwitter-e731d-default-rtdb.firebaseio.com",
    projectId: "kwitter-e731d",
    storageBucket: "kwitter-e731d.appspot.com",
    messagingSenderId: "264921292173",
    appId: "1:264921292173:web:f830f5d13fa0e01ea771c4",
    measurementId: "G-CS8PBVZX5Q"
  };
  
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  
//ADD YOUR FIREBASE LINKS HERE
username = localStorage.getItem("user_name" );
document.getElementById("user_name").innerHTML = "Welcome " + username + "!";

function addRoom()
{
    room_name = document.getElementById("room_name").value;
    console.log(room_name);
    firebase.database().ref("/").child(room_name).update({
          purpose: "adding room name"
    });

    localStorage.setItem("room_name", room_name);

    window.location = "kwitter_page.html";
}

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
     Room_names = childKey;
    //Start code
    console.log("Room Name - " + Room_names);
    row = "<div class='room_name' id=" + Room_names + " onclick='redirectToRoomName(this.id)' >#" + Room_names + "</div><hr>";
     document.getElementById("output").innerHTML += row;
    //End code
    });});}
getData();

function redirectToRoomName(name)
{
    console.log(name);
    localStorage.setItem("room_name", name);
    window.location = "kwitter_page.html";
}

function logout() 
{
    localStorage.removeItem("user_name");
    localStorage.removeItem("room_name");
     window.location = "index.html";
}