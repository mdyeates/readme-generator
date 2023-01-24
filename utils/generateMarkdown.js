const generateBadges = require("./generateBadges");

function capitalise(str) {
  return str
    .split(" ")
    .map((name) => name[0].toUpperCase() + name.slice(1))
    .join(" ");
}

// function to generate markdown for README
function generateMarkdown(data) {
  const fullName = capitalise(data.fullName);
  const { repoName } = data;
  const title = capitalise(data.title);
  const { tagline } = data;
  const { description } = data;
  const { email } = data;
  const { githubUsername } = data;
  const { linkedinUsername } = data;
  const { license } = data;
  const { tests } = data;

  const technologies = data.technologies.map(generateBadges).join("\n");

  const credits = data.credits
    .trim()
    .split("\n")
    .filter((url) => url !== "")
    .map((url) => `- [${url}](${url})`)
    .join("\n");

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
    <a href="https://github.com/${githubUsername}/${repoName}">
      <img src="https://placehold.co/600x400?text=Placeholder" alt="Logo" width="200" height="200">
    </a>
    <h3 align="center">${title}</h3>
    <p align="center">
    <br/>
    ${tagline}
    <br/>
      <br/>
      ${title} is proudly built by: ${fullName}
      <br/>
      <br/>
      <a href="https://github.com/${githubUsername}/${repoName}"><strong>Explore the docs »</strong></a>
      <br/>
      <br/>
      <a href="https://${githubUsername}.github.io/${repoName}/">View Live Website</a>
      ·
      <a href="https://github.com/${githubUsername}/${repoName}/issues">Report Bug</a>
      ·
      <a href="https://github.com/${githubUsername}/${repoName}/issues">Request Feature</a>
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
  
  [![${title} Screen Shot][product-screenshot]](https://${githubUsername}.github.io/${repoName}/)
  
  <p align="right"><a href="#readme-top">back to top</a></p>
  
  ### Built With
  
  ${technologies}
  
  <p align="right"><a href="#readme-top">back to top</a></p>
  
  ### Description
  
  ${description}
  
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
   git clone https://github.com/${githubUsername}/${repoName}.git
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
  
    [![Functionality Gif][functionality-gif]](https://${githubUsername}.github.io/${repoName}/)

  <p align="right"><a href="#readme-top">back to top</a></p>
  
  ### Mobile Responsive
  
  - As demonstrated in the screenshot below, this application is designed to be responsive and adjust seamlessly to fit various screen sizes
  
    [![Responsiveness Screenshot][responsive-screenshot]](https://${githubUsername}.github.io/${repoName}/)
  
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

  If you have any inquiries, don't hesitate to reach out to me via socials or by sending an email to <a href="mailto:${email}">${email}</a>

  <a href="https://www.linkedin.com/in/${linkedinUsername}/">LinkedIn</a> | <a href="https://github.com/${githubUsername}/">GitHub</a>
  
  Project Link: [https://github.com/${githubUsername}/${repoName}](https://github.com/${githubUsername}/${repoName})
  
  <p align="right"><a href="#readme-top">back to top</a></p>
  
  <!-- ACKNOWLEDGMENTS -->
  
  ## Acknowledgments

  ${credits}
    
  <p align="right"><a href="#readme-top">back to top</a></p>
  
  <!-- MARKDOWN LINKS & IMAGES -->

  [contributors-shield]: https://img.shields.io/github/contributors/${githubUsername}/${repoName}.svg?style=for-the-badge
  [contributors-url]: https://github.com/${githubUsername}/${repoName}/graphs/contributors
  
  [forks-shield]: https://img.shields.io/github/forks/${githubUsername}/${repoName}.svg?style=for-the-badge
  [forks-url]: https://github.com/${githubUsername}/${repoName}/network/members
  
  [stars-shield]: https://img.shields.io/github/stars/${githubUsername}/${repoName}.svg?style=for-the-badge
  [stars-url]: https://github.com/${githubUsername}/${repoName}/stargazers
  
  [issues-shield]: https://img.shields.io/github/issues/${githubUsername}/${repoName}.svg?style=for-the-badge
  [issues-url]: https://github.com/${githubUsername}/${repoName}/issues
  
  [license-shield]: https://img.shields.io/github/license/${githubUsername}/${repoName}.svg?style=for-the-badge
  [license-url]: https://github.com/${githubUsername}/${repoName}/blob/main/LICENSE
  
  [linkedin-shield]: https://img.shields.io/badge/-LinkedIn-black.svg?style=for-the-badge&logo=linkedin&colorB=555
  [linkedin-url]: https://linkedin.com/in/${linkedinUsername}

  <!-- UPDATE PLACEHOLDER IMAGES HERE -->

  [product-screenshot]: https://placehold.co/600x400?text=Placeholder
  [functionality-gif]: https://placehold.co/600x400?text=Placeholder
  [responsive-screenshot]: https://placehold.co/600x400?text=Placeholder
`;
}

module.exports = generateMarkdown;
