import Log from '../libs/logger';

/**
 * JSON 操作相关
 */

/**
 * JSON.parse 试错
 * @param item
 * @returns
 */
export const tryParse = (text: string): any => {
  try {
    return JSON.parse(text);
  } catch (e) {
    Log.error('tryParse fail');
    return {};
  }
};

/**
 * JSON.
 */
export const tryStringify = (item: any): any => {
  try {
    return JSON.stringify(item);
  } catch (e) {
    Log.error('tryStringify fail');
    return {};
  }
};
