import { isAxiosError } from 'axios';
import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';

export const cn = (...inputs: ClassValue[]) => {
  return twMerge(clsx(inputs));
};

export const getNthSubstring = (
  string: string,
  separator: string,
  index: number,
): string | undefined => {
  const parts = string.split(separator);
  const adjustedIndex = index < 0 ? parts.length + index : index;

  return parts[adjustedIndex];
};

export const getStartIndexFromScroll = (scroll: number, itemSize: number) => {
  return Math.max(0, Math.round(scroll / itemSize));
};

export const hasErrorMessage = (
  error: unknown,
): error is { message: string } => {
  return typeof error === 'object' && error !== null && 'message' in error;
};

export const extractErrorMessage = (
  error: unknown,
  defaultMessage = 'Unexpected error',
): string => {
  if (isAxiosError(error) || error instanceof Error || hasErrorMessage(error)) {
    return error.message;
  }

  return defaultMessage;
};
