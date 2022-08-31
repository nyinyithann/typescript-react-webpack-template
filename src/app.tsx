import { css } from '@emotion/css';
import * as React from 'react';

function App() {
  return (
    <div
      className={css({
        width: '100vw',
        margin: 'auto',
      })}
    >
      <p
        className={css({
          textAlign: 'center',
          fontSize: '2rem',
        })}
      >
        Hello, World
      </p>
    </div>
  );
}

export default App;
