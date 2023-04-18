import { Routes, Route } from 'react-router-dom';

import SigninPage from './pages/SigninPage';
import SignupPage from './pages/SignupPage';
import TodoPage from './pages/TodoPage';

export default function App() {
  return (
    <div>
      <Routes>
        <Route path="/signin" element={<SigninPage />} />
        <Route path="/signup" element={<SignupPage />} />
        <Route path="/todo" element={<TodoPage />} />
      </Routes>
    </div>
  );
}
