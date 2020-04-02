import {connect} from 'react-redux'
import Details from '../components/Details'
import {itemSelector} from '../selectors'
import {Dispatch} from 'redux'
import {
  setFirstSectionSelection,
  setFirstSectionText,
  setSecondSectionSelection,
  setSecondSectionText,
  setThirdSectionSelection,
  setThirdSectionText,
} from '../actions'

const mapStateToProps = (state: any) => ({
  item: itemSelector(state),
})

const mapDispatchToProps = (dispatch: Dispatch) => ({
  setFirstSectionSelection: (selected: string) =>
    dispatch(setFirstSectionSelection(selected)),
  setFirstSectionText: (text: string) => dispatch(setFirstSectionText(text)),
  setSecondSectionSelection: (selected: string) =>
    dispatch(setSecondSectionSelection(selected)),
  setSecondSectionText: (text: string) => dispatch(setSecondSectionText(text)),
  setThirdSectionSelection: (selected: string) =>
    dispatch(setThirdSectionSelection(selected)),
  setThirdSectionText: (text: string) => dispatch(setThirdSectionText(text)),
})

export default connect(mapStateToProps, mapDispatchToProps)(Details)
