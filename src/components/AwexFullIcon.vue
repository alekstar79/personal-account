<template>
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 67 16"
    :width="width"
    :height="height"
    fill="none"
  >
    <g id="dark yellow">
      <g id="Group 34197">
        <path
          :fill="fill"
          d="M38.9028 13.9708V15.9992H50.22V13.9708H38.9028ZM38.9028 0.964844V2.99329H50.22V0.964844H38.9028ZM38.9028
          7.46782V9.49627H49.2695V7.46782H38.9028Z"
        />
        <path
          :fill="fill"
          d="M37.0111 0.964844L32.6108 14.7728C32.378 15.5033 31.6994 15.9992 30.9328 15.9992V15.9992C30.1956 15.9992
          29.5365 15.5402 29.2809 14.8487L25.581 4.83991L21.9572 14.8515C21.7079 15.5404 21.0538 15.9992 20.3212
          15.9992V15.9992C19.5638 15.9992 18.8934 15.5093 18.6634 14.7876L14.2583 0.964844H16.944L20.489 12.463L23.9149
          2.16277C24.1529 1.44747 24.822 0.964844 25.5758 0.964844V0.964844C26.3243 0.964844 26.9899 1.44069 27.232
          2.14886L30.7589 12.463L34.2825 0.964844H37.0111Z"
        />
      </g>
      <path
        :fill="fill"
        d="M63.5334 16.0001L58.8087 9.88744L54.1138 16.0001H51.5122L57.463 8.4038L51.7813 1.04492H54.4427L58.8685
        6.77179L63.2344 1.04492H65.8659L60.1842 8.2851L66.135 16.0001H63.5334Z"
      />
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
  name: 'AwexFullIcon',

  props: {
    width: {
      type: [Number, String],
      default: 67
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
