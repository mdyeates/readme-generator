function generateBadges(technology) {
  const badgeColor = {
    JavaScript: ["20232A", "FCDD32"],
    jQuery: ["0769AD", "white"],
    "Node.js": ["376e05", "white"],
    React: ["20232A", "61DAFB"],
    Bootstrap: ["563D7C", "white"],
    "Express.js": ["404D59", null],
    "Tailwind-CSS": ["38B2AC", "white"],
    MongoDB: ["4EA94B", "white"],
    Netlify: ["00C7B7", "white"],
    Heroku: ["430098", "white"],
    HTML5: ["E34F26", "white"],
    CSS3: ["1572B6", "white"],
    Sass: ["CC6699", "white"],
    PHP: ["777BB4", "white"],
    "Vue.js": ["35495E", "white"],
    Django: ["092E20", "white"],
    Laravel: ["FF2D20", "white"],
    MySQL: ["00000F", "white"],
  };

  return `- ![${technology}](https://img.shields.io/badge/${technology}-${badgeColor[technology][0]}?style=for-the-badge&logo=${technology}&logoColor=${badgeColor[technology][1]})\n`;
}

module.exports = generateBadges;
