import { useState } from "react";
import mylogoFAF from "/src/assets/FAF_nobg.png";

interface NavBarProps {
  onAboutClick: () => void;
  onProjectsClick: () => void;
  onOrgsClick: () => void;
  onContactClick: () => void;
}

const NavBar = ({
  onAboutClick,
  onProjectsClick,
  onOrgsClick,
  onContactClick,
}: NavBarProps) => {
  const [isNavCollapsed, setIsNavCollapsed] = useState(true);

  return (
    <nav className="navbar navbar-expand-xl" data-bs-theme="dark">
      <div className="container">
        <a href="#home" className="navbar-brand">
          <img src={mylogoFAF} alt="Logo" className="nav-logo logo-hover" />
        </a>

        <button
          className="navbar-toggler"
          type="button"
          onClick={() => setIsNavCollapsed(!isNavCollapsed)}
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className={`${isNavCollapsed ? "collapse" : ""} navbar-collapse`}>
          <ul className="navbar-nav ms-auto">
            <li className="nav-item">
              <button
                className="nav-link"
                onClick={() => window.scrollTo(0, 0)}
              >
                <span className="fs-4">Home</span>
              </button>
            </li>
            <li className="nav-item">
              <button className="nav-link" onClick={onAboutClick}>
                <span className="fs-4">About</span>
              </button>
            </li>
            <li className="nav-item">
              <button className="nav-link" onClick={onProjectsClick}>
                <span className="fs-4">Projects</span>
              </button>
            </li>
            <li className="nav-item">
              <button className="nav-link" onClick={onOrgsClick}>
                <span className="fs-4">Organizations</span>
              </button>
            </li>
            <li className="nav-item">
              <button className="nav-link" onClick={onContactClick}>
                <span className="fs-4">Contact</span>
              </button>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
