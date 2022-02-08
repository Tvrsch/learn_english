import { Container } from "react-bootstrap";
import { HashRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./containers/Home";
import StudentScreen from "./containers/StudentScreen";
import PresentationScreen from "./containers/PresentationScreen";
import StudentProgressDetails from "./containers/StudentProgressScreen";
import HomeworkScreen from "./containers/HomeworkScreen";

const App = () => {
  return (
    <Router>
      <Header />
      <main className="py-3">
        <Container className="mx-auto">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/students">
              <Route path="/students" element={<StudentScreen />} />
              <Route
                path="/students/:id"
                element={<StudentProgressDetails />}
              />
            </Route>
            <Route path="/presentations">
              <Route path="/presentations" element={<PresentationScreen />} />
              <Route path="/presentations/:id" element={<HomeworkScreen />} />
            </Route>
          </Routes>
        </Container>
      </main>
      <Footer />
    </Router>
  );
};

export default App;
