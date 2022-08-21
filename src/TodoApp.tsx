import { StyleSheet, View } from 'react-native';
import {useSelector} from 'react-redux'
import {AddItemRow} from './components/AddItemRow'
import {HeaderRow} from './components/HeaderRow'
import {TasksList} from './components/todo/TasksList'
import {getDoneItems, getNotDoneItems} from './reducers/todoSelectors'

export default function TodoApp() {
  const doneItems = useSelector(getDoneItems)
  const notDoneItems = useSelector(getNotDoneItems)

  return (
    <View style={styles.container}>
      <HeaderRow title={'TODO list'} size={'h1'}/>
      <TasksList items={notDoneItems}/>
      <AddItemRow/>
      {doneItems.length !== 0 &&
      <>
          <HeaderRow title={'Completed tasks'} size={'h4'}/>
          <TasksList items={doneItems}/>
      </>
      }
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'flex-start',
    justifyContent: 'flex-start',
    paddingTop: 50,
    paddingHorizontal: 10,
  },
});
