import type { Config } from 'tailwindcss';
const defaultTheme = require('tailwindcss/defaultTheme');

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
    "./node_modules/flowbite/**/*.js",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter var', ...defaultTheme.fontFamily.sans],
      },
      colors: {
        transparent: 'transparent',
        white: '#ffffff',
        black: '#000000',
        'primary-900': '#001733',
        'primary-800': '#002F66',
        'primary-700': '#004899',
        'primary-600': '#0061CC',
        'primary-500': '#007AFF',
        'primary-400': '#3B98FF',
        'primary-300': '#75B6FF',
        'primary-200': '#B0D5FF',
        'primary-100': '#EBF4FF',
        'red-600': '#FF0000',
        'secondary-900': '#32FC00',
        'secondary-800': '#33FF00',
        'secondary-700': '#34F503',
        'secondary-600': '#3CEF0F',
        'secondary-500': '#3CEF0F',
        'secondary-400': '#41DA1B',
        'secondary-300': '#44AF28',
        'secondary-200': '#45CA24',
        'secondary-100': '#428D2F',
        'secondary-100-2': '#439D2C',
        'gray-100': '#f5f5f5',
        'gray-200': '#e0e0e0',
        'gray-300': '#c7c7c7',
        'gray-400': '#ababab',
        'gray-500': '#909090',
        'gray-600': '#757575',
        'gray-700': '#595959',
        'gray-800': '#424242',
        'gray-900': '#2b2b2b',
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [
    require('flowbite/plugin')
  ]
}

export default config
