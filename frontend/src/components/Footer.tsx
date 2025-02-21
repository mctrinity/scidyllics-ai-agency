export default function Footer() {
    return (
      <footer className="w-full py-4 bg-gray-900 text-white text-center"
      style={{
        backgroundColor: "var(--background-color)",
        color: "var(--text-color)",
      }}
      >
        <p>&copy; {new Date().getFullYear()} SciDyllics. All rights reserved.</p>
      </footer>
    );
  }
  