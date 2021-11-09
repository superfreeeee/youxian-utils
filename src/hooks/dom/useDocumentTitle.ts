import { useEffect } from 'react';

/**
 * 设置 document.title
 * @param title
 */
const useDocumentTitle = (title: string) => {
  useEffect(() => {
    document.title = title;
  }, [title]);
};

export default useDocumentTitle;
