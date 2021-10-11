import React, { useState, useRef } from 'react';
import PropTypes from 'prop-types';

Counter.propTypes = {};

function Counter(props) {
  const [count, setCount] = useState(0);
  const prevCount = useRef(count);

  useEffect(() => {
    prevCount.current = count;
  }, [count]);

  const handleOnClick = () => {
    setCount((x) => x + 1);
  };

  return (
    <div>
      <p>Previous: {prevCount.current}</p>
      <p>Current: {count}</p>

      <div>
        <button onClick={handleOnClick}>Click</button>
      </div>
    </div>
  );
}

export default Counter;
