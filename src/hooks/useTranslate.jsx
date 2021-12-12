import { useSelector } from "react-redux";
import { selectLocale } from "../store/reducers/appReducer";
import translate from "../utils/translate";

const useTranslate = (key, variables) => {
  const locale = useSelector(selectLocale);
  return translate(key, variables, locale);
};

export default useTranslate;
