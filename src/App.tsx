import { useTranslation } from "react-i18next";
import "./App.css";
import { LanguageSwitcher } from "./components/LanguageSwitcher";
import { useState } from "react";
import { Button } from "@mui/material";

function App() {
  const { t } = useTranslation();
  const [counter, setCounter] = useState(0);
  const addCounter = () => {
    setCounter(counter + 1);
  };
  return (
    <>
      <div className="App">
        <header className="App-header">
          <LanguageSwitcher />
          <h1>{t("welcomeToTheBest")}</h1>
          <h2>{t("whereYouCan")}</h2>
        </header>
      </div>
      <Button onClick={() => addCounter()} variant="contained" color="primary">
        {t("button")}
      </Button>
      <h3>{t("selectedCounter", { counter: counter })}</h3>
    </>
  );
}

export default App;
