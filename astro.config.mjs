// import { defineConfig } from 'astro/config';

// https://astro.build/config
// export default defineConfig({});
export default {
    markdown: {
        shikiConfig: {
            theme: 'palenight',
            langs: ['rust'],
            wrap: true,
        },
    },
}
