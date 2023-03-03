import { memo } from 'react';
import React from 'react'

const style = {
  width:'100%',
  height:'200px',
  backgroundColor:'brown',
}

export const ChildArea = memo((props) => {

  //propsの受けとり
  const { open, onClickClose } = props;

  console.log('ChildAreaがレンダリングされた');

  const data = [...Array(2000).keys()];
  data.forEach(() => {
    console.log('...');
  })
  console.log(data);

  return (
    <>
    { open ? (
      <div style={style}>
        <p>子コンポーネント</p>
        <button 
          onClick={onClickClose}
        >
          閉じる
        </button>
      </div>
    ) : null}
    </>
  )
})

//memo()でアロー関数を囲ってあげると
//propsの変更がされない限り再レンダリングされないよ
//という意味

//親コンポーネントでstateの変更があってもレンダリングされない
//→レンダリングの最適化→表示速度UP
