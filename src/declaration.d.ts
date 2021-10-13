declare global {
  namespace NodeJS {
    interface ProcessEnv {
      GITHUB_AUTH_TOKEN: string;
      NODE_ENV: "development" | "production";
      PORT?: string;
      PWD: string;
    }
  }
}
declare module "react-router-dom";
declare module "query-string";
