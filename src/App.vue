<template>
  <div id="app">
    <SideBar />
    <MainSection />
    <GridButton
      selector="main.container"
    />
  </div>
</template>

<script>
import GridButton from '@/components/GridButton'
import MainSection from '@/components/MainSection'
import SideBar from './components/SideBar'

import {

  MediaTracker,

  SET_SCREEN_MODE,
  SET_OPEN_CLOSE,
  SET_FOLD_STATE,
  BREACKPOINTS,
  WIDTH_860,
  WIDTH_768

} from '@/utils'

export default {
  name: 'App',

  components: {
    GridButton,
    MainSection,
    SideBar
  },
  computed: {
    screenMode: {
      set(mode)
      {
        this.$store.commit(SET_SCREEN_MODE, mode)
      },
      get()
      {
        return this.$store.state.screenMode
      }
    },
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
    fold: {
      set(fold)
      {
        this.$store.commit(SET_FOLD_STATE, fold)
      },
      get()
      {
        return this.$store.state.fold
      }
    }
  },
  watch: {
    screenMode: 'uiStateHandler'
  },
  data: () => ({
    media: new MediaTracker(BREACKPOINTS)
  }),
  methods: {
    mediaScreen(screenMode)
    {
      this.screenMode = screenMode
    },
    async uiStateHandler()
    {
      await new Promise(resolve => setTimeout(resolve, 300))

      this.close = !(window.innerWidth > WIDTH_768)

      this.fold = !(window.innerWidth > WIDTH_860)
    }
  },
  created()
  {
    this.mediaScreen(this.media.screenMode)

    this.media
      .setHandler(this.mediaScreen)
      .onTrack()
  }
}
</script>

<style lang="scss">
@import url('https://fonts.googleapis.com/css2?family=Raleway:wght@300;400;600&display=swap');

* {
  box-sizing: border-box;
  padding: 0;
  margin: 0;
}

#app {
  font-family: Raleway, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
   -moz-osx-font-smoothing: grayscale;
}
</style>
