/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "node_modules/flowbite-react/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {},
  },
  // Note: neither plugin's component classes (btn/card/data-theme from
  // daisyUI, data-modal-target/etc from Flowbite) are actually used anywhere
  // in src/ - the site is built entirely with raw Tailwind utilities. Kept
  // both loaded since removing them is a separate cleanup, not a design fix,
  // but the duplicate `plugins` key below silently dropped Flowbite before -
  // only the second key survived in the object literal.
  plugins: [require("flowbite/plugin"), require("daisyui")],
};
