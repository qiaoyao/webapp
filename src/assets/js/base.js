/**
 * 初始化rem
 */
export function DOMLoaded() {
  document.addEventListener('DOMContentLoaded', () => {
    computedREM();
  })
}

/**
 * 计算rem
 */
export function computedREM() {
  const html = document.documentElement;
  const windowWidth = html.clientWidth;
  html.style.fontSize = parseInt(windowWidth / 750 * 20) + 'px';
  return parseInt(windowWidth / 750 * 20);
}

/**
 * 优化重复请求
 * @param {function} func
 * @param {number} delay
 */
export function debounce(func, delay) {
  let timeout;
  return function () {
    let args = arguments;
    if (timeout) clearTimeout(timeout);
    timeout = setTimeout(function () {
      func.apply(this, args);
    }, delay);
  }
};
