import { useState } from "react";
import reactLogo from "./assets/react.svg";
import "./App.css";
import { useAppSelector, useAppDispatch } from "./redux/reducers/hooks";
import { setCurrentUser } from "./redux/reducers/currentUser";
import DesktopRoutes from "./routes/DesktopRoutes";
import LayoutController from "./pages/layoutController/LayoutController";
import { ThemeProvider } from "styled-components";
import store from "./redux/store/store";
import { Provider } from "react-redux";

const lightTheme = {
  sidebarBackgroundColor: "#8787D3",
  sidebarTextColor: "#fff",
  cardBackgroundColor: "#fff",
  cardTextColor: "#000",
  headerBackgroundColor: "#000",
};

const themes: any = {
  light: lightTheme,
};

function App() {
  const [theme, setTheme] = useState("light");
  const isAuth = true;

  return (
    <>
      <ThemeProvider theme={themes[theme]}>
        <Provider store={store}>
          <LayoutController
            themeMode={theme}
            theme={themes[theme]}
            setTheme={setTheme}
          />
        </Provider>
      </ThemeProvider>
    </>
  );
}

export default App;
