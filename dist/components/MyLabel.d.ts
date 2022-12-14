/// <reference types="react" />
import "./mylabel.module.css";
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
    /**
     * Colores basicos del font
     */
    backgroundColor?: string;
}
export declare const MyLabel: ({ label, size, color, allCaps, fontColor, backgroundColor, }: MyLabelProps) => JSX.Element;
