import './App.css';
import Register from "./screens/Register";
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import UserList from './screens/UserList';
import { Provider } from 'react-redux'

import {configureStore} from "@reduxjs/toolkit"


const store = configureStore({
  reducer: rootReducer,
});  // Creating a store



const router = createBrowserRouter([
  {
    path: "/Register",
    element: <Register />,
  },
  {
    path: "/UserList",
    element: <UserList />,
  },
]);



function App() {
  return <div>
    {/* <About />
    <Contact /> */}
    {/* <UserList /> */}
    {/* <Register /> */}
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
    
    </div>;
}

export default App;

// Basic App create Done
// Screens and Components