import { Navigate, Route, Routes } from 'react-router-dom';
import NewNote from './components/newNote';
import './app-styles.scss';

function App() {
  return (
    <div className = "main-container">
     <Routes>
       <Route path = "/" element = {<NewNote/>} /> 
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
