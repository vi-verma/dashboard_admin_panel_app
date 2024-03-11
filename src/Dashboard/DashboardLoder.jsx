import Skeleton from "react-loading-skeleton";
import styles from "../app.module.css";

const LoderSkeleton = (Props) => {
  return (
    <div className={styles.borderRadius}>
      <Skeleton
        baseColor="#d2d2d2"
        highlightColor="#e5e3e3"
        height={Props.height || 400}
      />
    </div>
  );
};

export default LoderSkeleton;
