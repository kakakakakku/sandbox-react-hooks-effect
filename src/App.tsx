import React, { useState, useEffect } from 'react';
import axios from 'axios';

const App: React.FC = () => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    document.title = `You clicked ${count} times`;
    return (() => console.log('Clean Up 🐤'));
  }, [count]);

  const [meowUrl, setMeowUrl] = useState('');

  useEffect(() => {
    const fetch = async () => {
      const results = await axios('http://aws.random.cat/meow');
      setMeowUrl(results.data.file)
    };
    fetch();
  }, []);

  return (
    <div>
      <p>You clicked {count} times</p>
      <button onClick={() => setCount(count + 1)}>
        Click me
      </button>
      <hr />
      <img src={meowUrl} alt='meow' style={{ height: 200 }} />
    </div>
  );
}

export default App;
