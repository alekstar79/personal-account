export default (el, binding) => {
  const onResizeCallback = binding.value || (() => {})

  window.addEventListener('resize', () => {
    const height = document.documentElement.clientHeight
    const width = document.documentElement.clientWidth

    onResizeCallback({ width, height })
  })
}
