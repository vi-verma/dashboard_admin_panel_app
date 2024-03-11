import dayjs from "dayjs";

export const dateFormateDefault = (date) => {
  return date ? dayjs(date).format("MMM D, YYYY") : "-";
};
