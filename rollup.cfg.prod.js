
import { nodeResolve } from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';
import postcss from "rollup-plugin-postcss";
import babel from '@rollup/plugin-babel';
import injectProcessEnv from 'rollup-plugin-inject-process-env';

const env = { 
    NODE_ENV: 'development',
    WIDTH:900, HEIGHT:500,
    TOP:20, RIGHT:30, BOTTOM:65, LEFT:220,
}

export default ['bar', 'scatter'].map((name, index) => ({
    input: `src/graphs/${name}/index.js`,
    output: {
        file: `../scripts/${name}.bundle.js`,
        format: 'iife',
    },
    plugins: [
        postcss({
            extensions: [".css"],
        }),
        nodeResolve({
            extensions: [".js"],
        }),
        babel({
            presets: ["@babel/preset-react"],
        }),
        commonjs(),
        injectProcessEnv(env),
    ]
}));