<template>
  <main v-window-resize="e => windowWidth = e.width" class="container">
    <div class="row row-first">

      <template v-if="windowWidth > 425">
        <div class="cell cell__3">
          <div class="box box-bill">
            <div class="line">
              <span class="title">{{ bills.active.title }}</span>
              <span class="value">{{ bills.active.value }}</span>
            </div>

            <div class="line">
              <span class="title">{{ bills.amount.title }}</span>
              <span class="value">{{ bills.amount.value }}</span>
            </div>
          </div>
        </div>

        <div class="cell cell__3">
          <div class="box box-deposites">
            <div class="line">
              <span class="title">{{ deposites.active.title }}</span>
              <span class="value">{{ deposites.active.value }}</span>
            </div>

            <div class="line">
              <span class="title">{{ deposites.amount.title }}</span>
              <span class="value">{{ deposites.amount.value }}</span>
            </div>
          </div>
        </div>

        <div class="cell cell__6">
          <div class="box box-notifications">
            <div class="line">
              <i class="bx bx-bell" />
              <span class="title">{{ notifications.title }}</span>
              <span class="value">{{ notifications.list.length }}</span>
              <span class="message">{{ lastNotification }}</span>
            </div>
          </div>
        </div>
      </template>
      <template v-else>
        <div class="cell cell__6 window__425">
          <div class="box box-bill">
            <div class="line">
              <span class="title">{{ bills.active.title }}</span>
              <span class="value">{{ bills.active.value }}</span>
            </div>

            <div class="line">
              <span class="title">{{ bills.amount.title }}</span>
              <span class="value">{{ bills.amount.value }}</span>
            </div>
          </div>

          <div class="box box-deposites">
            <div class="line">
              <span class="title">{{ deposites.active.title }}</span>
              <span class="value">{{ deposites.active.value }}</span>
            </div>

            <div class="line">
              <span class="title">{{ deposites.amount.title }}</span>
              <span class="value">{{ deposites.amount.value }}</span>
            </div>
          </div>
        </div>

        <div class="cell cell__6 window__425">
          <div class="box box-notifications">
            <div class="line">
              <i class="bx bx-bell" />
              <span class="title">{{ notifications.title }}</span>
              <span class="value">{{ notifications.list.length }}</span>
              <span class="message">{{ lastNotification }}</span>
            </div>
          </div>

          <div class="box box-fastlink">
            <div class="line">
              <span class="title">Сгенерировать ссылку</span>
            </div>
          </div>
        </div>
      </template>
    </div>

    <div class="row row-second">
      <div class="cell" :class="`cell__${windowWidth > 425 ? '6' : '12'}`">
        <div class="box box-balance">
          <div class="cell" />

          <div class="cell">
            <div class="line">
              <span class="title">Общий баланс</span>
              <span class="link">Статистика ></span>
            </div>

            <div class="line">
              <span class="value">
                2.565.678<span class="grey">,456$</span>
              </span>
            </div>
          </div>
        </div>

        <button class="btn btn-black" @click.stop="">
          Заказ наличных в офис
        </button>
      </div>

      <div v-if="windowWidth > 425" class="cell cell__6">
        <div class="box box-fastlink">
          <div class="line">
            <span class="title">Быстрая генерация ссылки</span>
          </div>

          <div class="line">
            <VSelect
              triggerName="Выбор проекта"
              :options="projects"
            />
          </div>

          <div class="line">
            <VInput :options="assets" />
          </div>
        </div>

        <button class="btn btn-black" @click.stop="">
          Сгенерировать платежную ссылку
        </button>
      </div>
    </div>

    <div class="row row-subtitle mt-5">
      <div class="cell">
        <div class="line">
          <h3>Мои активы:</h3>
          <span class="link">Все активы ></span>
        </div>
      </div>
    </div>

    <div class="assets">
      <div v-for="asset in userAssets.list" class="row row-third" :key="asset.id">
        <div class="cell">
          <div class="box box-rub">
            <div class="cell cell__1">
              <img :src="asset.assetIcon" width="30" alt="">
            </div>

            <div class="cell cell__10">
              <div class="line">
                <span class="title">{{ asset.title }}</span>
                <span class="value">{{ asset.value }}</span>
              </div>

              <div class="line">
                <span class="title">{{ asset.desc }}</span>
                <span class="value">{{ asset.value }}</span>
              </div>
            </div>

            <div class="cell cell__1">
              <div class="col" @click.stop="">
                <img src="@/assets/logout.svg" width="30" alt="">
                <sup>Выход</sup>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="row row-subtitle">
      <div class="cell">
        <h3>История операций</h3>
      </div>
    </div>

    <div class="row row-seventh">
      <div class="cell cell__2">
        <div class="box">
          <div class="col">
            <div class="line">
              <span class="title">Проект</span>
            </div>

            <div class="line">
              <span class="title">Приход</span>
            </div>

          </div>
          <div class="col">
            <i class="bx bxs-chevron-down arrow" />
          </div>
        </div>
      </div>

      <div class="cell cell__2">
        <div class="box">
          <div class="col">
            <div class="line">
              <span class="title">Валюта</span>
            </div>

            <div class="line">
              <span class="title">Все</span>
            </div>
          </div>

          <div class="col">
            <i class="bx bxs-chevron-down arrow" />
          </div>
        </div>
      </div>

      <div class="cell cell__2">
        <div class="box">
          <div class="col">
            <div class="line">
              <span class="title">Тип операции</span>
            </div>

            <div class="line">
              <span class="title">Приход</span>
            </div>
          </div>

          <div class="col">
            <i class="bx bxs-chevron-down arrow" />
          </div>
        </div>
      </div>

      <div class="cell cell__2">
        <div class="box">
          <div class="col">
            <div class="line">
              <span class="title">Дата</span>
            </div>

            <div class="line">
              <span class="title">01.06.2022-13.06.2023</span>
            </div>
          </div>

          <div class="col">
            <i class="bx bxs-chevron-down arrow" />
          </div>
        </div>
      </div>
    </div>

    <div class="row row-eighth">
      <div class="cell">
        <div class="box box-scrollable">
          <div class="line">
            <p v-for="title in operations.header" :key="title">
              {{ title }}
            </p>
          </div>

          <div class="line" v-for="(operation, i) in operations.data" :key="i">
            <p v-for="value in Object.values(operation)" :key="`${i}-${value}`">
              {{ value }}
            </p>
          </div>
        </div>
      </div>
    </div>
  </main>
</template>

<script>
import VSelect from '@/components/VSelect'
import VInput from '@/components/VInput'

import { mapState } from 'vuex'

export default {
  name: 'ContentContainer',

  components: {
    VInput,
    VSelect
  },
  computed: {
    ...mapState([
      'assets',
      'bills',
      'deposites',
      'notifications',
      'operations',
      'projects',
      'userAssets'
    ]),

    lastNotification() {
      return this.notifications.list[this.notifications.list.length - 1]
    },
    screenMode() {
      return this.$store.state.screenMode.width
    }
  },
  data: () => ({
    windowWidth: 0
  }),
  created()
  {
    this.windowWidth = document.documentElement.clientWidth
  }
}
</script>

<style lang="scss" scoped>
$width_default: calc(16px + 2vw);
$width_1100: calc(12px + 2vw);
$width_860: calc(12px + 1.6vw);
$width_520: calc(12px + 1vw);

main.container {
  display: flex;
  flex-direction: column;
  gap: 25px;

  max-width: 1840px;
  width: 100%;

  margin: 0 auto;

  .btn {
    position: absolute;
    padding: .73rem .8rem;
    min-width: 5rem;

    line-height: 100%;
    font-weight: bold;
    font-size: 1rem;
    font-family: Raleway, sans-serif;

    color: #292421;
    background-color: #fff;

    user-select: none;
    cursor: pointer;

    border: none;
    border-radius: .5rem;
    transition: all .15s ease-in-out;
  }
  .cell {
    position: relative;

    &.window__425 {
      display: flex;
      flex-direction: column;
      gap: 10px;

      .box {
        &-notifications {
          .line {
            flex-direction: row;

            .title,
            .message {
              display: none;
            }
          }
        }
        &-fastlink {
          justify-content: center;
          text-align: center;

          cursor: pointer;
          background-color: #292421;
          color: #fff;
        }
      }
    }
  }
  .row {
    &-first {
      .cell__6,
      .cell__3 {
        @include mq(1024, 1280) {
          width: calc(#{$grid_width} * 4 + #{$grid_gutter} * 3);

          .box-notifications .message {
            display: none;
          }
        }
      }
      .cell__6 {
        @include mq(425, 1024) {
          width: calc(#{$grid_width} * 2 + #{$grid_gutter} * 1);

          .box-notifications .title,
          .box-notifications .message {
            display: none;
          }
        }
      }
      .cell__3 {
        @include mq(425, 1024) {
          width: calc(#{$grid_width} * 5 + #{$grid_gutter} * 4);
        }
      }
    }
    &-second {
      max-height: 240px;

      .btn-black {
        bottom: 0;
        left: 50%;

        color: #fff;
        background-color: #292421;

        width: 100%;
        max-width: fit-content;

        text-overflow: ellipsis;
        white-space: nowrap;
        overflow: hidden;

        transform: translate(-50%, 50%);

        &:hover {
          background-color: black;
          scale: 1.03;
        }
      }
    }
    &-seventh {
      .cell .box {
        flex-direction: row;
        justify-content: space-between;

        .bx {
          line-height: 31px;
        }
      }

      .cell__2:last-child {
        @include mq(1100, 1600) {
          width: calc(#{$grid_width} * 3 + #{$grid_gutter} * 2);
        }
      }
      .cell__2:last-child {
        @include mq(100, 1100) {
          width: calc(#{$grid_width} * 4 + #{$grid_gutter} * 3);
        }
      }
      .cell__2:nth-child(3) {
        @include mq(100, 1280) {
          width: calc(#{$grid_width} * 3 + #{$grid_gutter} * 2);
        }
      }
      .cell__2:nth-child(1) {
        @include mq(100, 860) {
          width: calc(#{$grid_width} * 2.5 + #{$grid_gutter} * 2);
        }
      }
      .cell__2:nth-child(2) {
        @include mq(100, 860) {
          width: calc(#{$grid_width} * 2.5 + #{$grid_gutter} * 2);
        }
      }
    }
    &-eighth {
      .cell .box-scrollable {
        justify-content: flex-start;
        max-height: 135px;
        overflow: auto;

        .line {
          &:not(.line:last-child) {
            border-bottom: 1px solid #dbdbdb;
            padding: 5px 0;
          }

          p {
            flex: 1 1 100%;
            min-width: fit-content;
            width: clamp(90px, 50%, 100px);
            margin: 5px;

            white-space: nowrap;
            text-align: center;
          }
        }
      }
    }
    &-subtitle {
      h3 {
        font-size: 24px;
      }
      span {
        font-size: 16px;
      }
      .link {
        cursor: pointer;
        transition: all .5s;

        &:hover {
          transform: scale(1.2);
        }
      }
    }

    .box {
      display: flex;
      flex-direction: column;
      justify-content: center;
      border-radius: 10px;

      padding: 20px 15px;
      height: 100%;

      background: white;

      .line:first-child {
        font-weight: bold;
      }

      &-bill,
      &-deposites {
        .line {
          @include mq(100, 600) {
            flex-direction: column;
            align-items: flex-start;
          }
        }
      }
      &-notifications {
        .line {
          justify-content: space-evenly;

          .value {
            width: 34px;
            height: 26px;

            padding: 6px;
            margin: 5px;

            border-radius: 20px;
            background: #FED602;
          }
          .title {
            min-width: fit-content;
            margin: 5px;
          }
          .message {
            max-width: 370px;
            margin: 5px;

            text-overflow: ellipsis;
            white-space: nowrap;
            overflow: hidden;
          }

          @include mq(100, 600) {
            flex-direction: column-reverse;
          }
        }
      }
      &-balance {
        position: relative;

        .cell:first-child {
          position: absolute;
          top: 20px;

          width: 94%;
        }
        .cell:last-child {
          background-image: url(@/assets/vector.png);
          background-position: right bottom;
          background-repeat: no-repeat;
          background-size: contain;

          height: 240px;
        }
        .line {
          margin: 0 25px;

          &:first-child {
            font-weight: 400;
            font-size: 16px;

            .link {
              cursor: pointer;
              transition: all .5s;

              &:hover {
                transform: scale(1.2);
              }
            }

            @include mq(100, 630) {
              flex-direction: column;
            }
          }
          &:last-child {
            height: 64px;
            line-height: 64px;
            margin-top: 20px;
          }
        }

        :where(.line) .value {
          font-size: $width_default;

          @include mq(860, 1100) {
            font-size: $width_1100;
          }
          @include mq(520, 860) {
            font-size: $width_860;
          }
          @include mq(100, 520) {
            font-size: $width_520;
          }
        }
        :where(.line) .grey {
          font-size: calc($width_default / 2);

          @include mq(860, 1100) {
            font-size: calc($width_1100 / 2);
          }
          @include mq(520, 860) {
            font-size: calc($width_860 / 2);
          }
          @include mq(100, 520) {
            font-size: calc($width_520 / 2);
          }

          color: grey;
        }
      }
      &-fastlink {
        justify-content: flex-start;
        gap: 20px;

        .title {
          font-size: 16px;
        }
      }
      &-rub,
      &-bit,
      &-eth,
      &-met {
        flex-direction: row;
        justify-content: space-between;
        align-items: center;

        .cell__10 {
          @include mq(100, 1024) {
            width: calc(#{$grid_width} * 8 + #{$grid_gutter} * 7);
          }
        }
        .cell:last-child {
          @include mq(100, 1024) {
            width: calc(#{$grid_width} * 2 + #{$grid_gutter} * 1);
          }
        }
        .cell__1 {
          padding: 0 20px;

          .col {
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;

            min-width: fit-content;
            padding: 5px;

            border-radius: 10px;
            background: rgba(209, 209, 209, .20);

            transition: all .3s;
            cursor: pointer;

            &:hover {
              transform: scale(1.1);
            }
          }

          &:first-child {
            text-align: left;
          }
          &:last-child {
            text-align: right;
          }

          @include mq(100, 1280) {
            padding: unset;
          }
        }
      }
    }

    .line {
      display: flex;
      justify-content: space-between;
      align-items: center;

      font-size: 13px;
      font-family: Raleway, sans-serif;
      font-style: normal;
      font-weight: 400;
      line-height: 120%;

      .value {
        font-family: monospace;
      }
      .bx {
        font-size: 24px;
        margin: 5px;
      }
    }
  }

  .assets {
    display: flex;
    flex-direction: column;
    gap: 10px;
  }

  &.grid .box {
    background: rgb(107, 107, 202);
  }
}
</style>
