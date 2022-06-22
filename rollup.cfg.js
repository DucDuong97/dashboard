
import { nodeResolve } from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';
import postcss from "rollup-plugin-postcss";
import serve from "rollup-plugin-serve";
import livereload from "rollup-plugin-livereload";
import babel from '@rollup/plugin-babel';
import injectProcessEnv from 'rollup-plugin-inject-process-env';

const graph = process.env.GRAPH;

const env = { 
    NODE_ENV: 'development',
    WIDTH:900, HEIGHT:500,
    TOP:20, RIGHT:30, BOTTOM:65, LEFT:220,
}

export default {
    input: `src/graphs/${graph}/index.js`,
    output: {
        file: 'build/bundle.js',
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
        serve({
            open: true,
            verbose: true,
            contentBase: ["", "public"],
            host: "localhost",
            port: 3000,
        }),
        livereload({ watch: "build" }),
    ]
};