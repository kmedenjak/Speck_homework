import { Routes, Route, useLocation} from "react-router-dom";
import Header from "./components/Header/Header.jsx";
import Courses from "./pages/Courses.jsx";
import CoursePage from "./pages/CoursePage.jsx"
import Home from "./pages/Home.jsx"
import { useEffect } from "react";

const App = () => {

  const {path} = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [path]);
  
  return (
   <>
      <Header navHome="Home" 
      navCourses="Courses" 
      button="Register" />

      <main>
          <Routes>
            <Route path="/" element={<Home />}/>
            <Route path="/courses/" element={<Courses />}/>
            <Route path="/course/:id" element={<CoursePage />}/>
          </Routes>
      </main>

  </>
  )
}

export default App;
