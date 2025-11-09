import udea from "./../assets/logosInicio/udea1.png";
import udeaWebp from "./../assets/logosInicio/udea1.webp";
import aquifar from "./../assets/logosInicio/aquifar1.png";
import aquifarWebp from "./../assets/logosInicio/aquifar1.webp";
import asociacion from "./../assets/logosInicio/asociacion1.png";
import asociacionWebp from "./../assets/logosInicio/asociacion1.webp";

import catedra from "./../assets/logosInicio/mfd2.png";
import catedraWebp from "./../assets/logosInicio/mfd2.webp";
import giaf from "./../assets/logosInicio/GIAF.png"
import giafWebp from "./../assets/logosInicio/GIAF.webp"
import cieulm from "./../assets/logosInicio/cielum1.png";
import cieulmWebp from "./../assets/logosInicio/cielum1.webp";
import citeSalud from "./../assets/logosInicio/citesalud1.png";
import citeSaludWebp from "./../assets/logosInicio/citesalud1.webp";
import pharmaceutical from "./../assets/logosInicio/funcaion1.png";
import pharmaceuticalWebp from "./../assets/logosInicio/funcaion1.webp";
import colegio from "./../assets/logosInicio/colegio1.png";
import colegioWebp from "./../assets/logosInicio/colegio1.webp";

import willow from "./../assets/logosInicio/willow.png";
import willowWebp from "./../assets/logosInicio/willow.webp";
import labDelta from "./../assets/logosInicio/labDelta.png";
import labDeltaWebp from "./../assets/logosInicio/labDelta.webp";
import balancePharma from "./../assets/logosInicio/BalancePharma.png";
import balancePharmaWebp from "./../assets/logosInicio/BalancePharma.webp";
import Huma from "./../assets/logosInicio/Huma.png";
import HumaWebp from "./../assets/logosInicio/Huma.webp";

export type Colaboradores = {
  png: string;
  webp: string;
  alt: string;
  duration?: number;
};

export const organizan : Colaboradores[] = [
  {
    png: udea,
    webp: udeaWebp,
    alt: "Grupo de investigación Promoción y Prevención Farmacéutica, Universidad de Antioquia, Colombia",
    duration: 400,
  },
  {
    png: aquifar,
    webp: aquifarWebp,
    alt: "Asociación de Químicos Farmacéuticos de Antioquia",
    duration: 800,
  },
  {
    png: asociacion,
    webp: asociacionWebp,
    alt: "Asociación Colombiana de Químicos Farmacéuticos Hospitalarios",
    duration: 1200,
  },
];

export const apoyan : Colaboradores[] = [
  {
    png: colegio,
    webp: colegioWebp,
    alt: "Colegio Nacional de Químicos Farmacéuticos de Colombia",
    duration: 400,
  },
  {
    png: giaf,
    webp: giafWebp,
    alt: "Grupo de Investigación en Atención Farmacéutica, Universidad de Granada, España",
    duration: 400,
  },
  {
    png: catedra,
    webp: catedraWebp,
    alt: "Cátedra de Atención Farmacéutica Universidad de Granada, España",
    duration: 600,
  },
  {
    png: cieulm,
    webp: cieulmWebp,
    alt: "Cielum Health, Colombia",
    duration: 800,
  },
  {
    png: pharmaceutical,
    webp: pharmaceuticalWebp,
    alt: "Fundación Pharmaceutical Care-España",
    duration: 1000,
  },
  {
    png: citeSalud,
    webp: citeSaludWebp,
    alt: "Asociación ciencia y tecnología para la salud, EIBA-Farmacia Hospitalaria, España",
    duration: 1200,
  },
];

export const patrocinan : Colaboradores[] = [
  {
    png: willow,
    webp: willowWebp,
    alt: "Willow Pharma",
    duration: 400,
  },
  {
    png: labDelta,
    webp: labDeltaWebp,
    alt: "Laboratorios Delta",
    duration: 500,
  },
  {
    png: Huma,
    webp: HumaWebp,
    alt: "HUMAX PHARMACEUTICAL SA",
    duration: 600,
  },
  {
    png: balancePharma,
    webp: balancePharmaWebp,
    alt: "Balance Pharma",
    duration: 700,
  },
]
