# Food Order Countdown 🍔⏱️

A responsive food order status application built with React and Tailwind CSS.

The app simulates a food order preparation process with a countdown timer, animated progress circle, order code, and a notification when the order is ready.

## ✨ Features

* ⏱️ Countdown timer for food preparation
* 🔄 Reset the order and generate a new order code
* 🎨 Animated circular progress indicator
* 👨‍🍳 Lottie chef animation
* 🔊 Plays a notification sound when the order is ready
* 🎉 Displays a ready-order modal
* 📱 Fully responsive design for mobile, tablet, and desktop
* 🧩 Component-based React architecture
* 🎨 Modern UI built with Tailwind CSS

## 🛠️ Technologies

* **React**
* **JavaScript**
* **Tailwind CSS**
* **Vite**
* **React Icons**
* **DotLottie**
* **Lottie Animation**

## 🎨 Progress Circle

The progress indicator is built with SVG.

It uses:

* SVG circles
* `strokeDasharray`
* `strokeDashoffset`
* SVG gradient
* CSS transitions

The progress percentage is calculated from the remaining countdown time:

```js
const progress = ((DURATION - timerDown) / DURATION) * 100;
```

The progress circle also contains an animated chef illustration using DotLottie.

## 📱 Responsive Design

The application follows a mobile-first approach using Tailwind CSS.

The layout adapts to:

* 📱 Mobile devices
* 📲 Tablets
* 💻 Desktop screens

Responsive sizing is applied to the countdown, progress circle, animation, buttons, spacing, typography, and modal.
