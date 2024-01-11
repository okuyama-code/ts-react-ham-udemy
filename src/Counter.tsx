import React, { useState } from 'react'


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

  return (
    <div>
      <div>value: {value}</div>
      <button onClick={increment}>+1</button>
      <button onClick={decrement}>-1</button>
    </div>
  )
}

export default Counter
