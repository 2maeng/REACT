import { useRef, useState } from 'react';

// let count = 0;

function UseRef() {
  const HtmlRef = useRef(null);
  const count = useRef(0);
  const [isShow, setIsShow] = useState(false);

  const onChnageColor = () => {
    HtmlRef.current.style.color = 'red';
    count.current += 1;
  };

  const onShowtadaBtn = () => {
    setIsShow((prev) => !prev);
    // prev => set함수 인자의 callback 함수 반환 값
    // prev => 현재 가지고 있는 state 함수의 값
    // !prev => false -> true
    //          true -> false
  };

  console.log(count);

  return (
    <>
      {isShow && <div>Tada!</div>}
      <div ref={HtmlRef}>COLORS</div>
      <button onClick={onChnageColor}>색상 변경 / 카운트 추가</button>
      <button onClick={onShowtadaBtn}>SHOW</button>
    </>
  );
}
export default UseRef;

//  korpg95274@gmail.com
