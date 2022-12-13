import "./mylabel.module.css";
import { Secondary, AllCaps } from "../stories/components/MyLabel.stories";

export interface MyLabelProps {
  /**
   * Este es el mensaje a mostrar en la etiqueta
   */
  label?: string;
  /**
   * Este es el tamanyo de la etiqueta
   */
  size?: "normal" | "h1" | "h2" | "h3";
  /**
   * Colores basicos del boton
   */
  color?: "primary" | "secondary" | "tertiary";
  /**
   * Si quiere capitalizado
   */
  allCaps?: boolean;

  /**
   * Colores basicos del font
   */
  fontColor?: string;
}

export const MyLabel = ({
  label = "No Label",
  size = "normal",
  color = "primary",
  allCaps = false,
  fontColor,
}: MyLabelProps) => {
  return (
    <span
      className={`label ${size} text-${color} `}
      style={{ color: fontColor }}
    >
      {allCaps ? label.toUpperCase() : label}
    </span>
  );
};
