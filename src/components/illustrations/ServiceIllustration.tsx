import type { ReactNode } from "react";
import { AirflowBuilding } from "@/components/illustrations/AirflowBuilding";
import { DepannageSchema } from "@/components/illustrations/DepannageSchema";
import { DoubleFluxSchema } from "@/components/illustrations/DoubleFluxSchema";
import { MaintenanceSchema } from "@/components/illustrations/MaintenanceSchema";
import { SchemaFigure } from "@/components/illustrations/SchemaFigure";
import type { SchemaIllustration } from "@/content/types";

const captions: Record<SchemaIllustration, string> = {
  airflow: "Schéma — réseaux en plafond, insufflation et extraction. Photos chantier à venir.",
  "double-flux": "Schéma — air neuf, air extrait, récupération de chaleur. Pas un pourcentage de gain.",
  maintenance: "Schéma — bouche, filtre, débits. Hygiène des réseaux, pas un ménage.",
  depannage: "Schéma — relevé puis identification. Aucun délai d’intervention annoncé.",
};

const scenes: Record<SchemaIllustration, ReactNode> = {
  airflow: <AirflowBuilding />,
  "double-flux": <DoubleFluxSchema />,
  maintenance: <MaintenanceSchema />,
  depannage: <DepannageSchema />,
};

export function ServiceIllustration({ name }: { name: SchemaIllustration }) {
  return <SchemaFigure caption={captions[name]}>{scenes[name]}</SchemaFigure>;
}
