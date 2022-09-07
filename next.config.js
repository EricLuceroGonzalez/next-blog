/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
};

module.exports = nextConfig;
//

const { PHASE_DEVELOPMENT_SERVER } = require("next/constants");
module.exports = ([phase]) => {
  if (phase === PHASE_DEVELOPMENT_SERVER) {
    return {
      //add other configs here too
      env: {
        databaseName: process.env.DB_MONGO_USER,
        databasePass: process.env.DB_MONGO_PASS,
        database: "eventsUdemy-test",
      },
    };
  }
  return {
    //add other configs here too
    env: {
      databaseName: process.env.DB_MONGO_USER,
      databasePass: process.env.DB_MONGO_PASS,
      database: "eventsUdemy-test",
    },
  };
};
