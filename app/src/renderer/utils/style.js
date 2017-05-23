/**
 * Created by wanglei on 17/5/22.
 */
export function addClass (obj, cls) {
  let before = obj.className;
  let blank = before !== '' ? ' ' : '';
  let after = before + blank + cls;
  obj.className = after;
}

export function removeClass (obj, cls) {
  let before = ' ' + obj.className + ' ';
  before = before.replace(/(\s+)/gi, ' ');
  let after = before.replace(' ' + cls + ' ', ' ');
  after = after.replace(/(^\s+)|(\s+$)/g, '');
  obj.className = after;
}

export function hasClass (obj, cls) {
  let objCls = obj.className;
  let objClsList = objCls.split(/\s+/);
  for (let e in objClsList) {
    if (objClsList[e] === cls) return true;
  }
  return false;
}

export function toggleClass (obj, cls) {
  hasClass(obj, cls) ? removeClass(obj, cls) : addClass(obj, cls);
}
