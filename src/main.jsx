import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home.jsx";
import About from "./pages/About.jsx";
import Services from "./pages/Services.jsx";
import ContactUs from "./pages/ContactUs.jsx";
import ServicesDetail from "./pages/ServicesDetail.jsx";
import NotFound from "./pages/NotFound.jsx";
import Header from "./components/Header.jsx";
import SignIn from "./pages/Auth/Signin.jsx";
import SignUp from "./pages/Auth/Signup.jsx";
import Auth from "./pages/Auth/index.jsx";
import Books from "./pages/Book/Books.jsx";
import BookDetail from "./pages/Book/BookDetail.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/auth">
          <Route index element={<Auth />} />
          <Route path="signin" element={<SignIn />} />
          <Route path="signup" element={<SignUp />} />
        </Route>
        <Route path="/books">
          <Route index element={<Books />} />
          <Route path=":id" element={<BookDetail />} />
        </Route>
        <Route path="/about" element={<About />} />
        <Route path="/services" element={<Services />} />
        <Route path="/services/:id" element={<ServicesDetail />} />
        <Route path="/contactus" element={<ContactUs />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
