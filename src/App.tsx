import React from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <div>
     <Routes>
       <Route path = "/" element = {<h1>Home Page</h1>} /> 
       <Route path = "/new" element = {<h1>New Page</h1>} /> 
       <Route path = "/:id" >
        <Route index element = {<h1>Show</h1>} /> 
        <Route path = "edit" element = {<h1>Edit Page</h1>} /> 
       </Route>
       <Route path = "*"  element = {<Navigate to = "/" />} /> 
     </Routes>
    </div>
  );
}

export default App;
