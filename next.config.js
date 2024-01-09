module.exports = {
  reactStrictMode: true,
  images: {
    domains: ["reqres.in"],
  },
  async rewrites() {
    return [
      {
        source: "/api/getIpInfo",
        destination: "https://ipinfo.io/json?token=0567502d77f05a",
      },
    ];
  },
};

// module.exports = {
//     reactStrictMode: true,
//     images: {
//         domains: ['reqres.in'],
//     },
//     env: {
//         MYSQL_HOST: 'localhost',
//         MYSQL_PORT: '3306',
//         MYSQL_DATABASE: 'nodejsx',
//         MYSQL_USER: 'root',
//         MYSQL_PASSWORD: 'root',

//         CURLOPT_USERNAME: 'nodejsx@orange.fr',
//         CURLOPT_PASSWORD: 'gJS5vzm3BND1CFj2',
//         CURLOPT_MAIL_FROM: 'nodejsx@orange.fr',

//         CURLOPT_MAIL_RECEIVED_MESSAGE: 'nodejsx@orange.fr',
//         FRONT_URL: 'https://youthful-nash.5-250-178-73.plesk.page/',
//         API_BASE_URL: "https://youthful-nash.5-250-178-73.plesk.page/",
//         // FRONT_URL: 'localhost:3000/',
//         // API_BASE_URL: "localhost:3000/",
//         ZOHO_HOST: "smtp.zoho.eu",
//         ZOHO_PORT: 587,
//         ZOHO_USER: "nodejsx@orange.fr",
//         ZOHO_PASSWORD: "jacque@",
//         ZOHO_MAIL_RECEIVED_MESSAGE: "khaled.wiq@gmail.com",
//         // APP_URL: "https://maxiconcour.com/",
//         APP_URL: "http://localhost:3000/",
//     },
// };
