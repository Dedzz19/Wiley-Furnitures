/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        pink:'#ee0979',
        brown:'#ff6a00',
        lightGray:'#EDE8E4',
        border:'#737373', 
        FooterBg:'#E0D8D1' ,
        hr:'#7b7b7b',
        social:'#AD998E',
        Nav:'#999999',
        Navb:'#AEAEAE',
        smokeWhite:'#f2f2f2',
        offBlack:'#3b3b3b',
        console:'#E1E0E5',
        darkGray:'#5C5957',
        offWhite:'#f9f9f9'
      },
      width:{
        100:'18rem'
      },
      fontFamily:{
        OpenSans:["Open Sans",'sans-serif']
      },
      backgroundImage:{
        collections:"url(.//Img/All\ collections.png);"
      },
      height:{
        img:'510px'
      }
    },
  },
  plugins: [],
}

