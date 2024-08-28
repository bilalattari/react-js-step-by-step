import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home";
import About from "./pages/About";
import ContactUs from "./pages/ContactUs";
import Header from "./components/Header";
import Auth from "./pages/Auth";
import SignIn from "./pages/Auth/Signin";
import SignUp from "./pages/Auth/Signup";
import Books from "./pages/Book/Books";
import BookDetail from "./pages/Book/BookDetail";
import NotFound from "./pages/NotFound";
import ThemeContextProvider from "./context/ThemeContext";
import UserContextProvider from "./context/UserContext";

function App() {
  return (
    <UserContextProvider>
      <ThemeContextProvider>
        <BrowserRouter>
          <Header />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/contactus" element={<ContactUs />} />

            <Route path="/auth">
              <Route index element={<Auth />} />
              <Route path="signin" element={<SignIn />} />
              <Route path="signup" element={<SignUp />} />
            </Route>

            <Route path="/books">
              <Route index element={<Books />} />
              <Route path=":title" element={<BookDetail />} />
            </Route>

            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </ThemeContextProvider>
    </UserContextProvider>
  );
}

export default App;
