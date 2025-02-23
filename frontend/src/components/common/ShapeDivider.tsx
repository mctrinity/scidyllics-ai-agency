import styles from "@/styles/ShapeDivider.module.css"; // ✅ Fix: Import styles

interface ShapeDividerProps {
  position?: "top" | "bottom";
  type?: "wave" | "wave2";
  color?: string;
}

export default function ShapeDivider({
  position = "bottom",
  type = "wave",
  color = "#497D74",
}: ShapeDividerProps) {
  return (
    <div
      className={`${styles.shapeDivider} ${position === "top" ? styles.top : styles.bottom}`}
      style={{ height: "160px" }}
    >
      {/* Wave 1 Shape */}
      {type === "wave" && (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1440 320"
          preserveAspectRatio="none"
          className={styles.wave}
        >
          <path fill={color} fillOpacity="1" d="M0,32L21.8,53.3C43.6,75,87,117,131,133.3C174.5,149,218,139,262,117.3C305.5,96,349,64,393,64C436.4,64,480,96,524,122.7C567.3,149,611,171,655,165.3C698.2,160,742,128,785,122.7C829.1,117,873,139,916,138.7C960,139,1004,117,1047,96C1090.9,75,1135,53,1178,48C1221.8,43,1265,53,1309,74.7C1352.7,96,1396,128,1418,144L1440,160L1440,320L0,320Z"></path>
        </svg>
      )}

      {/* New Wave 2 Shape (Updated) */}
      {type === "wave2" && (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1440 320"
          preserveAspectRatio="none"
          className={styles.wave}
        >
          <path fill={color} fillOpacity="1" d="M0,64L24,80C48,96,96,128,144,149.3C192,171,240,181,288,176C336,171,384,149,432,170.7C480,192,528,256,576,282.7C624,309,672,299,720,261.3C768,224,816,160,864,154.7C912,149,960,203,1008,229.3C1056,256,1104,256,1152,256C1200,256,1248,256,1296,234.7C1344,213,1392,171,1416,149.3L1440,128L1440,0L1416,0C1392,0,1344,0,1296,0C1248,0,1200,0,1152,0C1104,0,1056,0,1008,0C960,0,912,0,864,0C816,0,768,0,720,0C672,0,624,0,576,0C528,0,480,0,432,0C384,0,336,0,288,0C240,0,192,0,144,0C96,0,48,0,24,0L0,0Z"></path>
        </svg>
      )}
    </div>
  );
}
