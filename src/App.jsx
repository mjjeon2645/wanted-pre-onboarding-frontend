import { Routes, Route } from 'react-router-dom';

import SigninPage from './pages/SigninPage';
import SignupPage from './pages/SignupPage';

export default function App() {
  return (
    <div>
      <Routes>
        <Route path="/signin" element={<SigninPage />} />
        <Route path="/signup" element={<SignupPage />} />
      </Routes>
    </div>
  );
}
