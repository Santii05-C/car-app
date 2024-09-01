/** @type { import("drizzle-kit").Config } */
export default {
  schema: "./schema.ts",
  dialect: "postgresql",
  dbCredentials: {
    url: "postgresql://Car-App_owner:Len4Rijay5fJ@ep-proud-shadow-a5utevj1.us-east-2.aws.neon.tech/Car-App?sslmode=require",
  },
};
