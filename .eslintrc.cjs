module.exports = {
  root: true,
  env: { node: true, browser: true, es2020: true },
  extends: [
    'eslint:recommended',
    'plugin:prettier/recommended',
    'plugin:react/recommended',
    'plugin:react/jsx-runtime',
    'plugin:react-hooks/recommended',
  ],
  ignorePatterns: ['dist', '.eslintrc.cjs', 'node_modules/'],
  parserOptions: { ecmaVersion: 'latest', sourceType: 'module' },
  settings: { react: { version: '18.2' } },
  plugins: [
    'react-refresh',
    'prettier'
  ],
  rules: {
    'react-refresh/only-export-components': [
      'warn',
      { allowConstantExport: true },
    ],
    
    quotes: [
      'warn',
      'single',
      {
        // 따옴표 사용을 설정합니다. 작은따옴표를 사용합니다.
        allowTemplateLiterals: true,
        // 템플릿 리터럴에서는 작은따옴표를 사용할 수 있도록 허용합니다.
        avoidEscape: true,
        // 이스케이프 문자를 사용하지 않아도 되도록 허용합니다.
      },
    ],
    
    'prettier/prettier': ['error', { singleQuote: true, endOfLine: 'auto' }],
    indent: ['error', 2, { SwitchCase: 1 }],
    // 들여쓰기를 설정합니다. 2칸을 들여쓰기합니다.
    // switch case 문에서는 추가로 1칸을 더 들여쓰기합니다.

    'comma-dangle': ['warn', 'only-multiline'],
    // 객체나 배열의 마지막 요소 뒤에 쉼표를 추가하며, 한 줄로 작성한 경우에는 쉼표를 붙이지 않습니다.
    'no-unused-vars': 'warn',
    // 사용되지 않는 변수가 있을 경우, 경고를 출력합니다.
    'no-multi-spaces': [
      // 공백문자의 사용을 제한하여 가독성을 높입니다.
      'warn',
      {
        exceptions: { Property: true },
        // 그러나 속성 선언에서는 예외적으로 공백문자를 허용하여 가독성을 높입니다.
      },
    ],
    'object-curly-spacing': ['warn', 'always'],
    // 객체 리터럴에서 중괄호 안쪽에 공백을 추가하도록 설정합니다.
  },
}

