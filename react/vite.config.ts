import { defineConfig } from 'vite';
import dts from 'vite-plugin-dts';
import { resolve } from 'path';

export default defineConfig({
    build: {
        lib: {
            entry: resolve(__dirname, 'src/index.ts'),
            name: 'ReactConfettiCannon',
            fileName: 'index',
            formats: ['es', 'cjs', 'umd']
        },
        rollupOptions: {
            external: ['react', 'react-dom', '@jojovms/confetti-cannon-core'],
            output: {
                globals: {
                    react: 'React',
                    'react-dom': 'ReactDOM',
                    '@jojovms/confetti-cannon-core': 'confetto'
                }
            }
        }
    },
    plugins: [dts({ insertTypesEntry: true })]
});
