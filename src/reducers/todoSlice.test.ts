import reducer, {addItem, removeItem, renameItem, toggleDone} from './todoSlice'

test('should return the initial state', () => {
  expect(reducer(undefined, { type: undefined })).toEqual({data: []})
})

describe('test add item', () => {
  test('to an empty list', () => {
    expect(reducer(undefined, addItem())).toEqual({data: [task1brandNew]})
  })
  test('add the the second task', () => {
    expect(reducer({data: [ task1brandNew ]}, addItem())).toEqual({data: [ task1brandNew, task2brandNew ]})
  })
})

describe('test remove item', () => {
  test('wrong id should do nothing', () => {
    expect(reducer(
      {data: [ task3 ]},
      removeItem(0))
    ).toEqual(
      {data: [ task3 ]}
    )
  })

  test('one task in a list', () => {
    expect(reducer(
      {data: [ task3 ]},
      removeItem(3))
    ).toEqual(
      {data: [ task3deleted ]}
    )
  })

  test('many tasks in a list', () => {
    expect(reducer(
      {data: [ task1brandNew, task3, task4 ]},
      removeItem(3))
    ).toEqual(
      {data: [task1brandNew, task3deleted, task4 ]}
    )
  })
})

describe('test toggle done item', () => {
  test('wrong id should do nothing', () => {
    expect(reducer(
      {data: [ task3 ]},
      toggleDone(0))
    ).toEqual(
      {data: [ task3 ]}
    )
  })

  test('one task in a list', () => {
    expect(reducer(
      {data: [ task3 ]},
      toggleDone(3))
    ).toEqual(
      {data: [ task3done ]}
    )
  })

  test('many tasks in a list', () => {
    expect(reducer(
      {data: [ task1brandNew, task3, task4 ]},
      toggleDone(3))
    ).toEqual(
      {data: [task1brandNew, task3done, task4 ]}
    )
  })

  test('uncheck one tasks in a list', () => {
    expect(reducer(
      {data: [ task1brandNew, task3done, task4 ]},
      toggleDone(3))
    ).toEqual(
      {data: [task1brandNew, task3, task4 ]}
    )
  })
})

describe('test rename item', () => {
  test('wrong id should do nothing', () => {
    expect(reducer(
      {data: [ task3 ]},
      renameItem({id: 0, name: 'Some task NEW name'}))
    ).toEqual(
      {data: [ task3 ]}
    )
  })

  test('uncheck one tasks in a list', () => {
    expect(reducer(
      {data: [ task1brandNew, task3, task4 ]},
      renameItem({id: 3, name: 'Some task NEW name'}))
    ).toEqual(
      {data: [task1brandNew, task3renamed, task4 ]}
    )
  })
})

// Test data

const task1brandNew = { id: 1,  isDeleted: false, isDone: false, name: ""};
const task2brandNew = { id: 2,  isDeleted: false, isDone: false, name: ""};
const task3 =         { id: 3,  isDeleted: false, isDone: false, name: "Some task name"};
const task3renamed =  { id: 3,  isDeleted: false, isDone: false, name: "Some task NEW name"};
const task3done =     { id: 3,  isDeleted: false, isDone: true,  name: "Some task name"};
const task3deleted =  { id: 3,  isDeleted: true,  isDone: false, name: "Some task name"};
const task4 =         { id: 4,  isDeleted: false, isDone: false, name: "Some task name"};

