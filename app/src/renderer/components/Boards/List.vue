<template>
  <div class="list-wrapper">
    <div class="list">
      <div class="list-header u-clearfix is-menu-shown">
        <div class="list-header-target"></div>
        <h2 class="list-header-name-assist" dir="auto">{{list.name}}</h2>
        <textarea class="list-header-name mod-list-name" spellcheck="false" dir="auto" maxlength="512"
                  style="overflow: hidden; word-wrap: break-word; height: 24px;">{{list.name}}</textarea>
        <p class="list-header-num-cards hide">{{list.cards.length}} cards</p>
        <div class="list-header-extras">
                  <span class="list-header-extras-subscribe hide">
                    <span class="icon-sm icon-subscribe"></span>
                  </span>
          <a class="list-header-extras-menu dark-hover" href="#">
            <span class="icon-sm icon-overflow-menu-horizontal"></span>
          </a>
        </div>
      </div>
      <div class="list-cards u-fancy-scrollbar u-clearfix">
        <card v-for="card in list.cards" :card="card"></card>
        <div v-show="target.adding===list.id && cardAdd" class="card-composer">
          <div class="list-card">
            <div class="list-card-details u-clearfix">
              <div class="list-card-labels u-clearfix"></div>
              <textarea class="list-card-composer-textarea" dir="auto" style="overflow: hidden; word-wrap: break-word; resize: none; height: 54px;" v-model="newCardContent"></textarea>
              <div class="list-card-members"></div>
            </div>
          </div>
          <div class="cc-controls u-clearfix">
            <div class="cc-controls-section">
              <input class="primary confirm mod-compact" type="submit" value="Add" @click="addCard(list.id)">
              <a class="icon-lg icon-close dark-hover" @click="closeAddCardBox"></a>
            </div>
            <div class="cc-controls-section mod-right">
              <a class="icon-lg icon-overflow-menu-horizontal dark-background-hover" href="#"></a>
            </div>
          </div>
        </div>
      </div>
      <a v-show="target.adding!==list.id || !cardAdd" class="open-card-composer" @click="openAddCardBox">Add a card…</a>
    </div>
  </div>
</template>
<style>

</style>
<script>
  import Card from '../../components/Boards/Card.vue';
  import { mapActions } from 'vuex';

  export default {
    data: () => ({
      cardAdd: false,
      newCardContent: ''
    }),
    props: {
      list: Object,
      target: Object
    },
    methods: {
      ...mapActions([
        'addCardToList'
      ]),
      openAddCardBox () {
        this.cleanAddCardBox();
        this.$emit('syncTarget', {adding: this.list.id});
        this.cardAdd = true;
      },
      closeAddCardBox () {
        this.cleanAddCardBox();
        this.cardAdd = false;
      },
      addCard (listId) {
        if (this.isEmpty(this.newCardContent)) return;
        this.addCardToList({
          belongs: listId,
          title: this.newCardContent
        });
        this.cleanAddCardBox();
      },
      cleanAddCardBox () {
        this.newCardContent = '';
      },
      isEmpty (str) {
        return typeof str === 'undefined' || str === null || str.trim() === '';
      }
    },
    components: {
      Card
    }
  };
</script>
