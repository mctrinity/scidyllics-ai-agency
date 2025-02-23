import { FaMeta, FaXTwitter, FaLinkedin, FaGithub } from "react-icons/fa6"; // Import Meta & X icons
import styles from "@/styles/Footer.module.css";

export default function Footer() {
  return (
    <footer
      className="relative w-full py-4 bg-gray-900 text-white text-center"
      style={{
        backgroundColor: "var(--background-color)",
        color: "var(--text-color)",
      }}
    >
      {/* Shape Divider */}
      <div className={styles.customShapeDividerTop}>
        <svg
          data-name="Layer 1"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
        >
          <path
            d="M985.66,92.83C906.67,72,823.78,31,743.84,14.19c-82.26-17.34-168.06-16.33-250.45.39-57.84,11.73-114,31.07-172,41.86A600.21,600.21,0,0,1,0,27.35V120H1200V95.8C1132.19,118.92,1055.71,111.31,985.66,92.83Z"
            className={styles.shapeFill}
          ></path>
        </svg>
      </div>

      <div className="container mx-auto flex flex-col items-center mt-8">
        {/* Social Media Icons */}
        <div className="flex gap-6 mb-2">
          <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
            <FaMeta size={24} className="hover:text-[#497D74] transition-colors" />
          </a>
          <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
            <FaXTwitter size={24} className="hover:text-[#497D74] transition-colors" />
          </a>
          <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
            <FaLinkedin size={24} className="hover:text-[#497D74] transition-colors" />
          </a>
          <a href="https://github.com" target="_blank" rel="noopener noreferrer">
            <FaGithub size={24} className="hover:text-[#497D74] transition-colors" />
          </a>
        </div>

        {/* Copyright Text */}
        <p>&copy; {new Date().getFullYear()} SciDyllics. All rights reserved.</p>
      </div>
    </footer>
  );
}
