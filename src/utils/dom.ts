/**
 *
 */
const getComposedPath = (function polyfillComposedPath() {
  // use default composedPath API
  if (Event.prototype.composedPath) {
    return (e: Event) => e.composedPath() as Node[];
  }

  // polyfill
  const composedPath = (e: Event) => {
    const target = e.target as HTMLElement;
    const path: Node[] = [target];
    let parent = target.parentNode;

    while (parent) {
      path.push(parent);
      parent = parent.parentNode;
    }

    return path;
  };

  return composedPath;
})();

/**
 * utils
 * @param maybeElement
 * @returns
 */
const isHTMLElement = (maybeElement: any): maybeElement is HTMLElement => {
  return (maybeElement as Node).cloneNode && (maybeElement as Node).nodeType === 1;
};

/**
 * borderEl utils
 */
const borderElList = document.createElement('div');
document.body.appendChild(borderElList);

let targetBorderEl: HTMLDivElement | null = null;

const addBorderEl = (el: HTMLElement) => {
  const x = el.offsetLeft;
  const y = el.offsetTop;
  const { width, height } = el.getBoundingClientRect();

  const borderEl = document.createElement('div');
  borderEl.style.position = 'absolute';
  borderEl.style.left = `${x}px`;
  borderEl.style.top = `${y}px`;
  borderEl.style.width = `${width}px`;
  borderEl.style.height = `${height}px`;
  borderEl.style.border = '1px solid red';

  borderElList.appendChild(borderEl);
  targetBorderEl = borderEl;
};

const clearBorderEl = () => {
  targetBorderEl && borderElList.removeChild(targetBorderEl);
};

/**
 * target management
 */
let target: HTMLElement | null = null;
let path: Node[] = [];

const trackTarget = (e: PointerEvent | MouseEvent) => {
  window.e = e;

  if (!isHTMLElement(e.target)) {
    return;
  }

  path = getComposedPath(e);

  let currentIndex = 0;
  const onKeydown = (e: KeyboardEvent) => {
    e.preventDefault();
    e.stopPropagation();

    const nextIndex =
      e.key === 'ArrowUp'
        ? // parent
          currentIndex + 1
        : e.key === 'ArrowDown'
        ? // child
          currentIndex - 1
        : // other
          -1;
    if (nextIndex < 0) return;
    const nextNode = path[nextIndex];
    if (nextNode && isHTMLElement(nextNode)) {
      clearBorderEl();
      addBorderEl(nextNode);
      currentIndex = nextIndex;
    }
  };

  // add target border
  clearBorderEl();
  addBorderEl(e.target);

  document.addEventListener('keydown', onKeydown);
  return () => {
    document.removeEventListener('keydown', onKeydown);
  };
};

let lastTeardown = () => {};
const onClick = (e) => {
  lastTeardown();
  lastTeardown = trackTarget(e);
};

document.addEventListener('click', onClick);
