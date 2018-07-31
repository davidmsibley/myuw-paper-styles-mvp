import { rollup } from 'rollup';
import html from 'rollup-plugin-html';
import minify from 'rollup-plugin-minify-es';
import resolve from 'rollup-plugin-node-resolve';

let fileName = 'myuw-paper-styles';
let objName = 'MyUWPaperStyles';


let plugins = {
  full: [
    html({
      include: `src/*.html`,
      htmlMinifierOptions: {
        collapseWhitespace: true,
        collapseBooleanAttributes: true,
        conservativeCollapse: true
      }
    })
  ],
  min: [
    html({
      include: `src/*.html`,
      htmlMinifierOptions: {
        collapseWhitespace: true,
        collapseBooleanAttributes: true,
        conservativeCollapse: true
      }
    }),
    minify({
      output: {
        wrap_iife: true
      }
    })
  ]
};


export default [
  {
    input: `demo/demo.js`,
    plugins: [
      resolve()
    ],
    output: {
      file: `demo/dist/demo.mjs`,
      format: 'es'
    }
  },
  {
    input: `src/madison-theme.js`,
    plugins: plugins.full,
    output: {
      file: `demo/dist/${fileName}.js`,
      name: objName,
      format: 'iife'
    }
  },
  {
    input: `src/madison-theme.js`,
    plugins: plugins.full,
    output: {
      file: `demo/dist/${fileName}.mjs`,
      name: objName,
      format: 'es'
    }
  },
  {
    input: `src/madison-theme.js`,
    plugins: plugins.full,
    output: {
      file: `dist/${fileName}.js`,
      name: objName,
      format: 'iife'
    }
  },
  {
    input: `src/madison-theme.js`,
    plugins: plugins.min,
    output: {
      file: `dist/${fileName}.min.js`,
      name: objName,
      format: 'iife'
    }
  },
  {
    input: `src/madison-theme.js`,
    plugins: plugins.full,
    output: {
      file: `dist/${fileName}.mjs`,
      name: objName,
      format: 'es'
    }
  },
  {
    input: `src/madison-theme.js`,
    plugins: plugins.min,
    output: {
      file: `dist/${fileName}.min.mjs`,
      name: objName,
      format: 'es'
    }
  },
];
