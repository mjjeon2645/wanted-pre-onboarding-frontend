import { useNavigate } from 'react-router-dom';

export default function HomePage() {
  const navigate = useNavigate();
  return (
    <>
      <button type="button" onClick={() => navigate('/signin')}>로그인</button>
      <button type="button" onClick={() => navigate('/signup')}>회원가입 하기</button>
    </>
  );
}
