import { betterAuth } from "better-auth";
import { mongodbAdapter } from "better-auth/adapters/mongodb";
import { MongoClient } from "mongodb";

const client = new MongoClient(process.env.MONGODB_URI);

const db = client.db();

export const auth = betterAuth({
  database: mongodbAdapter(db),
  trustedOrigins: [
    "http://localhost:3000",
    "https://my-eighth-assignment-9gtf.vercel.app",
    "https://my-eighth-assignment-9gtf-git-main-smasif404-3525s-projects.vercel.app",
  ],
  emailAndPassword: {
    enabled: true,
  },
  socialProviders: {
    google: {
      clientId: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    },
  },
});
