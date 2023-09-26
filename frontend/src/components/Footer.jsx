import "./Footer.css";
import github from "../assets/github.svg";

function Footer() {
  return (
    <footer>
      <div className="foot">
        <div>
          <p>Developed by Thomas Verwaerde</p>
        </div>
        <a
          href="https://github.com/Thomas-VWD"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img className="github-icon" src={github} alt="GitHub Icon" />
        </a>
      </div>
    </footer>
  );
}

export default Footer;
