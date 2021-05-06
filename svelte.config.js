import adapter from '@sveltejs/adapter-static';

const config = {
	kit: {
		// hydrate the <div id="svelte"> element in src/app.html
		target: '#svelte',
		hydrate: false,
		router: false,
		// ssr: false,
		adapter: adapter(),
	}
};

export default config;
