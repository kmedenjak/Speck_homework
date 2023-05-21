import { Routes, Route, useLocation } from "react-router-dom";
import Header from "./components/Header/Header.jsx";
import Courses from "./pages/Courses.jsx";
import CoursePage from "./pages/CoursePage.jsx";
import Register from "./pages/Register/Register.jsx";
import SignIn from "./pages/SignIn/SignIn.jsx";
import Home from "./pages/Home.jsx";
import Profile from "./pages/Profil/Profile.jsx";
import PrivateRoute from "./components/PrivateRoute/PrivateRoute.jsx";
import { useEffect, useState } from "react";

const App = () => {
  const { path } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [path]);

  const [isAdmin, setIsAdmin] = useState(false);
  const [isLogedIn, setIsLogedIn] = useState(false);

  useEffect(() => {
    setIsAdmin(localStorage.getItem("admin"));
    setIsLogedIn(localStorage.getItem("logged"));
  }, []);

  return (
    <>
      <Header
        navHome="Home"
        navCourses="Courses"
        navSignIn="Sign in"
        navProfile="Profile"
        button="Register"
        isAdmin={isAdmin}
        isLogedIn={isLogedIn}
        setIsAdmin={setIsAdmin}
        setIsLogedIn={setIsLogedIn}
      />

      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/courses/" element={<Courses />} />
          <Route path="/course/:id" element={<CoursePage />} />
          <Route
            path="/profile"
            element={
              <PrivateRoute isAdmin={isAdmin} >
                {console.log(isAdmin)}
                <Profile />
              </PrivateRoute>
            }
          />
          <Route
            path="/sign-in"
            element={
              <SignIn setIsLogedIn={setIsLogedIn} setIsAdmin={setIsAdmin} />
            }
          />
          <Route path="/register" element={<Register />} />
        </Routes>
      </main>
    </>
  );
};

export default App;
