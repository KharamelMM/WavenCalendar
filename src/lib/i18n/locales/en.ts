import { type LocaleType } from '../keys';

const locale: LocaleType = {
	HEADLINE: 'Waven Calendar',

	CANCEL: 'Cancel',
	SAVE: 'Save',

	EQUIPMENT_MORE_PLACEHOLDER: 'Gelano',

	REWARD_LABEL_TYPE: 'Reward Type',
	REWARD_LABEL_RARITY: 'Rarity',
	REWARD_LABEL_EQUIPMENT_TYPE: 'Equipment Type',
	REWARD_LABEL_ITEM_TYPE: 'Item Type',
	REWARD_LABEL_AMOUNT: 'Amount',
	REWARD_LABEL_EQUIPMENT_MORE: 'More',
	REWARD_DELETE_CONFIRM: 'Are you sure you want to delete this reward? This action is irreversible.',

	GEMS: 'Gems',
	KAMAS: 'Kamas',
	EQUIPMENT: 'Equipments',
	COMPANION: 'Companions',
	CHEST: 'Super Chests',
	WAKFU: 'Wakfu Frag.',
	RUNES: 'Runes',

	COMMON: 'Common',
	RARE: 'Rare',
	KROSMIC: 'Krosmic',
	INFINITE: 'Infinite',

	COMPANIONS: 'Companions',
	SPELLS: 'Spells',
	EQUIPMENTS: 'Equipments',

	RING: 'Ring',
	ARMBAND: 'Armband',

	AUTHENTICATION_RETRY: 'Retry',
	AUTHENTICATION_CHECK_EMAIL: 'Check your emails to get your login link.',
	AUTHENTICATION_LABEL_YOUR_EMAIL: 'Your email',
	AUTHENTICATION_PLACEHOLDER_EMAIL: 'stan_smiss@gmail.com',
	AUTHENTICATION_GET_LINK_BY_EMAIL: 'Get a login link by email',

	INFO_WELCOME: 'Welcome to Waven Calendar!',

	INFO_INTRODUCTION:
		"Every day, Waven's players receive a random reward: equipment, chests, runes, or even gems. These rewards are organized on a 365-day board that repeats. A shift on this board is randomly defined for each player.",
	INFO_OBJECTIVE_TITLE: 'Our objective:',
	INFO_OBJECTIVE_TEXT: `Discover and document this reward board to accurately predict when each
		player will receive their gems or any other coveted item.`,
	INFO_AUTHENTICATION_TITLE: 'How does it work?',
	INFO_AUTHENTICATION_TEXT: `To contribute to the project, we invite you to log in via a simple and secure authentication system:`,

	INFO_AUTHENTICATION_STEP_1: 'Enter your email address below.',
	INFO_AUTHENTICATION_STEP_2: 'You will receive a unique login link by email from',
	INFO_AUTHENTICATION_STEP_3: 'Click on this link to access the service, no password required.',
	INFO_CONFIDENTIALITY_TITLE: 'Confidentiality and data management:',
	INFO_CONFIDENTIALITY_TEXT: `Your email address and game data are used solely to
		collect the information necessary to reconstruct the board. Once our objective is achieved, all individual data
		will be permanently deleted, thus ensuring the confidentiality and security of your information.`,
	INFO_OPENSOURCE_TITLE: 'Open source and contributions:',
	INFO_OPENSOURCE_TEXT_1: `We believe in transparency and collaboration! The source code of
		this application is available on `,
	INFO_OPENSOURCE_TEXT_2: `Feel free
		to check it out, report issues, or even contribute to improve the project!`,
	INFO_END: "Thank you for being part of this adventure and helping us discover Waven's rewards!",

	PROFILE: 'Profile',
	PROFILE_DEFAULT: 'Default Profile',

	PROFILE_INFO: 'You can manage multiple calendars with different profiles.',
	PROFILE_CREATE: 'Create a new profile',
	PROFILE_CREATE_PLACEHOLDER: 'Profile name',
	PROFILE_CREATE_LABEL: 'Profile name',
	PROFILE_DELETE_CONFIRM:
		'Are you sure you want to delete this profile? This action is irreversible. The calendar and rewards associated with this profile will be permanently deleted.',

	REWARDS_FORM_INFO: 'Fill in the rewards you receive each day to help us build the reward board.',

	STATS_LABEL_COUNT_REWARDS: 'Saved rewards count',
	STATS_LABEL_OBJECTIVE: 'Objective',

	NAVIGATION_HOME: 'Complete your calendar',
	NAVIGATION_STATS: "Project's statistics",
	NAVIGATION_CALENDAR: 'Rewards table',

	DISCONNECT: 'Disconnect',

	CALENDAR_TITLE: 'Waven Rewards Calendar',
	CALENDAR_INFO:
		'Waven’s system distributes daily rewards on a 365-day table identical for all players, but with a unique initial offset for each individual. The table presented here is manually completed with information provided by WavenCalendar users, helping you anticipate your rewards.',
	CALENDAR_OFFSET_INFO:
		'The proposed offsets and their probability are calculated only from the already known calendar. It is possible that your actual offset was not part of our calculations.',
	CALENDAR_OFFSET_KEY: 'Offset',
	CALENDAR_OFFSET_PROBABILITY_KEY: 'Probability'
};
export default locale;
