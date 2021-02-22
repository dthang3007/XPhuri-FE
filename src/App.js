import "./App.css";
import { SignIn } from "./components/SignIn";
import { ThemeProvider } from "@material-ui/core";
import { theme } from "./theme";
import { PlayerScreen } from "./components/PlayerScreen";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <PlayerScreen />
    </ThemeProvider>
  );
}

export default App;
