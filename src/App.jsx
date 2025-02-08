import { Home } from "./components/Home";
import { TodoList } from "./components/TodoList";
import { UserInfo } from "./components/Userinfo";
import { UserSettings } from "./components/UserSettings";


export const App = () => {
  return (
    <>
      <Home />
      <UserInfo />
      <UserSettings />
      <h1>TodoList Test</h1>
      <TodoList />
    </>
  )
};
