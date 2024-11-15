import {
  auth,
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  sendEmailVerification,
  signOut,
  sendPasswordResetEmail,
  GoogleAuthProvider,
  signInWithPopup,
  provider 
} from "./firebase.js";



// onAuthStateChanged(auth, (user) => {
//   if (user) {
//     console.log("existing user", user);
//   } else {
//     console.log("user not exists");
//   }
// });

// signup
let signUp = () => {
  let username = document.getElementById("username").value;
  let email = document.getElementById("email").value;  
  let phNum = document.getElementById("phNum").value;  
  // let gender = document.getElementById("").value;  
  let password = document.getElementById("password").value;
  let confirmPass = document.getElementById("confirmPass").value;

  let userData = { username, phNum, email};
  console.log(userData)
  
  createUserWithEmailAndPassword(auth, email, password)
    .then((res) => {
      console.log("new user, Account created successfully!", res.user);
      // alert("Account created successfully!")

      sendEmailVerification(auth.currentUser)
      .then(() => {
       alert("Email verification sent!")
      });
      window.location.href = "./dashboard.html";
      userProfile()
    })
    .catch((error) => {
      console.log("error", error.code);
    });
    if(password !== confirmPass){
      alert("Passwords should be identical")
    }
};
if (
  window.location.pathname ==
  "/homework%20tasks/login-signup_firbase-intro/index.html"
) {
  let signUpBtn = document.getElementById("signUpBtn");
  signUpBtn.addEventListener("click", signUp);
}

// login
let login_signIn = () => {
  event.preventDefault();
  let email = document.getElementById("email").value;
  let password = document.getElementById("password").value;
  signInWithEmailAndPassword(auth, email, password)
    .then((res) => {
      // alert("Login Successful!")
      console.log("welcome back user, Login Successful!", res.user);

      window.location.href = "./dashboard.html";
      userProfile()
    })
    .catch((error) => {
      console.log("Invalid Email or Password");
    });
};

if (
  window.location.pathname ==
  "/homework%20tasks/login-signup_firbase-intro/login.html"
) {
  let login_signInBtn = document.getElementById("login_signInBtn");
  login_signInBtn.addEventListener("click", login_signIn);
}

// google signin
let googleSignIn = () => {
  signInWithPopup(auth, provider)
  .then((result) => {
  
    const credential = GoogleAuthProvider.credentialFromResult(result);
    const token = credential.accessToken;
    const user = result.user;
    console.log(user);

   userProfile()
  }).catch((error) => {
    // console.log("error", error.code)
    const email = error.customData.email;
    const credential = GoogleAuthProvider.credentialFromError(error);
    console.log(email, credential);
  });
}


if (
  window.location.pathname ==
 '/homework%20tasks/login-signup_firbase-intro/index.html'
) {
  let googleSignInBtn = document.getElementById("googleSignInBtn")
  googleSignInBtn.addEventListener('click', googleSignIn)
}

// forgot password 
let resetPassword = () => {
  let resetPassEmail = document.getElementById("resetPassEmail").value;
  sendPasswordResetEmail(auth, resetPassEmail)
  .then(() => {
    alert("Password reset email sent!")
  })
  .catch((error) => {
    console.log("error", error.code)
  });
}

if (
  window.location.pathname ==
  "/homework%20tasks/login-signup_firbase-intro/login.html"
) {
  let resetPasswordBtn = document.getElementById("resetPasswordBtn")
  resetPasswordBtn.addEventListener('click', resetPassword)
}

// logout
let logOut_signOut = () => {
  signOut(auth).then(() => {
    alert("Thanks for Visiting, Logout successfully")
    // console.log("Thanks for Visiting")
  }).catch((error) => {
    console.log("error", error.code)
  });
}

if (
  window.location.pathname ==
  "/homework%20tasks/login-signup_firbase-intro/dashboard.html"
) {
  let logOut_signOutBtn = document.getElementById("logOut_signOutBtn")
  logOut_signOutBtn.addEventListener('click', logOut_signOut)
}

// user profile
function userProfile(){
  const user = auth.currentUser;
  document.write(`<h3>Dashboard page</h3> \n
    Your Profile \n`)
  if (user !== null) {

    const displayName = user.displayName;
    const email = user.email;
    const photoURL = user.photoURL;
    const emailVerified = user.emailVerified;
    const uid = user.uid;

    document.write(`\n Name : ${displayName} \n
      Email : ${email} \n
      
      `)

    // console.log(displayName, email, photoURL, emailVerified, uid)
    // user.providerData.forEach((profile) => {
    //   console.log("Sign-in provider: " + profile.providerId);
    //   console.log("  Provider-specific UID: " + profile.uid);
    //   console.log("  Name: " + profile.displayName);
    //   console.log("  Email: " + profile.email);
    //   console.log("  Photo URL: " + profile.photoURL);
    // });
  }
}