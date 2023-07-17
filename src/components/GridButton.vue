<template>
  <button
    class="btn btn-grid"
    @click="toggleGrid"
  >
    G
  </button>
</template>

<script>
export default {
  name: 'GridButton',

  props: {
    selector: {
      type: String,
      required: true
    }
  },
  data: () => ({
    container: null,
    grid: false
  }),
  methods: {
    init()
    {
      this.container.classList[this.grid ? 'add' : 'remove']('grid')
    },
    toggleGrid()
    {
      this.container.classList.toggle('grid')

      this.grid = this.container.classList.contains('grid')

      this.saveGridState()
    },
    saveGridState()
    {
      window.localStorage.setItem('develop', JSON.stringify({ grid: this.grid }))
    },
    readGridState()
    {
      const develop = JSON.parse(window.localStorage.getItem('develop') || '{}')

      this.grid = 'grid' in develop ? develop.grid : false
    }
  },
  mounted()
  {
    this.container = document.querySelector(this.selector)

    this.readGridState()

    this.init()
  }
}
</script>

<style lang="scss" scoped>
.btn-grid {
  position: fixed;
  top: 20px;
  right: 30px;

  display: flex;
  justify-content: center;
  align-items: center;
  height: 52px;
  width: 52px;

  font-size: 1.5rem;

  background-color: #6188e2;
  color: #FFFFFF;

  -webkit-box-shadow: 0 0 10px 3px rgba(34, 60, 80, .12);
     -moz-box-shadow: 0 0 10px 3px rgba(34, 60, 80, .12);
          box-shadow: 0 0 10px 3px rgba(34, 60, 80, .12);

  border: none;
  border-radius: 50%;

  cursor: pointer;
  z-index: 1000;

  transition: all .3s;

  &:hover {
    transform: scale(1.16);
  }
}
</style>
