import { useEffect, useRef, useState } from 'react';

function TimeModal({ count, setCount}) {

    const TimeRef = useRef();

  useEffect(() => {
    TimeRef.current = setInterval(() => {
      setCount((prev) => prev + 1);
    }, 1000);

    /** 컴포넌트가 처음 보였을 때 */

    /** 컴포넌트가 안 보였을 때 */
    return () => {
        clearInterval(TimeRef.current);
        setCount(0);
    };

  }, []);

  return <div>{count}</div>;
}
export default TimeModal;
