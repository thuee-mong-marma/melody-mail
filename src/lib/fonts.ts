import {  Poppins, Grape_Nuts } from "next/font/google";

export const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400"],
  variable: "--font-poppins",
});

export const grapeNuts = Grape_Nuts({
  subsets: ["latin"],
  weight: ["400"],
  variable: "--font-grape-nuts",
});
