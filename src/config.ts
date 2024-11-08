import dotenv from 'dotenv';
dotenv.config();

const TOKEN = process.env.TOKEN as string;
const CLIENT_ID = process.env.APP_ID as string;
const IMAGES_BASE_URL = process.env.IMAGES_BASE_URL as string;
const IMAGES_API_KEY = process.env.IMAGES_API_KEY as string;
const LLM_BASE_URL = process.env.LLM_BASE_URL as string;
const LLM_API_KEY = process.env.LLM_API_KEY as string;
const LLM_MODEL = process.env.LLM_MODEL as string;
const LLM_SYSTEM_MESAGE = process.env.LLM_SYSTEM_MESSAGE as string;
const LLM_USER_PROMPT = process.env.LLM_USER_PROMPT as string;

export {
  TOKEN,
  CLIENT_ID,
  IMAGES_API_KEY,
  IMAGES_BASE_URL,
  LLM_BASE_URL,
  LLM_API_KEY,
  LLM_MODEL,
  LLM_SYSTEM_MESAGE,
  LLM_USER_PROMPT
};
