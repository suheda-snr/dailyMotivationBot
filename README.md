# 💌 dailyMotivationBot

A lightweight Node.js + TypeScript bot that sends you a daily motivational SMS every morning at **7 AM** using Twilio and GitHub Actions.

> Includes a motivational quote and a cute encouragement 🐾


## 🌟 **Start your day with positivity!** 🌈


![Motivational GIF](https://www.icegif.com/wp-content/uploads/2023/09/icegif-162.gif)


## 🙋‍♀️ Why I Made This

I created this bot to bring a small spark of joy and motivation to start each day. It’s also a great way to practice automation, GitHub Actions, and using third-party APIs like Twilio and ZenQuotes.

---

## ✨ Features

- Fetches a daily motivational quote from [ZenQuotes API](https://zenquotes.io/)
- Increases the dose of positivity with an additional heartwarming message
- Sends an SMS using Twilio
- Runs automatically every day at 7 AM via GitHub Actions

---

## 📦 Requirements

- Node.js (v18 or higher recommended)
- npm (v9+)
- A [Twilio](https://www.twilio.com/) account (can be a trial)
- A verified phone number (if using a Twilio trial)
- GitHub repository to run scheduled workflows
- `ts-node` for TypeScript execution

---

## 🛠️ Setup

### 1. Clone the repository

```bash
git clone https://github.com/suheda-snr/dailyMotivationBot.git
cd dailyMotivationBot
```

### 2. Install dependencies

```bash
npm install
```

### 3. Create a `.env` file

Create a `.env` file in the project root with the following content:

```env
TWILIO_ACCOUNT_SID=your_account_sid
TWILIO_AUTH_TOKEN=your_auth_token
FROM_NUMBER=your_twilio_phone_number
TO_NUMBER=your_verified_phone_number
```

> **Note:** If you're using a Twilio trial account, make sure to verify your phone number in the Twilio Console.

---

## 🧪 Testing Locally

To send a test SMS:

```bash
npm run start
```

This will immediately send the message to your phone.

---

## 🤖 Automation with GitHub Actions

This project includes a GitHub Actions workflow that runs daily at **07:00 UTC** and sends the motivational SMS.

### Set Up Repository Secrets

1. Go to your repository on GitHub.
2. Navigate to: **Settings → Secrets and variables → Actions**.
3. Add the following secrets:

| Name                 | Value                     |
|----------------------|---------------------------|
| `TWILIO_ACCOUNT_SID` | Your Twilio SID           |
| `TWILIO_AUTH_TOKEN`  | Your Twilio token         |
| `FROM_NUMBER`        | Your Twilio phone number  |
| `TO_NUMBER`          | Your personal phone number|

Once added, GitHub Actions will automatically run the script every day at the scheduled time.

---

## 🛠️ Troubleshooting

### No SMS received?
- Check GitHub Actions run logs under the **Actions** tab.
- Ensure your Twilio trial number is verified and allowed to send messages to your number.

---

Stay positive and inspired every day! 🌟