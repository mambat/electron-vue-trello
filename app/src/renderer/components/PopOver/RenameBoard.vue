<template>
  <div class="pop-over-content u-fancy-scrollbar" style="max-height: 595px;">
    <div>
      <div>
        <label>Name</label>
        <input type="text" :value="name" dir="auto" ref="boardName"/>
        <input class="primary wide" type="submit" value="重命名" @click="rename"/>
      </div>
    </div>
  </div>
</template>
<style>
</style>
<script>
  import { mapActions } from 'vuex';
  export default {
    name: 'rename-board',
    computed: {
      nameDom () {
        return this.$refs.boardName;
      }
    },
    mounted () {
      this.nameDom.focus();
      this.nameDom.select();
    },
    methods: {
      ...mapActions([
        'renameBoard'
      ]),
      rename () {
        if (this.nameDom.value.trim() === '') return;
        this.renameBoard({
          teamId: this.teamId,
          id: this.id,
          name: this.nameDom.value
        });
        this.$emit('close');
      }
    },
    props: {
      teamId: {
        type: String,
        required: true
      },
      id: {
        type: String,
        required: true
      },
      name: String
    }
  };
</script>
