import { type LocaleType } from '../keys';

const locale: LocaleType = {
	HEADLINE: 'Waven Calendar',

	CANCEL: 'Annuler',
	SAVE: 'Sauvegarder',

	EQUIPMENT_MORE_PLACEHOLDER: 'Gelano',

	REWARD_LABEL_TYPE: 'Type de récompense',
	REWARD_LABEL_RARITY: 'Rareté',
	REWARD_LABEL_EQUIPMENT_TYPE: "Type d'équipement",
	REWARD_LABEL_ITEM_TYPE: "Type d'objet",
	REWARD_LABEL_AMOUNT: 'Quantité',
	REWARD_LABEL_EQUIPMENT_MORE: 'Plus de détails',
	REWARD_DELETE_CONFIRM: 'Êtes-vous sûr de vouloir supprimer cette récompense ? Cette action est irréversible.',

	GEMS: 'Gemmes',
	KAMAS: 'Kamas',
	EQUIPMENT: 'Equipements',
	COMPANION: 'Compagnons',
	CHEST: 'Super Coffres',
	WAKFU: 'Frag. de Wakfu',
	RUNES: 'Runes',

	COMMON: 'Commun',
	RARE: 'Rare',
	KROSMIC: 'Krosmic',
	INFINITE: 'Infinite',

	COMPANIONS: 'Compagnons',
	SPELLS: 'Sorts',
	EQUIPMENTS: 'Equipements',

	RING: 'Anneau',
	ARMBAND: 'Brassard',

	AUTHENTICATION_RETRY: 'Réessayer',
	AUTHENTICATION_CHECK_EMAIL: 'Vérifie tes emails pour obtenir ton lien de connexion.',
	AUTHENTICATION_LABEL_YOUR_EMAIL: 'Ton email',
	AUTHENTICATION_PLACEHOLDER_EMAIL: 'jean.dupont@gmail.com',
	AUTHENTICATION_GET_LINK_BY_EMAIL: 'Recevoir un lien de connexion par email',

	INFO_WELCOME: 'Bienvenue sur Waven Calendar !',

	INFO_INTRODUCTION:
		'Chaque jour, les joueurs de Waven reçoivent une récompense aléatoire : équipement, coffres, runes, ou même des gemmes. Ces récompenses sont organisées sur un tableau de 365 jours qui se répète. Un décalage sur ce tableau est défini aléatoirement à chaque joueur.',
	INFO_OBJECTIVE_TITLE: 'Notre objectif :',
	INFO_OBJECTIVE_TEXT: `Découvrir et documenter ce tableau de récompenses afin de pouvoir prédire précisément quand chaque
		joueur recevra ses gemmes ou tout autre objet convoité. Vous pourrez ainsi répondre facilement à la question : "Quand
		vais-je obtenir mes gemmes ?"`,
	INFO_AUTHENTICATION_TITLE: 'Comment ça marche ?',
	INFO_AUTHENTICATION_TEXT: `Pour contribuer au projet, nous vous invitons à vous connecter via un système
		d'authentification simple et sécurisé :`,

	INFO_AUTHENTICATION_STEP_1: 'Entrez votre adresse email ci-dessous.',
	INFO_AUTHENTICATION_STEP_2: 'Vous recevrez un lien de connexion unique par email de',
	INFO_AUTHENTICATION_STEP_3: 'Cliquez sur ce lien pour accéder au service, sans mot de passe requis.',
	INFO_CONFIDENTIALITY_TITLE: 'Confidentialité et gestion des données :',
	INFO_CONFIDENTIALITY_TEXT: `Votre adresse email et vos données de jeu sont utilisées uniquement pour
		collecter les informations nécessaires à la reconstitution du tableau. Une fois notre objectif atteint, toutes les données
		individuelles seront supprimées de manière définitive, garantissant ainsi la confidentialité et la sécurité de vos informations.`,
	INFO_OPENSOURCE_TITLE: 'Open source et contributions :',
	INFO_OPENSOURCE_TEXT_1: `Nous croyons en la transparence et en la collaboration ! Le code source de
		cette application est disponible sur `,
	INFO_OPENSOURCE_TEXT_2: `N'hésitez pas
		à le consulter, à signaler des problèmes ou même à y contribuer pour améliorer le projet !`,
	INFO_END: 'Merci de faire partie de cette aventure et de nous aider à découvrir les récompenses de Waven !',

	PROFILE: 'Profil',
	PROFILE_DEFAULT: 'Profil par défaut',

	PROFILE_INFO: 'Vous pouvez gérer plusieurs calendriers en même temps avec différents profils.',
	PROFILE_CREATE: 'Créer un nouveau profil',
	PROFILE_CREATE_PLACEHOLDER: 'Nom du profil',
	PROFILE_CREATE_LABEL: 'Nom du profil',
	PROFILE_DELETE_CONFIRM:
		"Êtes-vous sûr de vouloir supprimer ce profil ? Cette action est irréversible, l'ensemble du calendrier et de ses récompenses associées seront également supprimées.",

	REWARDS_FORM_INFO:
		'Remplissez les récompenses que vous recevez chaque jour pour nous aider à construire le tableau des récompenses.',

	STATS_LABEL_COUNT_REWARDS: 'Nombre de récompenses enregistrées',
	STATS_LABEL_OBJECTIVE: 'Objectif',

	NAVIGATION_HOME: 'Compléter ton calendrier',
	NAVIGATION_STATS: 'Evolution du projet',
	NAVIGATION_CALENDAR: 'Tableau des récompenses',

	DISCONNECT: 'Se déconnecter',

	CALENDAR_TITLE: 'Tableau de récompenses dans Waven',
	CALENDAR_INFO:
		'Le système de Waven distribue des récompenses quotidiennes sur un tableau de 365 jours identique pour tous, mais avec un décalage initial aléatoire propre à chaque joueur. Le tableau présenté ici est complété manuellement grâce aux informations transmises par les utilisateurs de WavenCalendar, permettant d’anticiper vos gains.',
	CALENDAR_OFFSET_INFO:
		"Les décalages proposés et leur probabilité ne sont calculés qu'à partir du calendrier déjà connu. Il est possible que votre décalage réel n'ait pas fait partie de nos calculs",
	CALENDAR_OFFSET_KEY: 'Décalage',
	CALENDAR_OFFSET_PROBABILITY_KEY: 'Probabilité'
};
export default locale;
