import SVG from "react-inlinesvg";
import styles from "./icon.module.scss";

import { IconType, icons } from "@/utils/icon";
interface IconProps {
  icon: IconType;
  width?: number;
  height?: number;
}

const Icon: React.FC<IconProps> = ({ icon, width, height }) => {
  return <SVG src={icons[icon]} width={width} height={height} className={styles.icon}/>;
};

export default Icon;