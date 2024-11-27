import { useState } from "react";
import Navbar from "./components/Navbar";
import Projects from "./components/Projects";
import About from "./components/About";
import ContactForm from "./components/ContactForm";
import Footer from "./components/Footer";
import AddLink from "./components/AddLink";
import "./App.css";

function App() {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isAddLinkModalOpen, setIsAddLinkModalOpen] = useState(false);

  const toggleTheme = () => {
    setIsDarkMode((prevMode) => !prevMode);
  };

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  const openAddLinkModal = () => setIsAddLinkModalOpen(true);
  const closeAddLinkModal = () => setIsAddLinkModalOpen(false);

  return (
    <div className={isDarkMode ? "dark-mode" : "light-mode"}>
      <Navbar
        toggleTheme={toggleTheme}
        isDarkMode={isDarkMode}
        openModal={openModal}
        openAddLinkModal={openAddLinkModal}
      />

      <About />
      <Projects />
      <Footer />

      {isModalOpen && (
        <div className="modal-overlay" onClick={closeModal}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <ContactForm />
            <button onClick={closeModal} className="close-modal-button">
              Close
            </button>
          </div>
        </div>
      )}

      {isAddLinkModalOpen && (
        <div className="modal-overlay" onClick={closeAddLinkModal}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <AddLink closeModal={closeAddLinkModal} />
          </div>
        </div>
      )}
    </div>
  );
}

export default App;
