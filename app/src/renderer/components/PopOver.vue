<template>
  <div class="pop-over is-shown" v-show="popoverShown" :style="calcPos()">
    <create-team v-if="isCreateTeam"></create-team>
  </div>
</template>

<script>
  import { mapGetters } from 'vuex';
  import * as vals from '../utils/vals';
  import CreateTeam from './PopOver/CreateTeam';

  export default {
    name: 'popover',
    components: {
      CreateTeam
    },
    data: function () {
      return {
        pageHeaderHeight: 40,
        createTeamHeight: 336
      };
    },
    computed: {
      ...mapGetters([
        'popoverShown',
        'popoverPos',
        'popoverContent'
      ])
    },
    methods: {
      isCreateTeam: function () {
        return this.popoverContent === vals.POP_OVER_CREATE_TEAM;
      },
      calcPos: function () {
        if (!this.popoverShown) return {};
        let top = this.popoverPos.top;
        let delta = window.innerHeight - top - this.createTeamHeight;
        if (delta < 0) top += delta;
        return {
          top: (top < this.pageHeaderHeight ? this.pageHeaderHeight : top) + 'px',
          left: this.popoverPos.left + 'px'
        };
      }
    }
  };
</script>

