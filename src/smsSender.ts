import { Twilio } from 'twilio';
import { TWILIO_ACCOUNT_SID, TWILIO_AUTH_TOKEN, FROM_NUMBER, TO_NUMBER } from './config';

const client = new Twilio(TWILIO_ACCOUNT_SID, TWILIO_AUTH_TOKEN);

export async function sendSMS(message: string): Promise<void> {
  try {
    await client.messages.create({
      body: message,
      from: FROM_NUMBER,
      to: TO_NUMBER,
    });
    console.log('Motivation message sent successfully!');
  } catch (error) {
    console.error('Failed to send SMS:', error);
  }
}
