import React from 'react';
import './App.css';
import Counter from './Counter'

// propsで親コンポーネントから渡ってきたものに型をつけるときは外に出してinterfaceで定義する
interface AppProps {
  message?: string,
}
const App: React.FunctionComponent<AppProps> = ({ message }) => {
  // javascriptの分割代入を使っている。
  // コンポーネントに渡されたプロパティ（props）から、messageだけを取り出しています。
  // これにより、props.messageと書く代わりに、直接messageという変数を使用できます。
  return (
    <div>
      <Counter />
    </div>
  );
}

App.defaultProps = {
  message: 'Hello, defaultProps!',
}

export default App;
