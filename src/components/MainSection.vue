<template>
  <section
    class="main-section"
    :class="{
      [`${screenMode.max ? 'max' : 'min'}_${screenMode.width}`]: true,
      close,
      fold
    }"
  >
    <div class="main-content">
      <header class="main-content__header">
        <i @click="close = !close" class='bx bx-menu' />
        <span class="text">Главная</span>
      </header>

      <ContentContainer />
    </div>
  </section>
</template>

<script>
import ContentContainer from '@/components/ContentContainer'
import { SET_OPEN_CLOSE } from '@/utils'

export default {
  name: 'MainSection',

  components: {
    ContentContainer
  },
  computed: {
    close: {
      set(close)
      {
        this.$store.commit(SET_OPEN_CLOSE, close)
      },
      get()
      {
        return this.$store.state.close
      }
    },
    screenMode() {
      return this.$store.state.screenMode
    },
    fold() {
      return this.$store.state.fold
    }
  }
}
</script>

<style lang="scss" scoped>
.main-section {
  position: relative;
  left: 320px;

  padding: 40px 0 60px;
  width: calc(100% - 320px);
  height: fit-content;

  background: #F9F9F9;
  transition: all .4s ease;

  .main-content {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: 20px;

    height: 100%;

    &__header {
      display: flex;
      align-items: center;
      height: 38px;

      margin: 0 $grid_margin;
    }

    .bx-menu,
    .text {
      color: #11101d;
      font-size: 24px;
    }
    .bx-menu {
      padding: 7px 14px;
      height: 100%;

      cursor: pointer;
    }
    .text {
      font-weight: 400;
      font-size: 24px;
    }
  }
  &.close,
  &.fold {
    left: 78px;
    width: calc(100% - 78px);
    padding: 15px 0 60px;
    z-index: 90;

    .main-content {
      &__header {
        padding: 30px 15px 20px;
      }

      .bx-menu {
        padding: 0 14px 0 0;
        height: 24px;
      }
    }
  }
  &.close.fold {
    width: 100%;
    left: 0;
  }
}

@media (max-width: 1024px) {
  .main-section {
    width: calc(100% - 250px);
    left: 250px;
  }
}
</style>
