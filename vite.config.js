import {sveltekit} from '@sveltejs/kit/vite';
import {defineConfig} from 'vite';
import TurboConsole from 'unplugin-turbo-console/vite'

export default defineConfig({
    plugins: [
        TurboConsole({
            /* options here */
        }),
        sveltekit()
    ]
});
