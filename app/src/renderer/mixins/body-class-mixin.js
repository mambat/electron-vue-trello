/**
 * Created by wanglei on 17/5/25.
 */
import * as style from '../utils/style';

export default {
  created: function () {
    this.toggleBodyClass();
  },
  destroyed: function () {
    this.toggleBodyClass();
  },
  methods: {
    toggleBodyClass: function () {
      style.toggleClass(document.getElementsByTagName('body')[0], this.bodyClass);
    }
  }
};
