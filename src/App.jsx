import { Home } from "./components/Home";
import { TodoList } from "./components/TodoList";
import { UserInfo } from "./components/Userinfo";
import { UserSettings } from "./components/UserSettings";
import { ThemeSwitch } from "./components/ThemeSwitch";
import { Footer } from "./components/Footer";


import "./App.css"



export const App = () => {
  return (
    <>
      <ThemeSwitch/> 
      <Home />
      <UserInfo />
      <UserSettings />
      <h1>TodoList Test</h1>
      <TodoList />
      <Footer/>
    </>
  )
};
