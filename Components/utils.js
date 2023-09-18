/* eslint-disable no-restricted-syntax */
import { clsx } from 'clsx';
import { format, parseISO, addHours } from 'date-fns';
import { twMerge } from 'tailwind-merge';

export function cn(...inputs) {
  return twMerge(clsx(inputs));
}

export const formatRuntime = (minutes) => {
  const formattedRuntime = format(new Date(0, 0, 0, 0, minutes), "H'h' m'm'");
  return formattedRuntime;
};

export const convertToUTC = (
  dateString,
  outputFormat = 'yyyy-MM-dd HH:mm:ss'
)=> {
  const parsedDate = parseISO(dateString);
  const utcDate = addHours(parsedDate, -parsedDate.getTimezoneOffset() / 60);
  const formattedDate = format(utcDate, outputFormat);
  return formattedDate;
};