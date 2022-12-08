export const SITE = {
	title: 'jampack',
	description: 'Your website description.',
	defaultLanguage: 'en_US',
};

export const OPEN_GRAPH = {
	image: {
		src: 'https://github.com/withastro/astro/blob/main/assets/social/banner-minimal.png?raw=true',
		alt:
			'astro logo on a starry expanse of space,' +
			' with a purple saturn-like planet floating in the right foreground',
	},
	twitter: 'astrodotbuild',
};

// This is the type of the frontmatter you put in the docs markdown files.
export type Frontmatter = {
	title: string;
	description: string;
	layout: string;
	image?: { src: string; alt: string };
	dir?: 'ltr' | 'rtl';
	ogLocale?: string;
	lang?: string;
};

export const KNOWN_LANGUAGES = {
	English: 'en',
} as const;

export const KNOWN_LANGUAGE_CODES = Object.values(KNOWN_LANGUAGES);

export const GITHUB_EDIT_URL = `https://github.com/divriots/jampack/tree/main/packages/www`;

export const COMMUNITY_INVITE_URL = `https://divRIOTS.com/chat`;

// See "Algolia" section of the README for more information.
export const ALGOLIA = {
	indexName: 'XXXXXXXXXX',
	appId: 'XXXXXXXXXX',
	apiKey: 'XXXXXXXXXX',
};

export type Sidebar = Record<
	typeof KNOWN_LANGUAGE_CODES[number],
	Record<string, { text: string; link: string }[]>
>;

export const SIDEBAR: Sidebar = {
	en: {
		'Getting started': [
			{ text: 'Introduction', link: 'introduction' },
		],
		'Reference': [
			{ text: 'CLI Options', link: 'cli-options' },
			{ text: 'Configuration', link: 'configuration' },
		],
		'Features': [
			{ text: 'Compress images to WebP', link: 'features/compress-images-to-webp' },
			{ text: 'Compress SVG', link: 'features/compress-svg' }
		],
		'Community': [{ text: 'Join us on Discord', link: 'https://discord.gg/zSHxuz2SMw' }],
	},
};