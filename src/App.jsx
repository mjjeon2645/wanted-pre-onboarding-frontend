import { Routes, Route } from 'react-router-dom';

import SigninPage from './pages/SigninPage';

export default function App() {
  return (
    <div>
      <Routes>
        <Route path="/signin" element={<SigninPage />} />
      </Routes>
    </div>
  );
}
