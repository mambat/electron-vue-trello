<template>
  <div class="list-wrapper">
    <div class="list">
      <div class="list-header u-clearfix is-menu-shown">
        <div class="list-header-target" :class="{'is-hidden': isEditingListName}" @click="editListName"></div>
        <h2 class="list-header-name-assist" dir="auto">{{list.name}}</h2>
        <textarea class="list-header-name mod-list-name" :class="{'is-editing': isEditingListName}" spellcheck="false" dir="auto" maxlength="512"
                  style="overflow: hidden; word-wrap: break-word; height: 24px;" ref="listNameFrame"
                  @blur="syncListNameFrame(false)">{{list.name}}</textarea>
        <p class="list-header-num-cards hide">{{list.cards ? list.cards.length : 0}} cards</p>
        <div class="list-header-extras" ref="extras">
                  <span class="list-header-extras-subscribe hide">
                    <span class="icon-sm icon-subscribe"></span>
                  </span>
          <a class="list-header-extras-menu dark-hover" @click="openListActionsPopover">
            <span class="icon-sm icon-overflow-menu-horizontal"></span>
          </a>
        </div>
      </div>
      <div class="list-cards u-fancy-scrollbar u-clearfix">
        <draggable class="card-drag-box" v-model="cardList"
                   :options="{ghostClass: 'ghost', group:'card'}"
                   @change="cardChangeHandler">
          <card v-for="card in cardList"
                :card="card"
                :board-id="boardId"
                :list-id="list.id"
                @syncListNameFrame="syncListNameFrame">
          </card>
        </draggable>
        <div v-show="isAddingCard" class="card-composer">
          <div class="list-card">
            <div class="list-card-details u-clearfix">
              <div class="list-card-labels u-clearfix"></div>
              <textarea class="list-card-composer-textarea" dir="auto" style="overflow: hidden; word-wrap: break-word; resize: none; height: 54px;"
                        v-model="newCardContent"></textarea>
              <div class="list-card-members"></div>
            </div>
          </div>
          <div class="cc-controls u-clearfix">
            <div class="cc-controls-section">
              <input class="primary confirm mod-compact" type="submit" value="Add" @click="addCard()">
              <a class="icon-lg icon-close dark-hover" @click="closeAddCardBox"></a>
            </div>
            <div class="cc-controls-section mod-right">
              <a class="icon-lg icon-overflow-menu-horizontal dark-background-hover" href="#"></a>
            </div>
          </div>
        </div>
      </div>
      <a v-show="!isAddingCard" class="open-card-composer" @click="openAddCardBox">添加卡片…</a>
    </div>
    <div class="placeholder"></div>
  </div>
</template>
<style scoped>
  .card-drag-box {
    min-height: 10px
  }

  .list-wrapper {
    position: relative;
  }

  .placeholder {
    display: none;
  }

  .ghost .list {
    opacity: 0 !important;
  }

  .ghost .placeholder {
    position: absolute;
    top: 0px;
    width: 100%;
    height: 100%;
    border-radius: 3px;
    background: rgba(0, 0, 0, .3);
    display: inline-block !important;
  }
</style>
<script>
  import Card from '../../components/Boards/Card.vue';
  import { mapActions } from 'vuex';

  export default {
    data: () => ({
      newCardContent: ''
    }),
    props: {
      boardId: {
        type: String,
        required: true
      },
      list: Object,
      target: Object,
      listNameEditing: Boolean,
      cardAdd: Boolean
    },
    computed: {
      isEditingListName () {
        return this.target.editing === this.list.id && !!this.listNameEditing;
      },
      isAddingCard () {
        return this.target.adding === this.list.id && !!this.cardAdd;
      },
      cardList: {
        get () {
          return this.list.cards;
        },
        set (value) {
          this.$store.commit('SORT_CARD_LIST_OVER_CARD', {list: this.list, cards: value});
        }
      }
    },
    methods: {
      ...mapActions([
        'renameListName',
        'addCardToList',
        'showPopOverListActions',
        'dndMoveCard',
        'dndAddCard'
      ]),
      openAddCardBox () {
        this.cleanAddCardBox();
        this.$emit('syncTarget', {adding: this.list.id});
        this.syncListNameFrame(false);
        this.$emit('syncAddCardBox', true);
      },
      closeAddCardBox () {
        this.cleanAddCardBox();
        this.syncListNameFrame(false);
        this.$emit('syncAddCardBox', false);
      },
      editListName () {
        this.$emit('syncTarget', {editing: this.list.id});
        this.syncListNameFrame(true);
      },
      syncListNameFrame (bol) {
        this.$emit('syncListNameFrame', bol);
      },
      addCard () {
        if (this.isEmpty(this.newCardContent)) return;
        this.addCardToList({
          boardId: this.boardId,
          belongs: this.list.id,
          title: this.newCardContent
        });
        this.cleanAddCardBox();
      },
      cleanAddCardBox () {
        this.newCardContent = '';
      },
      openListActionsPopover () {
        let rect = this.$refs.extras.getBoundingClientRect();
        this.showPopOverListActions({
          pos: {
            left: rect.left,
            top: rect.bottom
          },
          params: {
            boardId: this.boardId,
            id: this.list.id
          }
        });
      },
      isEmpty (str) {
        return typeof str === 'undefined' || str === null || str.trim() === '';
      },
      cardChangeHandler: function (props) {
        if (props.moved) {
          props.moved.boardId = this.boardId;
          props.moved.belongs = this.list.id;
          this.dndMoveCard(props.moved);
        } else if (props.added) {
          props.added.boardId = this.boardId;
          props.added.belongs = this.list.id;
          this.dndAddCard(props.added);
        }
      }
    },
    watch: {
      isEditingListName (val) {
        let dom = this.$refs.listNameFrame;
        if (val) {
          dom.focus();
          dom.select();
        } else {
          if (this.list.name === dom.value) return;
          this.renameListName({
            boardId: this.boardId,
            id: this.list.id,
            name: dom.value
          });
        }
      }
    },
    components: {
      Card
    }
  };
</script>
