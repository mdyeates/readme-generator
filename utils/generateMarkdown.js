// function to generate markdown for README
function generateMarkdown(data) {
  return `<a name="readme-top"></a>

  <!-- PROJECT SHIELDS -->
  
  [![Contributors][contributors-shield]][contributors-url]
  [![Forks][forks-shield]][forks-url]
  [![Stargazers][stars-shield]][stars-url]
  [![Issues][issues-shield]][issues-url]
  [![MIT License][license-shield]][license-url]
  
  <!-- PROJECT LOGO -->
  <br />
  <div align="center">
    <a href="https://github.com/${data.username}/${data.repoName}">
      <img src="assets/images/favicon.png" alt="Logo" width="200" height="200">
    </a>
    <h3 align="center">${data.title}</h3>
    <p align="center">
    <br/>
    ${data.shortDescription}
    <br/>
      <br/>
      ${data.title} is proudly built by: ${data.fullName}
      <br />
      <br/>
      <a href="https://github.com/${data.username}/${data.repoName}"><strong>Explore the docs »</strong></a>
      <br />
      <br />
      <a href="https://${data.username}.github.io/${data.repoName}/">View Live Website</a>
      ·
      <a href="https://github.com/${data.username}/${data.repoName}/issues">Report Bug</a>
      ·
      <a href="https://github.com/${data.username}/${data.repoName}/issues">Request Feature</a>
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
          <li><a href="#user-story">User Story</a></li>
          <li><a href="#description">Description</a></li>
          <li><a href="#apis">APIs</a></li>
          <li><a href="#design">Design</a></li>
          <li><a href="#future-development">Future Development</a></li>
        </ul>
      </li>
      <li>
          <a href="#usage">Usage</a>
        <ul>
          <li><a href="#functionality">Functionality</a></li>
          <li><a href="#mobile-responsive">Mobile Responsive</a></li>
        </ul>
      </li>
      <li><a href="#contributing">Contributing</a></li>
      <li><a href="#license">License</a></li>
      <li><a href="#contact">Contact</a></li>
      <li><a href="#acknowledgments">Acknowledgments</a></li>
    </ol>
  </details>
  
  <!-- ABOUT THE PROJECT -->
  
  ## About The Project
  
  ### Screenshot
  
  [![Product Name Screen Shot][product-screenshot]](https://${data.username}.github.io/${data.repoName}/)
  
  <p align="right"><a href="#readme-top">back to top</a></p>
  
  ### Built With
  
  - [![${data.technologies}][bootstrap.com]][bootstrap-url]
  - [![JQuery][jquery.com]][jquery-url]
  
  <p align="right"><a href="#readme-top">back to top</a></p>
  
  ### User Story
  
  <p align="right"><a href="#readme-top">back to top</a></p>
  
  ### Description
  
  ${data.longDescription}
  
  ### APIs
    
  ### Design
  
  ### Future Development
  
    
  <p align="right"><a href="#readme-top">back to top</a></p>
  
  <!-- USAGE EXAMPLES -->
  
  ## Usage
  
  ### Functionality
  
  - The following animation demonstrates the applications functionality
  
    ![Functionality Gif](assets/images/functionality.gif)
  
  <p align="right"><a href="#readme-top">back to top</a></p>
  
  ### Mobile Responsive
  
  - As demonstrated in the screenshot below, this application is designed to be responsive and adjust seamlessly to fit various screen sizes
  
    ![Responsiveness Screenshot](assets/images/responsive-screenshot.png)
  
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
  
  <!-- LICENSE -->
  
  ## License
  
  Distributed under the ${data.license} License. See \`LICENSE.md\` for more information.
  
  <p align="right"><a href="#readme-top">back to top</a></p>
  
  <!-- CONTACT -->
  
  ## Contact
  
  <a href="https://www.linkedin.com/in/${data.linkedInUsername}/">Michael Yeates</a>
  
  Project Link: [https://github.com/${data.username}/${data.repoName}](https://github.com/${data.username}/${data.repoName})
  
  <p align="right"><a href="#readme-top">back to top</a></p>
  
  <!-- ACKNOWLEDGMENTS -->
  
  ## Acknowledgments
  
  - [TomTom Routing API](https://developer.tomtom.com/routing-api/documentation/product-information/introduction)
  - [TomTom Reverse Geocoding API](https://developer.tomtom.com/reverse-geocoding-api/documentation/product-information/introduction)
  - [AQI API](https://aqicn.org/api/)
  - [Leaflet.js](https://leafletjs.com/)
  - [Jawg Maps](https://www.jawg.io/en/)
  
  <p align="right"><a href="#readme-top">back to top</a></p>
  
  <!-- MARKDOWN LINKS & IMAGES -->
  <!-- https://www.markdownguide.org/basic-syntax/#reference-style-links -->
  
  [contributors-shield]: https://img.shields.io/github/contributors/${data.username}/${data.repoName}.svg?style=for-the-badge
  [contributors-url]: https://github.com/${data.username}/${data.repoName}/graphs/contributors
  [forks-shield]: https://img.shields.io/github/forks/${data.username}/${data.repoName}.svg?style=for-the-badge
  [forks-url]: https://github.com/${data.username}/${data.repoName}/network/members
  [stars-shield]: https://img.shields.io/github/stars/${data.username}/${data.repoName}.svg?style=for-the-badge
  [stars-url]: https://github.com/${data.username}/${data.repoName}/stargazers
  [issues-shield]: https://img.shields.io/github/issues/${data.username}/${data.repoName}.svg?style=for-the-badge
  [issues-url]: https://github.com/${data.username}/${data.repoName}/issues
  [license-shield]: https://img.shields.io/github/license/${data.username}/${data.repoName}.svg?style=for-the-badge
  [license-url]: https://github.com/${data.username}/${data.repoName}/blob/master/LICENSE.txt
  [linkedin-url]: https://linkedin.com/in/${data.linkedInUsername}
  [product-screenshot]: assets/images/screenshot.png
  [leafletjs.com]: https://img.shields.io/badge/Leaflet.js-FFFFFF?style=for-the-badge&logo=leaflet&logoColor=green
  [leaflet-url]: https://leafletjs.com/
  [bootstrap.com]: https://img.shields.io/badge/Bootstrap-563D7C?style=for-the-badge&logo=bootstrap&logoColor=white
  [bootstrap-url]: https://getbootstrap.com
  [jquery.com]: https://img.shields.io/badge/jQuery-0769AD?style=for-the-badge&logo=jquery&logoColor=white
  [jquery-url]: https://jquery.com
  
`;
}

module.exports = generateMarkdown;
