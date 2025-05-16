import axios from 'axios';

export async function getMotivationalQuote(): Promise<string> {
  try {
    const response = await axios.get('https://zenquotes.io/api/random');
    const quote = response.data[0];
    return `"${quote.q}" — ${quote.a}`;
  } catch (error) {
    console.error('Failed to fetch quote:', error);
    return 'You are amazing just the way you are!';
  }
}
