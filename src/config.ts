import dotenv from 'dotenv';
dotenv.config();

const TOKEN = process.env.TOKEN as string;
const CLIENT_ID = process.env.CLIENT_ID as string;
const IMAGES_API_KEY = process.env.IMAGES_API_KEY as string;

export { TOKEN, CLIENT_ID, IMAGES_API_KEY };
