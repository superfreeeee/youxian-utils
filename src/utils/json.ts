import Log from '../libs/logger';

/**
 * JSON 操作相关
 */

/**
 * JSON.parse 试错
 * @param item
 * @returns
 */
export const tryParse = (value: string): any => {
  try {
    return JSON.parse(value);
  } catch (e) {
    Log.warn(`tryParse fail, invalid value=${value}`);
    return {};
  }
};

/**
 * JSON.
 */
export const tryStringify = (item: any): string => {
  try {
    return JSON.stringify(item);
  } catch (e) {
    Log.error('tryStringify fail');
    return '';
  }
};
