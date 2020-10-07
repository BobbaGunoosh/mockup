import React from "react";
import Google from "../assets/google.png";
import Footer from "./Footer";
import Navigation from "./Navigation";

function Contact() {
  return (
    <div className="container-contact">
      <Navigation />{" "}
      <form>
        <button className="btn btn-ghost">
          <img src={Google} alt="" />
          Log In with Google
        </button>

        <small>or</small>

        <div className="control">
          <label for="email">Email</label>
          <input type="email" id="email" placeholder="Enter your email" />
        </div>

        <div className="control">
          <label for="password">Password</label>
          <input type="password" id="password" placeholder="Password" />
        </div>
        <div className="checkbox-container">
          <input type="checkbox" name="" id="remember" />
          <label for="remember">Remember Me</label>
          <a href="#">Forgot Password</a>
        </div>
        <button className="btn">Log In</button>
        <small>
          Dont have an account? <a href="#">Sign Up</a>
        </small>
      </form>
      <div className="features">
        <div className="feature">
          <i className="fas fa-code"></i>
          <h3>Development</h3>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Omnis
            placeat numquam, autem porro enim soluta eius, ipsum fugiat quae id,
          </p>
        </div>
        <div className="feature">
          <i className="fas fa-gift"></i>
          <h3>Feature</h3>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam ea
            dolores doloribus reprehenderit consequatur,
          </p>
        </div>
        <div className="feature">
          <i className="fas fa-edit"></i>
          <h3>Updatees</h3>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam
            optio architecto vel aliquid totam,
          </p>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Contact;
