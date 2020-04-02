import {AnyAction} from "redux"

export interface DefaultAction extends AnyAction {
  type: string
  payload: any
}
