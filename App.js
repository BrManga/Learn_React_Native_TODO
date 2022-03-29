import { useState } from 'react';
import { StyleSheet, Text, View, KeyboardAvoidingView, TextInput, TouchableOpacity, Keyboard } from 'react-native';
import Task from './components/Task';
export default function App() {
  const [task, setTask] = useState()
  const [taskItems, setTaskItems] = useState([])
  const handleTaskPress = ()=>{
    Keyboard.dismiss()
    setTaskItems([...taskItems, task])
    setTask(null)
  }
  const completeItems = (index)=>{
    let itemscopy=[...taskItems]
    itemscopy.splice(index, 1)
    setTaskItems(itemscopy)
  }
  return (
    <View style={styles.container}>
      <View style={styles.taskswrapper}>
        <Text style={styles.sectionTitle}>Tasks</Text>
        <View style={styles.items}>
          {
            taskItems.map((task,index)=>
            <TouchableOpacity key={index} onPress={()=>completeItems(index)}>
              <Task  text={task}/> 
            </TouchableOpacity>
            )
          }
            
        </View>
      </View>
      <KeyboardAvoidingView behavior={Platform.OS==='ios'?'padding':'height'} style={styles.writeTaskWraper}>
        <TextInput placeholder={'Write a task'} style={styles.input} value={task} onChangeText={text=>setTask(text)}/>
      <TouchableOpacity onPress={handleTaskPress}>
        <View style={styles.addWrapper}><Text style={styles.addText}>+</Text></View>
      </TouchableOpacity>
      </KeyboardAvoidingView>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'coral',
  },
  taskswrapper: {
    paddingTop: 80,
    paddingHorizontal: 20,
  },
  sectionTitle: {
    fontSize:24,
    fontWeight:'bold',
    textAlign:'center'
  },
  items: {
    marginTop:30
  },
  writeTaskWraper:{
    position:'absolute',
    bottom:60,
    width:'100%',
    flexDirection:'row',
    justifyContent:'space-around',
    alignItems:'center'
  },
  input:{
    paddingVertical:15,
    paddingHorizontal:15,
    backgroundColor:'white',
    borderWidth:1,
    borderRadius:60,
    borderColor:'black',
    width:250
  },
  addWrapper:{
    width:60,
    height:60,
    borderRadius:60,
    backgroundColor:'white',
    borderWidth:1,
    justifyContent:'center',
    alignItems:'center',
  },
  addText:{
    fontSize:44
  }
});
