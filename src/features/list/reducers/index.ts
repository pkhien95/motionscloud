import {DefaultAction} from '../../../types'
import {ListState} from '../types'
import update from 'immutability-helper'
import * as listActionTypes from '../actions/types'
import * as detailsActionTypes from '../../details/actions/types'

const initialState: ListState = {
  entities: {
    item0: {
      id: 'item0',
      name: 'First item',
      firstSectionSelection: '',
      firstSectionText: '',
      secondSectionSelection: '',
      secondSectionText: '',
      thirdSectionSelection: '',
      thirdSectionText: '',
    },
    item1: {
      id: 'item1',
      name: 'Second item',
      firstSectionSelection: '',
      firstSectionText: '',
      secondSectionSelection: '',
      secondSectionText: '',
      thirdSectionSelection: '',
      thirdSectionText: '',
    },
    item2: {
      id: 'item2',
      name: 'Third item',
      firstSectionSelection: '',
      firstSectionText: '',
      secondSectionSelection: '',
      secondSectionText: '',
      thirdSectionSelection: '',
      thirdSectionText: '',
    },
  },
  selectedId: '',
}

const reducer = (state = initialState, action: DefaultAction) => {
  switch (action.type) {
    case listActionTypes.SELECT_ITEM:
      return update(state, {
        selectedId: {
          $set: action.payload.id,
        },
      })
    
    case detailsActionTypes.SET_FIRST_SECTION_SELECTION:
      return update(state, {
        entities: {
          [state.selectedId]: {
            firstSectionSelection: {
              $set: action.payload.selected,
            },
          },
        },
      })
    case detailsActionTypes.SET_FIRST_SECTION_TEXT:
      return update(state, {
        entities: {
          [state.selectedId]: {
            firstSectionText: {
              $set: action.payload.text,
            },
          },
        },
      })
  
    case detailsActionTypes.SET_SECOND_SECTION_SELECTION:
      return update(state, {
        entities: {
          [state.selectedId]: {
            secondSectionSelection: {
              $set: action.payload.selected,
            },
          },
        },
      })
    case detailsActionTypes.SET_SECOND_SECTION_TEXT:
      return update(state, {
        entities: {
          [state.selectedId]: {
            secondSectionText: {
              $set: action.payload.text,
            },
          },
        },
      })
  
    case detailsActionTypes.SET_THIRD_SECTION_SELECTION:
      return update(state, {
        entities: {
          [state.selectedId]: {
            thirdSectionSelection: {
              $set: action.payload.selected,
            },
          },
        },
      })
    case detailsActionTypes.SET_THIRD_SECTION_TEXT:
      return update(state, {
        entities: {
          [state.selectedId]: {
            thirdSectionText: {
              $set: action.payload.text,
            },
          },
        },
      })
    default:
      return state
  }
}

export default reducer
