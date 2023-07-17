<template>
  <div v-click-outside="clickOutside" class="select">
    <div class="select-wrapper">
      <div class="select-custom" ref="selectCustom">
        <div class="select-custom__trigger" @click="toggleState">
          {{ trigger }} <i class="bx bxs-chevron-down arrow" />
        </div>

        <div
          class="select-custom__options"
          @click="selectOption"
        >
          <div
            v-for="({ name, subName, value, code }) in options"
            class="select-custom__option" :data-value="value || code"
            :key="value || code"
          >
            {{ name || subName }}
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'VSelect',

  props: {
    options: {
      type: Array,
      default: () => []
    },
    triggerName: {
      type: String,
      required: true
    }
  },
  data() {
    return {
      trigger: this.triggerName,
      selected: null
    }
  },
  methods: {
    toggleState({ target })
    {
      if (this.options.length) {
        target.closest('.select-custom').classList.toggle('active')
      }
    },
    selectOption({ target })
    {
      if (target.classList.contains('select-custom__option')) {
        this.trigger = target.textContent

        this.selected = {
          name: this.trigger,
          value: target.dataset.value
        }
      }

      this.$refs.selectCustom.classList.remove('active')
      this.$emit('selected', this.selected)
    },
    clickOutside()
    {
      this.$refs.selectCustom.classList.remove('active')
    }
  }
}
</script>

<style lang="scss" scoped>
.select {
  position: relative;
  width: 100%;

  &-wrapper {
    position: relative;
  }
  &-custom {
    position: relative;

    &__trigger {
      position: relative;
      width: 100%;
      height: 100%;

      display: flex;
      justify-content: space-between;
      padding: .8rem;

      line-height: 100%;
      font-family: monospace, sans-serif;
      font-size: 1rem;

      background-color: #fff;
      border: 2px solid #e6e6e6;
      border-radius: .4rem;
      cursor: pointer;

      color: #6c757d;

      &:hover {
        border-color: #6c757d;
      }
    }
    &__options {
      position: absolute;
      top: calc(100% + 5px);
      left: 0;

      display: none;
      padding: .8rem;
      width: 100%;

      border: 1px solid #6f6f6f;
      border-radius: .4rem;

      background-color: #fff;
      box-shadow: 0 0 4px #e9e1f8;
      z-index: 9;
    }
    &.active .select-custom__options {
      display: block;
    }
    &__option {
      position: relative;
      padding: .8rem;
      cursor: pointer;

      &:hover {
        background-color: rgba(218, 218, 218, .5);
      }
      &:not(:last-of-type)::after {
        content: '';
        position: absolute;
        bottom: 0;
        left: 0;

        width: 100%;
        border-bottom: 1px solid #d3d3d3;
      }
    }
  }
}
</style>
