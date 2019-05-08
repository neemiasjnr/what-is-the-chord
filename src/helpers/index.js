import dictionary from '../data/dictionary'

export const traverseInputs = () => Array.from(document.querySelectorAll('input'))

export const getCheckedInputs = (inputs) => inputs.filter(el => el.checked)

export const uncheckAllInputs = () => traverseInputs().map(el => el.checked = false)

export const nodeToArray = nodes => {
  const initialState = [-1, -1, -1, -1, -1, -1]

  const chordMap = nodes.reduce((acc, node) => {
    const [string, note] = node.id.split('-')
    acc[string] = parseInt(note)
    return acc
  }, initialState)

  return chordMap.reverse()
}

export const head = arr => arr[0] 

export const getTonic = note => {
  if(!note) return ''

  return dictionary[note] || ''
}