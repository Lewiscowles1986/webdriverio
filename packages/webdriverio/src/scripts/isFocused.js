/**
 * checks if given element is focused
 * @param  {HTMLElement} elem  element to check
 * @return {Boolean}           true if element is focused
 */
export default function isFocused (elem) {
    return elem === document.activeElement
}
