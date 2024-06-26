import daisyui from "daisyui";

/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        'body-img': 'url(https://lumiere-a.akamaihd.net/v1/images/background-stars-desktop_v2_96b6d74a.jpeg?region=0%2C0%2C2048%2C1600)',
        'logo-block': 'url(https://lumiere-a.akamaihd.net/v1/images/sw_logo_stacked_2x-52b4f6d33087_7ef430af.png?region=0,0,586,254)',
        'logo-line': 'url(https://lumiere-a.akamaihd.net/v1/images/sw_nav_logo_mobile_659fef1a_1_99c6e87c.png?region=0,0,312,32)',
        'user-icon': 'url(https://static-mh.content.disney.io/matterhorn/assets/starwars/navigation/SW_Oneid_User-85043c6786ab.svg)',
        'login': 'url(https://cdn.registerdisney.go.com/v4/asset/bundler/STARWARS/v4/images/v1/starwars-background-web.webp)',
        'detail': 'url(https://images.alphacoders.com/107/107763.jpg)'
      },
      fontFamily: {
        'kanit': ['Kanit', 'sans-serif'],
        'orbitron': ['Orbitron', 'sans-serif'],
      },
      backgroundSize: {
        'full-auto': '100% auto'
      }
    },
  },
  plugins: [daisyui],
};
