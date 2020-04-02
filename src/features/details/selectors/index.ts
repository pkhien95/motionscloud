export const itemSelector = (state: any) => {
  const {selectedId, entities} = state.list
  return entities[selectedId]
}
