import React, { useContext } from 'react';
import firebase from "firebase/app";
import "firebase/auth";
import { firebaseConfig } from "./firebase.config";
import { Link, useHistory, useLocation } from 'react-router-dom';
import { UserContext } from '../../App';
import './Login.css';
import logo from '../../images/logo.png';
import ParticlesBg from "particles-bg";


if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
} else {
  firebase.app(); // if already initialized, use that one
};

const Login = () => {
  const [loggedInUser, setLoggedInUser] = useContext(UserContext);
  const history = useHistory();
  const location = useLocation();

  let { from } = location.state || { from: { pathname: "/" } };

  const handleGoogleSignIn = () => {
    const provider = new firebase.auth.GoogleAuthProvider();
    firebase
      .auth()
      .signInWithPopup(provider)
      .then((res) => {
        console.log(res.user);
        const { displayName, email } = res.user;
        setLoggedInUser({
          isSignedIn: true,
          name: displayName,
          email: email,
          role: 'user'
        });
        history.replace(from);
      })
      .catch((error) => {
        console.log(error);
      });
  };
  return (
    <div className='login-container'>
      <div className='container'>
        <Link to='/'><h2 className='text-success pt-5 font-italic'><img className='w-25 img-fluid' src={logo} alt="" /></h2></Link>
        <div className='sign-in-container mx-auto shadow rounded'>
          <form action="">
            <h5 className='text-white'>Your Email</h5>
            <input type="email" name="" placeholder='Enter email' className='form-control my-3' id="" />
            <h5 className='text-white'>Password</h5>
            <input type="password" name="" placeholder='Enter password' className='form-control my-3' id="" />
          </form>
          <h6 className='text-center text-white'>Or,</h6>
          <button className='btn btn-danger btn-block my-3' onClick={handleGoogleSignIn}>Sign In With Google</button>
        </div>
      </div>
      <ParticlesBg type="thick" bg={true}/>
    </div>
  );
};

export default Login;