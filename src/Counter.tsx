import React, { useState, useRef, useEffect } from 'react'

// const array: Array<number> = [1,2,3]
// const readonlyarray: ReadonlyArray<number> = [1,2,3]
// array[0] = 11;
// readonlyarray[0] = 11;

// React.FunctionComponent はReact.FCでオッケー
// const Counter: React.FunctionComponent<{}> = () => {
const Counter: React.FC<{}> = () => {
  const initialValue: any = 0;
  const [value, setValue] = useState<number>(initialValue);

  // このアロー関数は、現在の状態（prevState）に1を加えて新しい状態を返すことで、setValue関数によってその新しい状態がコンポーネントのvalueにセットされます。
  const increment = () => {
    setValue((prevState) => prevState + 1);
  }

  const decrement = () => {
    if (value > 0) {
      setValue((prevState) => prevState - 1);
    }
  }

  const renderTimes = useRef<number>(0);

  useEffect(() => {
    console.log("render was done")
    renderTimes.current = renderTimes.current + 1;
  }, [value])

  // nullの後ろに!をつける。この！のことをノンnullアサーションオペレーターという
  const ref = useRef<HTMLInputElement>(null!);

  const focusInput = () => {
    // ref.currentでinputを参照できる
    // const current = ref.current
    // if (current != null) {
    //   current.focus();
    // }
    // if (current != null) current.focus();

    // ref.currentが呼べる時だけ呼ぶための簡単な書き方.
    // nullの時は実行しないようになる。?
    // ref.current?.focus();
    ref.current.focus();

  }

  return (
    <div>
      <div>value: {value}</div>
      <button onClick={increment}>+1</button>
      <button onClick={decrement}>-1</button>
      <div>This component was re-render { renderTimes.current} times!</div>
      <input ref={ref} type="text" />
      <button onClick={focusInput}>Click Me!</button>
    </div>
  )
}

export default Counter
