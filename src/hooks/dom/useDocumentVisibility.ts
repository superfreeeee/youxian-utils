import { useEffect, useState } from 'react';

const isVisible = (_document: Document) => {
  return _document.visibilityState === 'visible';
};

/**
 * document.visibilityState 状态
 * @returns
 */
const useDocumentVisibility = () => {
  const [visible, setVisible] = useState(isVisible(document));

  useEffect(() => {
    const onVisibilityChange = () => {
      setVisible(isVisible(document));
    };

    document.addEventListener('visibilitychange', onVisibilityChange);
    return () => {
      document.removeEventListener('visibilitychange', onVisibilityChange);
    };
  }, []);

  return visible;
};
export default useDocumentVisibility;

/**
 * 监听 document.visibilitychange 事件
 * @param fn
 */
export const useDocumentVisibilityChange = (fn: (visible: boolean) => void) => {
  useEffect(() => {
    fn(isVisible(document));
  }, []);

  useEffect(() => {
    const onVisibilityChange = () => {
      fn(isVisible(document));
    };

    document.addEventListener('visibilitychange', onVisibilityChange);
    return () => {
      document.removeEventListener('visibilitychange', onVisibilityChange);
    };
  }, [fn]);
};
