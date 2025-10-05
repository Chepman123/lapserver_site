import { useEffect } from 'react';

function App() {
  useEffect(() => {
    fetch('/api/hello')
      .then(res => res.json())
      .then(data => {
        console.log('Відповідь з сервера:', data);
      });
  }, []);

  return <h1>Чат починається!</h1>;
}

export default App;
