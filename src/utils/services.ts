export const generateQueryParams = (args) => {
  let str = ''
  let replace = ''
  for (const key in args) {
    if (typeof (args[key]) === 'object') {
      for (const key1 in args[key]) {
        str += `&filters[${key1}]=${args[key][key1]}`
        replace = str.slice(1)
      }
    } else {
      str += `&${key}=${args[key]}`
      replace = str.slice(1)
    }
  }
  return replace
}
