import { useRouter } from 'next/router';

export default function Game() {
  const router = useRouter();

  return (
    <div style={{ textAlign: 'center', marginTop: '100px' }}>
      <h1>Добро пожаловать в игру!</h1>
      <button
        onClick={() => router.push('/level1')}
        style={{
          padding: '10px 20px',
          fontSize: '18px',
          cursor: 'pointer',
          marginTop: '20px'
        }}
      >
        Играть
      </button>
    </div>
  );
}
export default function Game() {
  function startGame() {
    alert('Игра началась!');
  }

  return (
    <div style={{ textAlign: 'center', marginTop: '50px' }}>
      <h1>Добро пожаловать в игру!</h1>
      <button
        onClick={startGame}
        style={{
          padding: '10px 20px',
          fontSize: '18px',
          cursor: 'pointer',
          marginTop: '20px'
        }}
      >
        Играть
      </button>
    </div>
  );
}
