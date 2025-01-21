/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  safelist: [
    'custom-toast',
    'custom-toast-body',
    'bg-[#1C1C1C]',
    'text-[#C6A55C]',
    'font-semibold',
    'rounded-lg',
    'shadow-lg',
    'max-w-[80%]',
    'sm:max-w-[400px]',
    'mx-auto',
    'my-2',
    'border',
    'border-[#C6A55C]',
    'p-4',
    'text-sm',
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}