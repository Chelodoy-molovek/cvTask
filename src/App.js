import React from "react";
import AboutMe from "./AboutMe"
import Portfolio from "./Portfolio"
import Contacts from "./Contacts"
import { Link, Route } from 'react-router-dom';


export default function App() {
  return (
    <div>
      <div className="header">
      <Link className="About" to="/AboutMe">About me</Link>
      <Link className="Portfolio" to="/Portfolio">Portfolio</Link>
      <Link to="/Contacts">Contacts</Link>
      </div>
      <Route path="/AboutMe" exact component={AboutMe} />
      <Route path="/Portfolio" exact component={Portfolio} />
      <Route path="/Contacts" exact component={Contacts} />
    </div>
  )
}