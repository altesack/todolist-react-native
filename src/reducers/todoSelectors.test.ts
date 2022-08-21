import {PersistState} from 'redux-persist/es/types'
import {RootState} from './store'
import {getDoneItems, getNotDoneItems} from './todoSelectors'
import {TodoListItemType} from './todoSlice'

test('test initial state', () => {
  const state: RootState = {
    todo: {
      data:[],
      _persist: persistState
    }
  }

  expect(getDoneItems(state)).toStrictEqual([]);
  expect(getNotDoneItems(state)).toStrictEqual([]);
});

test('Only deleted tasks', () => {
  const state: RootState = {
    todo: {
      data:[
        taskDoneDeleted,
        taskNotDoneDeleted
      ],
      _persist: persistState
    }
  }

  expect(getDoneItems(state)).toStrictEqual([]);
  expect(getNotDoneItems(state)).toStrictEqual([]);
});

test('Mix', () => {
  const state: RootState = {
    todo: {
      data:[
        taskDoneDeleted,
        taskNotDoneDeleted,
        taskDone,
        taskNotDone
      ],
      _persist: persistState
    }
  }

  expect(getDoneItems(state)).toStrictEqual([taskDone]);
  expect(getNotDoneItems(state)).toStrictEqual([taskNotDone]);
});

// Test data

const persistState: PersistState ={
  version: 1,
  rehydrated:true
}

const taskDoneDeleted: TodoListItemType = {
  id: 0,
  name: 'deleted done task',
  isDeleted: true,
  isDone: true
}

const taskNotDoneDeleted: TodoListItemType = {
  id: 0,
  name: 'deleted task',
  isDeleted: true,
  isDone: false
}


const taskDone: TodoListItemType = {
  id: 0,
  name: 'done task',
  isDeleted: false,
  isDone: true
}

const taskNotDone: TodoListItemType = {
  id: 0,
  name: 'task to do',
  isDeleted: false,
  isDone: false
}
