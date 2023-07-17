<template>
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 16 16"
    :width="width"
    :height="height"
    fill="none"
  >
    <g id="dark yellow">
      <path
        fill="#292421"
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M8.79035 1.14466C8.5439 1.02842 8.27026 0.964844 7.98643 0.964844C7.2479 0.964844 6.57842 1.39527 6.27734
        2.06367L0 15.9992H2.33735L3.83565 12.5688L4.70466 10.6L7.61552 3.91927L8.79035 1.14466ZM8.84912 5.26756L11.1473
        10.5702L11.9864 12.5389L13.4847 15.9694H15.9719L9.95876 2.64692L8.84912 5.26756ZM10.1479 13.4277L7.90057
        8.79586L5.65327 13.4277L10.1479 13.4277Z"
      />
    </g>
  </svg>
</template>

<script>
export default {
  name: 'AwexShortIcon',

  props: {
    width: {
      type: [Number, String],
      default: 16
    },
    height: {
      type: [Number, String],
      default: 16
    },
    fill: {
      type: String,
      default: '#292421'
    }
  }
}
</script>
