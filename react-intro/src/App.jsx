import { Routes, Route, useLocation } from "react-router-dom";
import Header from "./components/Header/Header.jsx";
import Courses from "./pages/Courses.jsx";
import CoursePage from "./pages/CoursePage.jsx";
import Register from "./pages/Register/Register.jsx";
import SignIn from "./pages/SignIn/SignIn.jsx";
import Home from "./pages/Home.jsx";
import Profile from "./pages/Profil/Profile.jsx";
import PrivateRoute from "./components/PrivateRoute/PrivateRoute.jsx";
import { useContext, useEffect} from "react";
import { AuthContext } from "./context/AuthContext.jsx";

const App = () => {

  //const [isLoggedIn, setIsLoggedIn, isAdmin, setIsAdmin] = useContext(AuthContext);


  const authContext = useContext(AuthContext);


      const isLoggedIn = authContext.isLoggedIn;
      const setIsLoggedIn = authContext.setIsLoggedIn;
      const isAdmin = authContext.isAdmin;
      const setIsAdmin = authContext.setIsAdmin;
  const { path } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [path]);

  console.log(isLoggedIn);

  return (
    <>
      <Header
        navHome="Home"
        navCourses="Courses"
        navSignIn="Sign in"
        navProfile="Profile"
        button="Register"
        setIsAdmin={setIsAdmin}
        setIsLoggedIn={setIsLoggedIn}
      />

      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/courses/" element={<Courses />} />
          <Route path="/course/:id" element={<CoursePage />} />
          <Route
            path="/profile"
            element={
              <PrivateRoute isAdmin={isAdmin}>
                {console.log(isAdmin)}
                <Profile />
              </PrivateRoute>
            }
          />
          <Route
            path="/sign-in"
            element={
              <SignIn setIsLoggedIn={setIsLoggedIn} setIsAdmin={setIsAdmin} />
            }
          />
          <Route path="/register" element={<Register />} />
        </Routes>
      </main>
    </>
  );
};

export default App;
