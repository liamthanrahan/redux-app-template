export type Count = number

export type ActionType = 'INCREMENT_COUNT' | 'SET_TEST'

export type IncrementCountAction = { type: 'INCREMENT_COUNT' }
export type SetTestAction = { type: 'SET_TEST', test: string }

export type Action = IncrementCountAction | SetTestAction

export type AnonymousActionCreator = () => Action
export type IncrementCountActionCreator = () => IncrementCountAction
export type SetTestActionCreator = () => SetTestAction

export type ActionCreator =
  | AnonymousActionCreator
  | IncrementCountActionCreator
  | SetTestActionCreator

export type State = {
  +count: Count,
  +test: string,
}

export type MapStateToProps = (state: State) => { [string]: any }
export type MapDispatchToProps = { [string]: ActionCreator }
