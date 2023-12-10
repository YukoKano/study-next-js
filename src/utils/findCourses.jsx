import { COURSES } from '@/constants/COURSES';
export const findCategory = (category) => COURSES.find((val) => val.course === category);