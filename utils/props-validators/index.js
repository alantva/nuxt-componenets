const hasOwnProperty = (item, property) =>
  Object.prototype.hasOwnProperty.call(item, property)

const fnOption = (item) =>
  hasOwnProperty(item, 'id') && hasOwnProperty(item, 'description')

export default {
  autocompleteOption: fnOption,
  autocompleteOptions: (items) =>
    items.filter(fnOption).length === items.length,
  colors: (value) =>
    ['primary', 'secondary', 'default', 'error'].includes(value),
  typography: (value) => ['title', 'subtitle', 'caption'].includes(value)
}
