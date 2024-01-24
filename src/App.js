import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage/HomePage";
import AboutPage from "./pages/AboutPage/AboutPage";
import ContactPage from "./pages/ContactPage/ContactPage";
import EventsPage from "./pages/EventsPage/EventsPage";
import ListenPage from "./pages/ListenPage/ListenPage";
import TeachingPage from "./pages/TeachingPage/TeachingPage";

export default function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="about" element={<AboutPage />} />
          <Route path="events" element={<EventsPage />} />
          <Route path="listen" element={<ListenPage />} />
          <Route path="teaching" element={<TeachingPage />} />
          <Route path="contact" element={<ContactPage />} />

        </Routes>
      </div>
    </BrowserRouter>
  );
}
