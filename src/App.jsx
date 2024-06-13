// const App = () => {
//   const name = "John";
//   const x = 10;
//   const y = 20;
//   const names = ['Brad', 'Mary', 'Joe', 'Marvin']
//   const loggedIn = false;

//   return (
//     <div>
//       <div classNameName="text-5xl">App</div>
//       <p>Hello {name}</p>
//       <p>
//         The sum of {x} and {y} is {x + y}
//       </p>
//       <ul>
//         {names.map((name, index) => (
//           <li key ={index}>{name}</li>
//         ))}
//       </ul>
//       { loggedIn ? <h1>Hello Member</h1> : <h1>Welcome</h1>}
//     </div>
//   );
// };

// export default App;

import React from "react";
import HomePage from "./pages/HomePage";
import {
  Route,
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
} from "react-router-dom";
import MainLayout from "./layouts/MainLayout";
import JobsPage from "./pages/JobsPage";
import NotFoundPage from "./pages/NotFoundPage";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<MainLayout />}>
      <Route index element={<HomePage />} />
      <Route path='/jobs' element={<JobsPage />} />
      <Route path='*' element={<NotFoundPage />} />
    </Route>
  )
);

const App = () => {
  return <RouterProvider router={router} />
};

export default App;
