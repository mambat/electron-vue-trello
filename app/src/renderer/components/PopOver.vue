<template>
  <div class="pop-over" :class="{'is-shown': popoverShown}" style="left: 16px; top: 44px;">
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
    computed: {
      ...mapGetters([
        'popoverShown',
        'popoverContent'
      ])
    },
    methods: {
      isCreateTeam: function () {
        return this.popoverContent === vals.POP_OVER_CREATE_TEAM;
      }
    }
  };
</script>

