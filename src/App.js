import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Landing, Error, Register } from "./pages";
import {
  AddJob,
  AllJobs,
  Profile,
  Stats,
  SharedLayout,
} from "./pages/dashboard";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<SharedLayout />}>
          <Route index element={<Stats />} />
          <Route path="all-jobs" element={<AllJobs />} />
          <Route path="add-job" element={<AddJob />} />
          <Route path="profile" element={<Profile />} />
        </Route>
        <Route path="landing" element={<Landing />} />
        <Route path="register" element={<Register />} />
        <Route path="*" element={<Error />} />
      </Routes>
      <ToastContainer position="top-center" />
    </Router>
  );
}

export default App;
