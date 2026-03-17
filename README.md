🎨 Color Palette Generator

A simple and interactive web app that generates random color palettes and allows users to copy HEX color codes with a single click.

## 🚀 Features

* Generate 5 random colors instantly
* Click on a color box to copy its HEX value
* Copy button for each color
* Visual feedback when a color is copied (icon changes to ✔️)
* Clean and user-friendly interface

## 🛠️ Technologies Used

* HTML
* CSS
* JavaScript (Vanilla JS)

## 📂 Project Structure


project-folder/
│── index.html
│── style.css
│── script.js
│── README.md


## ⚙️ How It Works

1. Click the **"Generate"** button.
2. The app creates 5 random HEX colors.
3. Colors are displayed in palette boxes.
4. You can:

   * Click the **copy icon** to copy the HEX code
   * Click the **color box** itself to copy the HEX code
5. When copied, the icon briefly changes to a checkmark ✔️.

## 🧠 Code Overview

### Generate Palette

* `generatePalette()` creates an array of 5 random colors.

### Random Color Generator

* `generateRandomColor()` builds a HEX color using random values.

### Update UI

* `updatePaletteDisplay(colors)` updates the color boxes and HEX labels.

### Copy Functionality

* Uses `navigator.clipboard.writeText()` to copy color codes.
* `showCopySuccess()` provides visual feedback.


## 🔧 Installation & Usage

1. Clone the repository:

```
git clone https://github.com/your-username/color-palette-generator.git
```

2. Open the project folder:

```
cd color-palette-generator
```

3. Run the project:

* Open `index.html` in your browser

## 💡 Future Improvements

* Add ability to lock colors
* Export palette (PNG / JSON)
* Add color harmony options
* Save favorite palettes

## 📄 License

This project is open-source and free to use.


