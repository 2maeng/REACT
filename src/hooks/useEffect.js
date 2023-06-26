import { useEffect, useState } from 'react';
import TimeModal from './modal';

function UseEffect() {
  const [isActive, setIsActive] = useState(false);
  const [count, setCount] = useState(0);

  useEffect(() => {
    setIsActive(true);
  }, []);
  /** 컴포넌트 마운트 되었을 때만 실행 */

  console.log(count);

  useEffect(() => {
    if (!isActive) return;
    console.log('실행');
  }, [isActive]);
  /** 컴포넌트 마운트 되었을때 실행, 의존성 배열 내부의 요소가 바뀔 때 마다도 실행 */

  /**
   * 컴포넌트 마운트 되었을 때 실행
   *
   * 의존성 배열 내부의 값에 따라 해당 로직을 재실행할 것인지 실행
   * => 특징 state가 바뀔 때마다 실행할 이벤트를 정의
   */

  return (
    <div>
      {isActive && (
        <>
          <p>화면이 마운트 되었습니다</p>
          <TimeModal count={count} setCount={setCount} />
        </>
      )}
      <button onClick={() => setIsActive((prev) => !prev)}>재실행</button>
    </div>
  );
}
export default UseEffect;
