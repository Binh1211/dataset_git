import React, { useState } from 'react';

export const ManyStates7 = () => {
  const [list, setList] = useState<number[]>([]);
  const [obj, setObj] = useState<{ x: number; y: number }>({ x: 0, y: 0 });
  const [strArr, setStrArr] = useState<string[]>(['a']);
  const [boolArr, setBoolArr] = useState<boolean[]>([]);
  const [mixed, setMixed] = useState<Array<number | string>>([]);
  const [tuple, setTuple] = useState<[number, string]>([0, '']);
  const [record, setRecord] = useState<Record<string, number>>({});
  return <div>{list.length}{obj.x}{strArr.join()}{boolArr.length}{mixed.length}{tuple[0]}{Object.keys(record).length}</div>;
};