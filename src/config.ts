import dotenv from 'dotenv';
dotenv.config();

const TOKEN = process.env.TOKEN as string;
const CLIENT_ID = process.env.APP_ID as string;
const IMAGES_API_KEY = process.env.IMAGES_API_KEY as string;
const BASE_URL = process.env.BASE_URL as string;

export { TOKEN, CLIENT_ID, IMAGES_API_KEY, BASE_URL };
