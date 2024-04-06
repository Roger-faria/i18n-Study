import us from "../../assets/us.svg";
import fr from "../../assets/fr.svg";
import br from "../../assets/br.svg";
import "./styles.css";
import { useTranslation } from "react-i18next";

const languageOptions = [
  {
    name: "English",
    value: "en",
    flag: us,
  },
  {
    name: "Português",
    value: "ptBr",
    flag: br,
  },
  {
    name: "Français",
    value: "fr",
    flag: fr,
  },
];

export const LanguageSwitcher = () => {
  const { t, i18n } = useTranslation();
  return (
    <>
      <span>{t("selectYourLanguage")}</span>
      <div className="language-switcher">
        {languageOptions.map((languageOption) => (
          <button
            key={languageOption.value}
            onClick={() => {
              i18n.changeLanguage(languageOption.value);
            }}
          >
            <img src={languageOption.flag} alt={languageOption.name} />
            <span
              style={{
                fontWeight:
                  i18n.language === languageOption.value ? "bold" : "normal",
                textDecoration:
                  i18n.language === languageOption.value ? "underline" : "none",
              }}
            >
              {languageOption.name}
            </span>
          </button>
        ))}
      </div>
    </>
  );
};
