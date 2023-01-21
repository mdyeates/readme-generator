// function to generate markdown for README
function generateMarkdown(data) {
  const full_name = capitalise(data.full_name);
  const repo_name = data.repo_name;
  const project_title = capitalise(data.title);
  const project_tagline = data.tagline;
  const project_description = data.description;
  const email_address = data.email;
  const github_username = data.github_username;
  const linkedin_username = data.linkedin_username;
  const license = data.license;
  const tests = data.tests;

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

  let technologies = data.technologies
    .map(
      (technology) =>
        `![${technology}](https://img.shields.io/badge/${technology}-${badgeColor[technology][0]}?style=for-the-badge&logo=${technology}&logoColor=${badgeColor[technology][1]})\n`
    )
    .join("\n");

  let credits = data.credits.map((credit_url) => `- [${credit_url}](${credit_url})`).join("\n");

  return `<a name="readme-top"></a>

  <!-- PROJECT SHIELDS -->
  
  [![Contributors][contributors-shield]][contributors-url]
  [![Forks][forks-shield]][forks-url]
  [![Stargazers][stars-shield]][stars-url]
  [![Issues][issues-shield]][issues-url]
  [![${license} License][license-shield]][license-url]
  [![LinkedIn][linkedin-shield]][linkedin-url]
  
  <!-- PROJECT LOGO -->

  <br />
  <div align="center">
    <a href="https://github.com/${github_username}/${repo_name}">
      <img src="https://placehold.co/600x400?text=Placeholder" alt="Logo" width="200" height="200">
    </a>
    <h3 align="center">${project_title}</h3>
    <p align="center">
    <br/>
    ${project_tagline}
    <br/>
      <br/>
      ${project_title} is proudly built by: ${full_name}
      <br/>
      <br/>
      <a href="https://github.com/${github_username}/${repo_name}"><strong>Explore the docs »</strong></a>
      <br/>
      <br/>
      <a href="https://${github_username}.github.io/${repo_name}/">View Live Website</a>
      ·
      <a href="https://github.com/${github_username}/${repo_name}/issues">Report Bug</a>
      ·
      <a href="https://github.com/${github_username}/${repo_name}/issues">Request Feature</a>
    </p>
  </div>
  
  <!-- TABLE OF CONTENTS -->

  <details>
    <summary>Table of Contents</summary>
    <ol>
      <li>
        <a href="#about-the-project">About The Project</a>
        <ul>
          <li><a href="#screenshot">Screenshot</a></li>
          <li><a href="#built-with">Built With</a></li>
          <li><a href="#description">Description</a></li>
        </ul>
      </li>
      <li>
          <a href="#getting-started">Getting Started</a>
        <ul>
          <li><a href="#prerequisites">Prerequisites</a></li>
          <li><a href="#installation">Installation</a></li>
        </ul>
      </li>
      <li>
          <a href="#usage">Usage</a>
        <ul>
          <li><a href="#functionality">Functionality</a></li>
          <li><a href="#mobile-responsive">Mobile Responsive</a></li>
        </ul>
      </li>
      <li><a href="#license">License</a></li>
      <li><a href="#contributing">Contributing</a></li>
      <li><a href="#tests">Tests</a></li>
      <li><a href="#questions">Questions</a></li>
      <li><a href="#acknowledgments">Acknowledgments</a></li>
    </ol>
  </details>
  
  <!-- ABOUT THE PROJECT -->
  
  ## About The Project
  
  ### Screenshot
  
  [![Product Name Screen Shot][product-screenshot]](https://${github_username}.github.io/${repo_name}/)
  
  <p align="right"><a href="#readme-top">back to top</a></p>
  
  ### Built With
  
  ${technologies}
  
  <p align="right"><a href="#readme-top">back to top</a></p>
  
  ### Description
  
  ${project_description}
  
  <p align="right"><a href="#readme-top">back to top</a></p>

<!-- GETTING STARTED -->

## Getting Started

To get a local copy up and running follow these simple example steps.
  
  ### Prerequisites

* npm
  \`\`\`sh
  npm install npm@latest -g
  \`\`\`

### Installation

1. Clone the repo
   \`\`\`sh
   git clone https://github.com/${github_username}/${repo_name}.git
   \`\`\`
2. Install NPM packages
   \`\`\`sh
   npm install
   \`\`\`
  
  <p align="right"><a href="#readme-top">back to top</a></p>
  
  <!-- USAGE EXAMPLES -->
  
  ## Usage
  
  ### Functionality
  
  - The following animation demonstrates the applications functionality
  
    [![Functionality Gif][functionality-gif]](https://${github_username}.github.io/${repo_name}/)

  <p align="right"><a href="#readme-top">back to top</a></p>
  
  ### Mobile Responsive
  
  - As demonstrated in the screenshot below, this application is designed to be responsive and adjust seamlessly to fit various screen sizes
  
    [![Responsiveness Screenshot][responsive-screenshot]](https://${github_username}.github.io/${repo_name}/)
  
  <p align="right"><a href="#readme-top">back to top</a></p>

  <!-- LICENSE -->
  
  ## License
  
  Distributed under the ${license} License. See \`LICENSE.md\` for more information.
  
  <p align="right"><a href="#readme-top">back to top</a></p>
  
  <!-- CONTRIBUTING -->
  
  ## Contributing
  
  Contributions are what make the open source community such an amazing place to learn, inspire, and create. Any contributions you make are **greatly appreciated**.
  
  If you have a suggestion that would make this better, please fork the repo and create a pull request. You can also simply open an issue with the tag "enhancement".
  Don't forget to give the project a star! Thanks again!
  
  1. Fork the Project
  2. Create your Feature Branch (\`git checkout -b feature/AmazingFeature\`)
  3. Commit your Changes (\`git commit -m 'Add some AmazingFeature'\`)
  4. Push to the Branch (\`git push origin feature/AmazingFeature\`)
  5. Open a Pull Request
  
  <p align="right"><a href="#readme-top">back to top</a></p>

  <!-- TESTS -->
  
  ## Tests

  ${tests}
    
  <p align="right"><a href="#readme-top">back to top</a></p>
  
  <!-- QUESTIONS -->
  
  ## Questions

  If you have any inquiries, don't hesitate to reach out to me via socials or by sending an email to <a href="mailto:${email_address}">${email_address}</a>

  <a href="https://www.linkedin.com/in/${linkedin_username}/">LinkedIn</a> | <a href="https://github.com/${github_username}/">GitHub</a>
  
  Project Link: [https://github.com/${github_username}/${repo_name}](https://github.com/${github_username}/${repo_name})
  
  <p align="right"><a href="#readme-top">back to top</a></p>
  
  <!-- ACKNOWLEDGMENTS -->
  
  ## Acknowledgments

  ${credits}
    
  <p align="right"><a href="#readme-top">back to top</a></p>
  
  <!-- MARKDOWN LINKS & IMAGES -->

  [contributors-shield]: https://img.shields.io/github/contributors/${github_username}/${repo_name}.svg?style=for-the-badge
  [contributors-url]: https://github.com/${github_username}/${repo_name}/graphs/contributors
  
  [forks-shield]: https://img.shields.io/github/forks/${github_username}/${repo_name}.svg?style=for-the-badge
  [forks-url]: https://github.com/${github_username}/${repo_name}/network/members
  
  [stars-shield]: https://img.shields.io/github/stars/${github_username}/${repo_name}.svg?style=for-the-badge
  [stars-url]: https://github.com/${github_username}/${repo_name}/stargazers
  
  [issues-shield]: https://img.shields.io/github/issues/${github_username}/${repo_name}.svg?style=for-the-badge
  [issues-url]: https://github.com/${github_username}/${repo_name}/issues
  
  [license-shield]: https://img.shields.io/github/license/${github_username}/${repo_name}.svg?style=for-the-badge
  [license-url]: https://github.com/${github_username}/${repo_name}/blob/main/LICENSE
  
  [linkedin-shield]: https://img.shields.io/badge/-LinkedIn-black.svg?style=for-the-badge&logo=linkedin&colorB=555
  [linkedin-url]: https://linkedin.com/in/${linkedin_username}

  <!-- UPDATE PLACEHOLDER IMAGES HERE -->

  [product-screenshot]: https://placehold.co/600x400?text=Placeholder
  [functionality-gif]: https://placehold.co/600x400?text=Placeholder
  [responsive-screenshot]: https://placehold.co/600x400?text=Placeholder
`;
}

function capitalise(str) {
  return str
    .split(" ")
    .map((name) => name[0].toUpperCase() + name.slice(1))
    .join(" ");
}

module.exports = generateMarkdown;
