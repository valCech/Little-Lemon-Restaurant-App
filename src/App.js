import React from 'react';
import './App.css';
import Header from './Header';
import Footer from './Footer';
import Nav from './Nav';
import BookingForm from './BookingForm';
import { BrowserRouter, Route, Switch, useHistory } from "react-router-dom";
import MainContent from "./Main";
import ConfirmedBooking from "./ConfirmedBooking";
import { submitAPI } from "./api";

function submitForm(history, formData) {
  submitAPI(formData).then((response) => {
    if (response) {
      history.push("/confirmed");
    }
  });
}

function App() {
  const history = useHistory();

  return (
    <BrowserRouter>
      <div>
        <Nav />
        <Header />
        <Switch>
          <Route path="/" exact component={MainContent} />
          <Route path="/confirmed" component={ConfirmedBooking} />
          <Route path="/booking-form" component={BookingForm} />
        </Switch>
        <Main history={history} />
        <Footer />
      </div>
    </BrowserRouter>
  );
}

function Main(props) {
  const { history } = props;

  return (
    <div>
      <h1>Main content goes here</h1>
      <button onClick={() => submitForm(history, { /* form data here */ })}>Submit</button>
    </div>
  );
}

export default App;
