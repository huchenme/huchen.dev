module.exports = {
  extends: [
    require.resolve('eslint-config-kentcdodds'),
    require.resolve('eslint-config-kentcdodds/jest'),
    require.resolve('eslint-config-kentcdodds/jsx-a11y'),
    require.resolve('eslint-config-kentcdodds/react')
  ],
  rules: {
    'import/no-extraneous-dependencies': 'off',
    'import/no-unassigned-import': 'off',
    'react/prop-types': 'off',
    'import/max-dependencies': 'off',
    'babel/no-unused-expressions': ['error', { allowTaggedTemplates: true }]
  }
}
