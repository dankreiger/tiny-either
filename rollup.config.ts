import babel from '@rollup/plugin-babel';
import commonjs from '@rollup/plugin-commonjs';
import resolve from '@rollup/plugin-node-resolve';
import { terser } from 'rollup-plugin-terser';
import typescript from 'rollup-plugin-typescript2';
const pkg = require('./package.json');
const babelRuntimeVersion = pkg.devDependencies['@babel/runtime'].replace(
  /^[^0-9]*/,
  ''
);

const config = [
  {
    file: pkg.main,
    format: 'cjs',
  },
  {
    file: pkg.module,
    format: 'es',
  },
].map((output) => ({
  input: 'src/index.ts',
  output,
  // Rollup has treeshaking by default, but we can optimize it further...
  treeshake: {
    // We assume reading a property of an object never has side-effects.
    // This will remove getters and setters defined directly on objects.
    // Any getters or setters defined on classes will not be effected.
    //
    // @example
    //
    // const foo = {
    //  get bar() {
    //    console.log('effect');
    //    return 'bar';
    //  }
    // }

    propertyReadSideEffects: false,
  },
  plugins: [
    resolve(),
    commonjs(),
    typescript({
      tsconfigDefaults: {
        exclude: [
          // all TS test files, regardless whether co-located or in test/ etc
          '**/*.spec.ts',
          '**/*.test.ts',
          '**/*.spec.tsx',
          '**/*.test.tsx',
          // TS defaults below
          'node_modules',
        ],
        compilerOptions: {
          sourceMap: false,
          declaration: false,
          jsx: 'react',
        },
      },
      tsconfigOverride: {
        compilerOptions: {
          target: 'esnext',
          declaration: false,
          declarationMap: false,
          emitDeclarationOnly: false,
        },
      },
    }),
    babel({
      exclude: 'node_modules/**',
      plugins: [
        '@babel/plugin-transform-runtime',
        { version: babelRuntimeVersion, useESModules: output.format === 'es' },
      ],
      babelHelpers: 'runtime',
    }),
    terser({
      output: { comments: false },
      compress: {
        unsafe: true,
        keep_infinity: true,
        pure_getters: true,
        passes: 10,
      },
      ecma: output.format === 'es' ? 2020 : 5,
    }),
  ],
  external: [...Object.keys(pkg.devDependencies)],
}));

export default config;
