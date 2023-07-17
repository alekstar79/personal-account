const removeListener = el => document.body.removeEventListener('click', el.clickOutsideHandler)
const addListener = el => document.body.addEventListener('click', el.clickOutsideHandler)

export default {
  bind(el, binding, vnode)
  {
    el.clickOutsideHandler = event => {
      if (!(el === event.target || el.contains(event.target))) {
        vnode.context[binding.expression](event)
      }
    }

    addListener(el)
  },
  unbind(el)
  {
    removeListener(el)
  }
}
