import dotenv from 'dotenv';
dotenv.config();

export const TWILIO_ACCOUNT_SID = process.env.TWILIO_ACCOUNT_SID || '';
export const TWILIO_AUTH_TOKEN = process.env.TWILIO_AUTH_TOKEN || '';
export const FROM_NUMBER = process.env.FROM_NUMBER || '';
export const TO_NUMBER = process.env.TO_NUMBER || '';
