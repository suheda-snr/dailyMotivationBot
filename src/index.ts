import { getMotivationalQuote } from './quoteFetcher';
import { buildMessage } from './messageBuilder';
import { sendSMS } from './smsSender';

async function run(): Promise<void> {
  const quote = await getMotivationalQuote();
  const message = await buildMessage(quote);
  await sendSMS(message);
}

run();
