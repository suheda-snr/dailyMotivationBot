function getCuteAddition(): string {
    const additions = [
      '🐣 Stay cozy!',
      '🐸 You got this!',
      '🌈 Breathe deep and smile.',
      '☕ Grab some coffee and go crush it!',
      '💖 You’re doing great :)',
      '🌼 Sending hugs!',
      '🌟 Shine bright like the star you are!',
      '🌻 Keep blooming, no matter what!',
      '💪 Believe in yourself—you’re unstoppable!',
      '🌊 Ride the waves and enjoy the journey.',
      '✨ Magic happens when you least expect it!',
      '🌸 Take a moment to appreciate the little things.',
      '🔥 Keep the fire in your heart alive!',
      '🎉 Celebrate every small victory!',
      '🌍 You make the world a better place!',
    ];
    return additions[Math.floor(Math.random() * additions.length)];
  }
  
  export async function buildMessage(quote: string): Promise<string> {
    return `${quote}\n\n${getCuteAddition()}`;
  }
  