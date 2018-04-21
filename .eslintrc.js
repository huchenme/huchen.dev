module.exports = {
  extends: [
    require.resolve('eslint-config-kentcdodds'),
    require.resolve('eslint-config-kentcdodds/jest'),
    require.resolve('eslint-config-kentcdodds/jsx-a11y'),
    require.resolve('eslint-config-kentcdodds/react')
  ],
  globals: {
    graphql: true
  },
  rules: {
    'import/no-extraneous-dependencies': 'off',
    'import/no-unassigned-import': 'off',
    'react/prop-types': 'off',
    'import/max-dependencies': 'off'
  }
}
