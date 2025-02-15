import { useCallback, useMemo } from "react";
import { useTheme } from "../context/ThemeContext";
import Counter from "../components/Counter";

function ThemeToggle() {
  const { state: { isDark }, dispatch } = useTheme();

  const handleThemeToggle = useCallback(() => {
    dispatch({ type: "TOGGLE_THEME" });
  }, [dispatch]);

  const styles = useMemo(() => ({
    container: {
      textAlign: "center",
      margin: "20px 0",
      backgroundColor: isDark ? "#121212" : "#fafafa",
      color: isDark ? "#e0e0e0" : "#333333",
      minHeight: "100vh",
      padding: "30px",
      transition: "background-color 0.3s ease, color 0.3s ease"
    },
    button: {
      padding: "12px 24px",
      borderRadius: "10px",
      border: "none",
      cursor: "pointer",
      backgroundColor: isDark ? "#1f1f1f" : "#e0e0e0",
      color: isDark ? "#ffffff" : "#333333",
      transition: "all 0.3s ease",
      boxShadow: isDark
        ? "0 4px 10px rgba(0, 0, 0, 0.5)"
        : "0 4px 10px rgba(0, 0, 0, 0.2)",
      marginBottom: "20px"
    },
    counterContainer: {
      backgroundColor: isDark ? "#1e1e1e" : "#ffffff",
      padding: "25px",
      borderRadius: "12px",
      textAlign: "center",
      boxShadow: isDark
        ? "0 6px 15px rgba(0, 0, 0, 0.4)"
        : "0 6px 15px rgba(0, 0, 0, 0.1)",
      maxWidth: "320px",
      margin: "0 auto",
      transition: "background-color 0.3s ease, box-shadow 0.3s ease"
    },
    heading: {
      fontSize: "26px",
      margin: "15px 0"
    },
    text: {
      fontSize: "20px",
      margin: "12px 0"
    },
    counterButton: {
      padding: "10px 18px",
      margin: "6px",
      borderRadius: "8px",
      border: "none",
      cursor: "pointer",
      backgroundColor: isDark ? "#333" : "#ddd",
      color: isDark ? "#ffffff" : "#000000",
      transition: "background-color 0.3s ease, color 0.3s ease, transform 0.2s ease",
      boxShadow: isDark
        ? "0 4px 10px rgba(0, 0, 0, 0.3)"
        : "0 4px 10px rgba(0, 0, 0, 0.1)"
    },
    counterButtonHover: {
      transform: "translateY(-3px)",
      backgroundColor: isDark ? "#444" : "#ccc"
    }
  }), [isDark]);

  return (
    <div style={styles.container}>
      <button
        style={styles.button}
        onClick={handleThemeToggle}
        onMouseEnter={(e) => e.target.style.backgroundColor = isDark ? "#2a2a2a" : "#d4d4d4"}
        onMouseLeave={(e) => e.target.style.backgroundColor = isDark ? "#1f1f1f" : "#e0e0e0"}
      >
        Switch to {isDark ? "Light" : "Dark"} Mode
      </button>
      <Counter styles={styles} />
    </div>
  );
}

export default ThemeToggle;
