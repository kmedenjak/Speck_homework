import { Routes, Route, useLocation } from "react-router-dom";
import Header from "./components/Header/Header.jsx";
import Courses from "./pages/Courses.jsx";
import CoursePage from "./pages/CoursePage.jsx";
import Register from "./pages/Register/Register.jsx"
import SignIn from "./pages/SignIn/SignIn.jsx"
import Home from "./pages/Home.jsx";
import { useEffect } from "react";

const App = () => {
  const { path } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [path]);

  return (
    <>
      <Header
        navHome="Home"
        navCourses="Courses"
        navSignIn="Sign in"
        button="Register"
      />

      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/courses/" element={<Courses />} />
          <Route path="/course/:id" element={<CoursePage />} />
          <Route path="/sign-in" element={<SignIn />}/>
          <Route path="/register" element={<Register />}/>
        </Routes>
      </main>
    </>
  );
};

export default App;
