/**
* @class MediaTracker
* @constructor
* @property {{ max: ?Boolean, min: ?Boolean, width: Number }} screenMode
*/
export class MediaTracker
{
  /**
  * @type {{ max: ?Boolean, min: ?Boolean, width: Number }}
  */
  static mode = {}

  /**
  * @param {Number} width
  * @param {Boolean} max
  * @param {Boolean} min
  */
  static defaultHandler({ width, max, min })
  {
    this.screenMode = { width, max, min }

    return true
  }

  set screenMode(mode)
  {
    MediaTracker.mode = mode
  }

  get screenMode()
  {
    return MediaTracker.mode
  }

  /**
  * @param {Number[]} widths
  */
  constructor(widths)
  {
    this.setHandler().update(widths)

    this.matches = widths.map(width => ({
      max: window.matchMedia(`(max-width: ${width}px)`),
      min: window.matchMedia(`(min-width: ${width}px)`),
      width
    }))
  }

  /**
  * @return MediaTracker
  */
  onTrack()
  {
    this.matches.forEach(({ max, min, width }) => {
      max.addEventListener('change', e => e.matches && this.handler({ width, max: true, min: false }))
      min.addEventListener('change', e => e.matches && this.handler({ width, max: false, min: true }))
    })

    return this
  }

  /**
  * @param {Number[]} widths
  */
  update(widths)
  {
    widths.some((width, idx) => {
      if (width >= window.innerWidth && idx < widths.length - 1) return false

      return this.handler({
        max: width >= window.innerWidth,
        min: width < window.innerWidth,
        width
      })
    })
  }

  /**
  * @param {Function?} handler
  * @return MediaTracker
  */
  setHandler(handler)
  {
    handler ||= MediaTracker.defaultHandler.bind(this)

    this.handler = handler

    return this
  }
}
