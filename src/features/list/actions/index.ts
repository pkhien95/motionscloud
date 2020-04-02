import * as types from './types'

export const selectItem = (id: string) => ({
  type: types.SELECT_ITEM,
  payload: {id},
})
