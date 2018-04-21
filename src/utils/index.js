export { default as colors } from './colors'
export { default as presets } from './presets'
export { default as typography, rhythm, scale, options } from './typography'

export const removeTrailingSlash = str => String(str).replace(/\/+$/, '')
