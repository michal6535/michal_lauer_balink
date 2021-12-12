import moment from "moment";
import translate from "../hooks/useTranslate";

export const getDayText = (date) => {
  const isToday = moment().isSame(moment(date), "day");
  const isTomorrow = moment().add(1, "days").isSame(moment(date), "day");
  if (isToday) return translate("Today");
  if (isTomorrow) return translate("Tomorrow");
  return moment(date).format("ddd DD MMM");
};

export const getTimeText = (time) => {
  return time ? moment(time).format("hh:mm a").replace("m", ".m.") : "";
};
