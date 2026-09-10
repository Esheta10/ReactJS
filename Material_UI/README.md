# Material UI Components & Light/Dark Mode App (React + Vite)

A modern React application built with **Material UI (MUI)**, featuring various pre-built component showcases and a fully functional **Light/Dark Theme Toggle**.
---

<img width="891" height="299" alt="image" src="https://github.com/user-attachments/assets/7386207a-18ec-4bec-89f2-a3be4ced0008" />
<img width="811" height="259" alt="image" src="https://github.com/user-attachments/assets/9e94d023-0253-4718-ab7b-94a5d3d2b8dc" />


## 🌟 Features

1. **Material UI Components Showcase**: Includes styled buttons, file upload components, autocomplete, and sliders.
2. **Light/Dark Mode Theme Toggle**: Seamlessly switch between light and dark themes across the entire application using MUI's `ThemeProvider` and `createTheme`.
3. **Responsive Flex Layout**: Utilizes MUI `Box` with flex properties to arrange components neatly.

---

## 📁 Project Structure

```text
src/
├── components/
│   ├── AutoComplete.jsx       # Autocomplete component demo
│   ├── Buttons.jsx            # Material UI buttons demo
│   ├── ContinuousSlider.jsx   # Material UI slider demo
│   └── UploadFile.jsx         # File upload component demo
├── App.jsx                    # Root component with ThemeProvider and layout
└── main.jsx                   # Entry point
```

---

## ⚙️ How Light/Dark Mode Works (`App.jsx`)

- **`useState`**: Tracks whether `darkMode` is active (`true` or `false`).
- **`createTheme`**: Dynamically adjusts the MUI `palette.mode` based on the `darkMode` state.
- **`ThemeProvider` & `CssBaseline`**: Injects the theme into all child components and automatically handles page background and text color transitions.

---

## 🚀 Getting Started

### 1. Install Dependencies
```bash
npm install
```

### 2. Run Development Server
```bash
npm run dev
```
