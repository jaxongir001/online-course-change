import { BrowserRouter as Router, Route, Routes } from "react-router-dom"
import Header from "./layout/Header/Header"
import Footer from "./layout/Footer/Footer"
import CoursePage from "./pages/CoursePage"
import HomePage from "./pages/HomePage"
import OpenCoursePage from "./components/Course/OpenCoursePage"
import NotfoundPage from "./pages/NotfoundPage"
import LoginPage from "./pages/LoginPage"
import CourseCard from "./layout/Main/CourseCard/CourseCard"

const App = () => {
  return (
    <div>
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/course" element={<CoursePage />} />
          <Route path="/course/course-open" element={<OpenCoursePage />} />
          <Route path="/course-open" element={<OpenCoursePage />} />
          <Route path="*" element={<NotfoundPage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/coursecard" element={<CourseCard />} />


        </Routes>
        <Footer />
      </Router>
    </div>
  )
}

export default App