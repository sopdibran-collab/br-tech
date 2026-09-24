import { formatAddress, site } from "@/config/site";

export const mentions = {
  path: "/mentions-legales",
  title: "Mentions légales",
  description: `Mentions légales de ${site.legalName}, ${formatAddress()}. Hébergement Vercel, domaine et messagerie Infomaniak.`,
  paragraphs: [
    `${site.legalName}, ${formatAddress()}, ${site.address.countryName}.`,
    `E-mail : ${site.email}. Téléphone : ${site.phoneDisplay}${site.phoneConfirmed ? "" : " (à confirmer)."}.`,
    "Le site présente les prestations de ventilation de l’entreprise. Aucune information n’est fournie à titre de conseil juridique ou normatif opposable.",
    "Hébergement du site : Vercel. Nom de domaine et messagerie : Infomaniak.",
  ],
};

export const privacy = {
  path: "/confidentialite",
  title: "Confidentialité",
  description: `Confidentialité (nLPD) de ${site.legalName} : données du formulaire de contact, accès, rectification et suppression via ${site.email}.`,
  paragraphs: [
    `Les données du formulaire de contact (nom, société, téléphone, e-mail, localisation, message) sont utilisées uniquement pour traiter votre demande. Responsable : ${site.legalName}, ${formatAddress()}.`,
    `Base : exécution de mesures précontractuelles à votre demande, conformément à la nLPD. Destinataire : l’entreprise. Pas de revente. Durée : le temps du traitement de la demande, puis suppression ou archivage selon obligations légales.`,
    `Vous pouvez demander l’accès, la rectification ou la suppression en écrivant à ${site.email}.`,
    "Ce site v1 n’utilise pas de cookies de mesure d’audience. Si des outils d’analyse sont ajoutés plus tard, un consentement sera demandé.",
  ],
};
