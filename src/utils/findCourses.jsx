import { COURSES } from "@/constants/COURSES";
export const findCategoryItems = (category) =>
  COURSES.find((val) => val.course === category);
