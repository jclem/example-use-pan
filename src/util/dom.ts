import {Point} from '../state/types'

export function canOverrideInteraction(e: Event): boolean {
  if (e.target instanceof Element) {
    switch (e.target.nodeName) {
      case 'BUTTON':
      case 'INPUT':
      case 'TEXTAREA':
        return false
      default:
        return true
    }
  }

  return true
}

export function getElemCenter(elem: Element): Point {
  const box = elem.getBoundingClientRect()

  return {
    x: box.x + box.width / 2,
    y: box.y + box.height / 2
  }
}
