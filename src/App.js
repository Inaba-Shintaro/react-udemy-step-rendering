import './App.css';
import { useState, useCallback, useMemo } from 'react';
import { ChildArea } from './ChildArea';

function App() {

  console.log('Appがレンダリングされた');

  //state
  const [text, setText] = useState('')
  const [open, setOpen] = useState(false)

  //関数
  //テキスト変更
  const onChangeText = (e) => setText(e.target.value);

  //Child Area とぐる
  const onClickOpen = () => setOpen(!open);
  
  //Child Area 閉じる
  //callback
  const onClickClose = useCallback(() => setOpen(false),[open]);

  //useMemo
  const temp = useMemo(() => 1 + 3,[]);
  console.log(temp);

  return (
    <div className='App'>
      <input
        type='text'
        value={text}
        onChange={(e) => onChangeText(e)}
      />
      <p>{text}</p>
      <br />
      <br />
      <button 
        onClick={onClickOpen}
      >表示</button>
        <ChildArea 
          open={open}
          onClickClose={onClickClose}
        />
    </div>
  );
}

export default App;

//再レンダリングが起きる条件
//stateが更新されたコンポーネントは再レンダリング
//propsが更新されたコンポーネントは再レンダリング
//再レンダリングされたコンポーネントの配下の子要素は再レンダリング

//アロー関数で定義した関数はレンダリングの度に新しく生成される仕様になっている
//=新しいpropsになっている
//＝propsの変更が起きている
//＝再レンダリングの対象となる（memoで囲っていても）

//useCallback
//useEffectと似ている
//  const onClickClose = () => setOpen(false);
//　レンダリングの度に再生成される→propsで渡していた場合、再レンダリングの対象になる

//  const onClickClose = useCallback(() => setOpen(false),[]);
//  useCallback()で囲んでいる→[]なので、最初に生成された関数をずっと使う

//  const onClickClose = useCallback(() => setOpen(false),[open]);
//  useCallback()で囲んでいる→[open]に変更があった場合のみ再レンダリングされる

//useMemo()
//変数を囲むこともできる 仕組みはuseEffectとかと同じ 