/** Join classNames */
export function joinClassNames(...classes) {
  return classes.filter(Boolean).join(' ')
}