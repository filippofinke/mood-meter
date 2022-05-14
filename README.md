<h1 align="center">Welcome to mood-meter 👋</h1>

> Track a person's mood and get a notification when it changes, inspired by the Kira Meter from [How To Sell Drugs Online (Fast) TV Series](<https://en.wikipedia.org/wiki/How_to_Sell_Drugs_Online_(Fast)>)

### 🏠 [Homepage](https://github.com/filippofinke/mood-meter#readme)

<details>
 <summary>Demo</summary>
 
 <p align="center">
   <img src="https://user-images.githubusercontent.com/37296364/161615396-3b5b1912-6f46-44cb-9520-973544bf49ab.gif" alt="Demo">
 </p>
</details>

## IFTTT Support

You can set up an IFTTT webhook in the config file to receive notifications about the other person's mood change directly to your phone.

## Install

```sh
npm install
```

## Usage

```sh
npm run start
```

## Configuration

```js
{
  // Server port
  "PORT": 8080,
  "CONFIG": {
    // Emojis to show on the bar
    "emojis": ["🤬", "🥺", "😔", "😊", "🥰"],
    // Animations to execute when an emoji is selected, the order matters.
    "animations": [
      ["😡", "👿", "😈", "👺", "💢", "🤬"],
      ["😭", "😢", "😩"],
      ["😟", "☹️", "😞"],
      ["😊", "😄", "😃"],
      ["😍", "❤️", "😘", "💋"]
    ]
  }
}
```

### **.env file**
Make sure to rename the sample .env file to .env and change the webhook link.
Get your webhook for notifications from: https://ifttt.com/maker_webhooks/settings

## Heroku
[![Deploy](https://www.herokucdn.com/deploy/button.svg)](https://heroku.com/deploy?template=https://github.com/filippofinke/mood-meter)

## Author

👤 **Filippo Finke**

- Website: https://filippofinke.ch
- Github: [@filippofinke](https://github.com/filippofinke)
- LinkedIn: [@filippofinke](https://linkedin.com/in/filippofinke)

## 🤝 Contributing

Contributions, issues and feature requests are welcome!<br />Feel free to check [issues page](https://github.com/filippofinke/mood-meter/issues).

## Todo

- [ ] Add support to multiple users

## Show your support

Give a ⭐️ if this project helped you!

<a href="https://www.buymeacoffee.com/filippofinke">
  <img src="https://github.com/filippofinke/filippofinke/raw/main/images/buymeacoffe.png" alt="Buy Me A McFlurry">
</a>
