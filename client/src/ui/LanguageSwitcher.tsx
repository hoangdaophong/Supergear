import { useTranslation } from "react-i18next";

const LanguageSwitcher = () => {
  const { i18n } = useTranslation();

  const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    void i18n.changeLanguage(e.target.value);
  };

  return (
    <select
      onChange={handleChange}
      value={i18n.language?.startsWith("vi") ? "vi" : "en"}
      className="text-sm bg-transparent border border-gray-400 rounded-md px-2 py-1 cursor-pointer hover:border-white"
      aria-label="Language selector"
    >
      <option value="en">English</option>
      <option value="vi">Tiếng Việt</option>
    </select>
  );
};

export default LanguageSwitcher;
