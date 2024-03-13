import {RouterProvider} from 'react-router-dom'
import {router} from './router'
import React, {createContext, useState} from "react";
import {initialContext} from "./providers/context";

export const Store = createContext({});

const App = () => {
  const [context, setContext] = useState(initialContext)

  return (
    <Store.Provider value={{context, setContext}}>
      <RouterProvider router={router}/>
    </Store.Provider>
  )
}

export default App
