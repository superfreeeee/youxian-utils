import { useEffect } from 'react';

/**
 * 设置 document.title
 * @param title
 */
export const useDocumentTitle = (title: string) => {
  useEffect(() => {
    const originTitle = document.title;
    document.title = title;
    return () => {
      document.title = originTitle;
    };
  }, [title]);
};
