module.exports = {
  future: {
    // removeDeprecatedGapUtilities: true,
    // purgeLayersByDefault: true,
  },
  purge: [],
  theme: {
    extend: {
      colors: {
        'light-wisteria': '#b993d6',
        'chetwode-blue': '#8ca6db'
      },
      spacing: {
        '128': '32rem'
      }
    },
  },
  variants: {
    translate: ['responsive', 'hover', 'focus', 'motion-safe'],
    animation: ['responsive', 'motion-safe', 'motion-reduce'],
    backgroundColor: ['responsive', 'hover', 'focus', 'active']
  },
  plugins: [],
}
