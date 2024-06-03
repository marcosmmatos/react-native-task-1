import { Alert, FlatList, View } from "react-native";
import { styles } from "./styles";
import Task from "../../components/Tasks/tasks";
import CompletedTask from "../../components/CompletedTask/CompletedTask";
import Counter from "../../components/Counters/counters";
import Input from "../../components/Input/input";
import { useState } from "react";
import EmptyList from "../../components/EmptyList/emptyList";

export default function Home() {
  const [task, setTask] = useState<string[]>([]);
  const [completedTask, setCompletedTask] = useState<string[]>([]);
  const [taskDescription, setTaskDescription] = useState("");

  // function to create a new task
  function handleAddTask() {
    if (task.includes(taskDescription)) {
      Alert.alert("Tarefa", "Esta tarefa já esta na lista");
      return;
    }

    if (taskDescription == "") {
      Alert.alert("Tarefa", "A descrição da tarefa não pode estar vazia");
      return;
    }

    setTask((prevState) => [...prevState, taskDescription]);
    setTaskDescription("");
    return;
  }

  // function to delete a task
  function handleDeleteTask(description: string) {
    Alert.alert("Tarefa", `Deseja remover a tarefa: ${description}?`, [
      {
        text: "Sim",
        onPress: () => setTask(task.filter((task) => task !== description)),
      },
      { text: "Não", style: "cancel" },
    ]);
    return;
  }

  // function to complete a task
  function handleCompleteTask(description: string) {
    setCompletedTask((prevState) => [...prevState, description]);
    setTask(task.filter((task) => task !== description));
  }

  // function to delete a completed task
  function handleDeleteCompletedTask(description: string) {
    Alert.alert("Tarefa", `Deseja remover a tarefa: ${description}?`, [
      {
        text: "Sim",
        onPress: () =>
          setCompletedTask(
            completedTask.filter(
              (completedTask) => completedTask !== description
            )
          ),
      },
      { text: "Não", style: "cancel" },
    ]);
    return;
  }

  // function to undo a completed task
  function handleUndoTask(description: string) {
    setTask((prevState) => [...prevState, description]);
    setCompletedTask(task.filter((task) => task !== description));
  }

  return (
    <View style={styles.page}>
      <Input
        handleAddTask={handleAddTask}
        taskDescription={taskDescription}
        setTaskDescription={setTaskDescription}
      />
      <Counter task={task} completedTask={completedTask} />
      <View style={styles.taskArea}>
        <FlatList
          style={styles.fixedList}
          data={task}
          keyExtractor={(item) => item}
          renderItem={({ item }) => (
            <Task
              key={item}
              description={item}
              onRemove={() => handleDeleteTask(item)}
              onComplete={() => handleCompleteTask(item)}
            />
          )}
          ListEmptyComponent={() => <EmptyList />}
        />
        <FlatList
          style={styles.fixedList}
          data={completedTask}
          keyExtractor={(item) => item}
          renderItem={({ item }) => (
            <CompletedTask
              key={item}
              description={item}
              onRemove={() => handleDeleteCompletedTask(item)}
              onUndo={() => handleUndoTask(item)}
            />
          )}
        />
      </View>
    </View>
  );
}
