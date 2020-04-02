import * as types from './types'

export const setFirstSectionSelection = (selected: string) => ({
  type: types.SET_FIRST_SECTION_SELECTION,
  payload: {selected},
})

export const setFirstSectionText = (text: string) => ({
  type: types.SET_FIRST_SECTION_TEXT,
  payload: {text},
})

export const setSecondSectionSelection = (selected: string) => ({
  type: types.SET_SECOND_SECTION_SELECTION,
  payload: {selected},
})

export const setSecondSectionText = (text: string) => ({
  type: types.SET_SECOND_SECTION_TEXT,
  payload: {text},
})

export const setThirdSectionSelection = (selected: string) => ({
  type: types.SET_THIRD_SECTION_SELECTION,
  payload: {selected},
})

export const setThirdSectionText = (text: string) => ({
  type: types.SET_THIRD_SECTION_TEXT,
  payload: {text},
})
