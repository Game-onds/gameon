
  // Your web app's Firebase configuration
  // For Firebase JS SDK v7.20.0 and later, measurementId is optional
  var firebaseConfig = {
    apiKey: "AIzaSyDwbLSlOAwhLvHx8-qwxudAcMgxJqouYHo",
    authDomain: "game-on-baa99.firebaseapp.com",
    projectId: "game-on-baa99",
    storageBucket: "game-on-baa99.appspot.com",
    messagingSenderId: "1095942894371",
    appId: "1:1095942894371:web:ed5f918502013110125296",
    measurementId: "G-YMMGN15EP4"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  const auth =  firebase.auth();

  //signup function
  function signUp(){
    var email = document.getElementById("email");
    var password = document.getElementById("password");

    const promise = auth.createUserWithEmailAndPassword(email.value,password.value);
    //
    promise.catch(e=>alert(e.message));
    alert("SignUp Successfully");
  }

  //signIN function
  function  signIn(){
    var email = document.getElementById("email");
    var password  = document.getElementById("password");
    const promise = auth.signInWithEmailAndPassword(email.value,password.value);
    promise.catch(e=>alert(e.message));
    
  }


  //signOut

  function signOut(){
    auth.signOut();
    alert("Signout Successfully from System");
  }

  //active user to homepage
  firebase.auth().onAuthStateChanged((user)=>{
    if(user){
      var email = user.email;
     alert(" you are the active user now = " + email)
     document.write('<div><p style="" >This site is having secure sign in. you need to tap this button to continue</p><a href="index.html"<button>click here</button></a></div> ')
    }else{
      alert("No Active user Found")
    }
  })
