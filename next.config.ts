import { NextConfig } from "next";
import createNextIntlPlugin from "next-intl/plugin";

const env = process.env;
const BASE_URL = `${env.API_HTTP}://${env.GATEWAY_HOST}`;

const withNextIntl = createNextIntlPlugin({
  experimental: {
    createMessagesDeclaration: "./messages/en.json",
  },
});

const config: NextConfig = {
  output: "standalone",
  env: {
    BASE_URL: `${BASE_URL}/${env.COMMON_PREFIX}`,
  },
  experimental: {
    serverActions: { allowedOrigins: ["*"], bodySizeLimit: "10mb" },
  },
  images: {
    domains: ["cdn.10minuteschool.com", "s3.ap-southeast-1.amazonaws.com"],
  },
};

export default withNextIntl(config);
