function getCuteAddition(): string {
    const additions = [
      '🐣 Stay cozy!',
      '🐸 You got this!',
      '🌈 Breathe deep and smile.',
      '☕ Grab some coffee and go crush it!',
      '🐾 You’re doing great 💖',
      '🌼 Sending hugs!',
    ];
    return additions[Math.floor(Math.random() * additions.length)];
  }
  
  export async function buildMessage(quote: string): Promise<string> {
    return `${quote}\n\n${getCuteAddition()}`;
  }
  