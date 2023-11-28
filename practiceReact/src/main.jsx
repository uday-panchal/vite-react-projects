import React from 'react'
import ReactDOM from 'react-dom/client'
// import App from './App.jsx'
import './index.css'
// import UseHooks1 from './Hooks/UseHooks1'
// import UseRefHook from './Hooks/UseRefHooks'
import UseCallback from './Hooks/UseCallback'
import Todo from './Hooks/Todo'
// import PasswordCreate from './passwordGernater/PasswordCreate'
// import BackgroundChanger from './backgroundColorChange/BackgroundChanger.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    {/* <App /> */}
    {/* <BackgroundChanger/> */}
    {/* <UseHooks1/> */}
    {/* <UseRefHook/> */}
    <Todo/>
    <UseCallback/>
    {/* <PasswordCreate/> */}
  </React.StrictMode>,
)