import {connect} from 'react-redux'
import List from '../components/List'
import {listSelector} from '../selector'
import {selectItem} from '../actions'
import {Dispatch} from 'redux'

const mapStateToProps = (state: any) => ({
  list: listSelector(state),
})

const mapDispatchToProps = (dispatch: Dispatch) => ({
  selectItem: (id: string) => dispatch(selectItem(id)),
})

export default connect(mapStateToProps, mapDispatchToProps)(List)
