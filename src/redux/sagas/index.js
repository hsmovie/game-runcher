import { all } from 'redux-saga/effects'

function* helloWorld() {
  // yield console.log('hello world')
}

export default function* rootSaga() {
  yield all([
    helloWorld()
  ])
}
