<template>
  <ul
    class="sub-menu"
    :class="{
      [`${screenMode.max ? 'max' : 'min'}_${screenMode.width}`]: true,
      blank: !children.length,
      close,
      fold
    }"
  >
    <li>
      <a
        class="link_name"
        href="javascript:void(0)"
      >
        {{ name }}
      </a>
    </li>

    <template v-if="children.length">
      <li
        v-for="({ subName }) in children"
        :key="subName"
      >
        <a href="javascript:void(0)">
          {{ subName }}
        </a>
      </li>
    </template>
  </ul>
</template>

<script>
export default {
  name: 'SubMenu',

  props: {
    children: {
      type: Array,
      default: () => []
    },
    name: {
      type: String,
      required: true
    }
  },
  computed: {
    screenMode() {
      return this.$store.state.screenMode
    },
    close() {
      return this.$store.state.close
    },
    fold() {
      return this.$store.state.fold
    }
  }
}
</script>

<style lang="scss" scoped>
.sub-menu {
  display: none;
  padding: 6px 6px 14px 80px;
  transition: all .4s ease;
  user-select: none;

  border-radius: 6px 0 0 6px;

  .link_name {
    display: none;
  }

  li {
    list-style: none;
  }
  a {
    display: flex;
    align-items: center;
    padding: 5px 0;

    font-size: 16px;
    white-space: nowrap;

    opacity: .6;
    transition: all .4s ease;
    text-decoration: none;
    color: #292421;

    &:hover {
      opacity: 1;
    }
  }

  &.close,
  &.fold {
    position: absolute;
    left: 100%;
    top: 0;

    display: block;
    margin-top: 0;
    padding: 15px;
    border-radius: 0 6px 6px 0;
    pointer-events: none;
    opacity: 0;

    .link_name {
      display: block;
      font-size: 18px;
      opacity: 1;
    }
  }
  &.blank {
    pointer-events: none;
    opacity: 0;
  }
}
</style>
