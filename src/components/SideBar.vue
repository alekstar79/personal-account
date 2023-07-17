<template>
  <section
    class="sidebar"
    :class="{
      [`${screenMode.max ? 'max' : 'min'}_${screenMode.width}`]: true,
      close,
      fold
    }"
  >
    <header class="sidebar__header">
      <div class="logo">
        <AwexFullIcon class="awex__icon--full" />
        <AwexShortIcon class="awex__icon--short" />
        <div class="b2b-icon__layout--embedded">
          <B2BIcon />
        </div>
      </div>

      <div class="b2b-icon__layout">
        <B2BIcon />
      </div>

      <div v-click-outside="clickOutside" class="profile-menu">
        <div class="profile-menu__wrapper">
          <div class="profile-menu__select" ref="select">
            <div class="profile-menu__trigger" @click="toggleState">
              <i class="bx bxs-user-circle" />
            </div>

            <div
              class="profile-menu__options"
              @click="selectOption"
            >
              <div
                v-for="({ title, icon, rotate }, i) in profileOptions"
                class="profile-menu__option" :data-value="icon"
                :key="`${i}-${icon}`"
              >
                <i
                  :class="[icon, { [`rotate_${rotate}`]: !!rotate }]"
                  class="bx"
                /> {{ title }}
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="theme">
        <i class="bx bx-sun" />
      </div>
    </header>

    <div class="currency">
      Валюта: <VSelect triggerName="USD" :options="assets" />
    </div>

    <ul class="nav-links">
      <template v-for="({ id, icon, name, children, show, disabled }) in menu">
        <li :class="{ 'show-menu': show[id], disabled }" :key="id">
          <div
            v-if="children.length"
            @click="disabled || (show[id] = !show[id])"
            class="icon-link"
          >
            <a href="javascript:void(0)">
              <i class='bx' :class="`${icon}`" />

              <span class="link_name">
                {{ name }}
              </span>
            </a>
            <i class="bx bxs-chevron-down arrow" />
          </div>
          <a v-else href="javascript:void(0)">
            <i class="bx" :class="`${icon}`" />

            <span class="link_name">
              {{ name }}
            </span>
          </a>

          <SubMenu
            :children="children"
            :name="name"
          />
        </li>
      </template>
    </ul>
  </section>
</template>

<script>
import VSelect from '@/components/VSelect'
import AwexFullIcon from '@/components/AwexFullIcon'
import AwexShortIcon from '@/components/AwexShortIcon'
import B2BIcon from '@/components/B2BIcon'
import SubMenu from '@/components/SubMenu'

import { mapState } from 'vuex'

export default {
  name: 'SideBar',

  components: {
    VSelect,
    AwexShortIcon,
    AwexFullIcon,
    B2BIcon,
    SubMenu
  },
  computed: {
    ...mapState(['assets']),

    profileOptions() {
      return [
        {
          title: 'Иван Иванов',
          icon: 'bx-user-circle'
        },
        {
          title: 'Настройки',
          icon: 'bx-cog'
        },
        {
          title: 'Выйти',
          icon: 'bx-log-out',
          rotate: 180
        }
      ]
    },
    screenMode() {
      return this.$store.state.screenMode
    },
    close() {
      return this.$store.state.close
    },
    fold() {
      return this.$store.state.fold
    },
    menu() {
      return this.$store.state.menu
    }
  },
  methods: {
    clickOutside()
    {
      this.$refs.select.classList.remove('active')
    },
    toggleState({ target })
    {
      target.closest('.profile-menu__select').classList.toggle('active')
    },
    selectOption({ target })
    {
      if (target.classList.contains('profile-menu__option')) {
        this.selected = { option: target.textContent, value: target.dataset.value }
      }

      this.$refs.select.classList.remove('active')
      this.$emit('selected', this.selected)
    }
  }
}
</script>

<style scoped lang="scss">
.sidebar {
  position: fixed;
  left: 0;
  top: 0;

  padding: 40px 0 60px 30px;
  width: 320px;
  height: 100%;

  border-right: 1px solid #D1D1D1;
  background: #FFF;
  color: #6F6F6F;

  z-index: 100;
  transition: all .4s ease;

  ::v-deep(.select) {
    max-width: 8rem;

    .select-custom__trigger {
      justify-content: flex-end;
      border: unset;

      .bx {
        margin-left: 15px;
      }
    }
  }

  .sidebar__header {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 20px;

    padding: 0 30px 0 10px;
    width: 100%;

    .b2b-icon__layout {
      display: none;
      justify-content: center;
      padding: 5px;
      height: 18px;
      width: 42px;

      background: black;
      border-radius: 18px;
    }
    .profile-menu {
      position: relative;

      &__wrapper {
        position: relative;
        z-index: 99;
      }
      &__select {
        position: relative;

        &.active .profile-menu__options {
          display: block;
        }
      }
      &__trigger {
        position: relative;
        display: flex;

        cursor: pointer;
        color: #6c757d;
      }
      &__options {
        position: absolute;
        top: calc(100% + 5px);
        left: 0;

        display: none;

        flex-direction: column;
        align-items: flex-start;
        justify-content: center;

        padding: .6rem;
        min-width: 160px;

        font-size: 16px;

        background-color: #fff;
        box-shadow: 0 0 4px #e9e1f8;
        border: 1px solid black;
        border-radius: 10px;
      }
      &__option {
        position: relative;

        display: flex;
        justify-content: flex-start;
        align-items: center;
        gap: 10px;

        padding: .3rem;
        min-width: fit-content;
        width: 100%;

        white-space: nowrap;
        cursor: pointer;

        i.rotate_90 {
          transform: rotate(90deg);
        }
        i.rotate_180 {
          transform: rotate(180deg);
        }

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

  i,
  .profile,
  .theme {
    width: 32px;
    height: 32px;
    font-size: 32px;
    text-align: center;
    line-height: 32px;
    cursor: pointer;
  }
  .logo {
    display: flex;
    justify-content: center;
    align-items: center;

    padding: 10px 20px;
    border-radius: 100px;
    background: #FED602;

    .awex__icon--short {
      display: none;
    }
    .b2b-icon__layout--embedded {
      display: flex;
      justify-content: center;

      margin-left: 10px;
      padding: 5px;
      height: 18px;
      width: 42px;

      background: black;
      border-radius: 18px;
    }
  }
  .currency {
    display: flex;
    align-items: center;
    justify-content: space-between;

    padding: 20px 36px;
    margin: 40px 0;

    font-weight: 400;
    font-size: 16px;

    .bx {
      margin-left: 7px;
    }

    span {
      margin-left: 10px;

      font-weight: 600;
      font-size: 24px;
    }
  }
  .nav-links {
    height: 100%;
    overflow: auto;

    &::-webkit-scrollbar {
      display: none;
    }
    .disabled {
      opacity: .3;
    }

    li {
      position: relative;
      height: 44px;

      list-style: none;
      cursor: pointer;

      border-radius: 6px 0 0 6px;
      transition: all .4s ease;

      .icon-link {
        display: flex;
        align-items: center;
        justify-content: space-between;
      }
      .link_name {
        font-size: 16px;
        font-weight: 400;
        color: #6F6F6F;
        transition: all .4s ease;
        margin-left: -18px;
      }

      a {
        display: flex;
        align-items: center;
        text-decoration: none;
      }
      i {
        height: 44px;
        min-width: 77px;
        font-size: 22px;
        text-align: center;
        line-height: 42px;

        color: #6F6F6F;

        transition: all .4s ease;
      }

      &.show-menu {
        height: unset;

        .arrow {
          transform: rotate(-180deg);
        }
        ::v-deep(.sub-menu) {
          display: block;
        }
      }
      &:hover {
        background: #F0F0F0;

        ::v-deep(.sub-menu) {
          background: #F0F0F0;
        }

        i,
        .link_name {
          color: #292421;
        }
      }
    }
  }

  &.close,
  &.fold {
    padding: 60px 0;
    width: 78px;

    .sidebar__header {
      display: flex;
      flex-direction: column;
      padding: unset;
      height: 60px;

      .awex__icon--short {
        display: block;
      }
      .awex__icon--full {
        display: none;
      }
      .b2b-icon__layout {
        display: flex;
      }
      .logo {
        padding: 10px;

        .b2b-icon__layout--embedded {
          display: none;
        }
      }
      .theme {
        display: none;
      }
    }
    .currency {
      display: none;
    }
    .nav-links {
      margin-top: 30px;
      padding: 20px 0;

      overflow: visible;

      li {
        display: flex;
        align-items: center;
        height: 62px;

        .icon-link {
          display: block;

          .arrow {
            display: none;
          }
        }
        .link_name {
          opacity: 0;
          pointer-events: none;
        }

        &:hover {
          ::v-deep(.sub-menu) {
            pointer-events: auto;
            opacity: 1;
            z-index: 110;
          }
        }
      }
    }

    &.close,
    &.fold {
      z-index: 110;
    }
    &.close.fold {
      left: -78px;
      z-index: 90;
    }
  }
}

@media (max-width: 1024px) {
  .sidebar {
    padding: 40px 0;
    width: 250px;

    .sidebar__header {
      padding: unset;

      .awex__icon--short {
        display: block;
      }
      .awex__icon--full {
        display: none;
      }
    }
    .nav-links li {
      .link_name {
        font-size: 13px;
      }
    }
  }
}
</style>
