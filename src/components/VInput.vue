<template>
  <div class="input-group">
    <input
      placeholder="Введите сумму"
      class="form-control"
      :value="amount"
      type="text"
    >
    <div class="select" v-click-outside="clickOutside" ref="select">
      <div class="btn dropdown-tooggle" @click="toggleState">
        {{ trigger }} <i class="bx bxs-chevron-down arrow" />
      </div>

      <div
        class="dropdown-menu"
        @click="selectOption"
      >
        <div
          v-for="({ name, subName, value, code }) in options"
          class="dropdown-item" :data-value="value || code"
          :key="value || code"
        >
          {{ name || subName }}
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'VInput',

  props: {
    options: {
      type: Array,
      required: true
    }
  },
  data() {
    return {
      trigger: this.options[0].name,
      selected: null,
      amount: ''
    }
  },
  methods: {
    toggleState({ target })
    {
      if (this.options.length) {
        target.closest('.select').classList.toggle('active')
      }
    },
    selectOption({ target })
    {
      if (target.classList.contains('dropdown-item')) {
        this.trigger = target.textContent

        this.selected = {
          name: this.trigger,
          value: target.dataset.value
        }
      }

      this.$refs.select.classList.remove('active')

      this.$emit('selected', this.selected)
    },
    clickOutside()
    {
      this.$refs.select.classList.remove('active')
    }
  }
}
</script>

<style lang="scss" scoped>
.input-group {
  position: relative;

  display: flex;
  align-items: stretch;

  max-height: 45px;
  height: 100%;
  width: 100%;

  border: 2px solid #e6e6e6;
  border-radius: .4rem;

  &:hover {
    border-color: #6c757d;
  }

  .select.active .dropdown-menu {
    display: flex;
  }
  .btn {
    position: relative;
    padding: .73rem .8rem;
    min-width: 5rem;

    line-height: 100%;
    font-weight: bold;
    font-size: 1rem;
    font-family: Raleway, sans-serif;

    color: #6c757d;
    background-color: #fff;

    user-select: none;
    cursor: pointer;

    border-top-right-radius: .25rem;
    border-bottom-right-radius: .25rem;
    transition: all .15s ease-in-out;
  }

  & > .form-control {
    position: relative;
    flex: 1 1 auto;

    padding: .8rem;
    width: 0;

    line-height: 100%;
    font-size: 1rem;
    font-family: monospace, sans-serif;
    font-style: normal;
    font-weight: 400;

    border: none;
    border-top-left-radius: 5px;
    border-bottom-left-radius: 5px;

    outline: none;
  }
  & > .dropdown-toggle {
    margin-left: -1px;
    color: #6c757d;
    border: none #6c757d;
  }

  .dropdown-menu {
    position: absolute;
    right: -2px;

    display: none;
    flex-direction: column;

    padding: .5rem;
    min-width: fit-content;

    margin: 10px 0 0;

    font-size: 1rem;
    text-align: left;
    color: #212529;

    list-style: none;

    background-color: #fff;
    border: 1px solid #6f6f6f;
    border-radius: .4rem;
    box-shadow: 0 0 4px #e3e3e3;

    z-index: 9;

    @include mq(100, 460) {
      width: 100%;
    }

    .dropdown-item {
      display: block;
      width: 100%;

      color: #212529;
      white-space: nowrap;

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
