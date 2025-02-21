import { FaMeta, FaXTwitter, FaLinkedin, FaGithub } from "react-icons/fa6"; // Import Meta & X icons

export default function Footer() {
  return (
    <footer
      className="w-full py-4 bg-gray-900 text-white text-center"
      style={{
        backgroundColor: "var(--background-color)",
        color: "var(--text-color)",
      }}
    >
      <div className="container mx-auto flex flex-col items-center">
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
