/**
 * 字符串处理工具类 - ESM版本
 */

export function toCamelCase(str) {
    return str.replace(/(?:^\w|[A-Z]|\b\w|\s+)/g, (match, index) => {
      if (+match === 0) return '';
      return index === 0 ? match.toLowerCase() : match.toUpperCase();
    });
}
  
export function toKebabCase(str) {
    return str && str
      .match(/[A-Z]{2,}(?=[A-Z][a-z]+[0-9]*|\b)|[A-Z]?[a-z]+[0-9]*|[A-Z]|[0-9]+/g)
      .map(x => x.toLowerCase())
      .join('-');
}
  
export function truncate(str, length, ellipsis = '...') {
    return str.length > length ? str.slice(0, length) + ellipsis : str;
}