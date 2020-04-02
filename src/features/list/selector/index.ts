export const listSelector = (state: any) => {
  return Object.keys(state.list.entities).map((key) => ({
    id: key,
    name: state.list.entities[key].name,
  }))
}
