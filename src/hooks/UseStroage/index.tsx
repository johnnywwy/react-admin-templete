import { useSyncExternalStore } from "react";

export const useStorage = (key: string, initValue: any) => {
  // 订阅者
  const subscribe = (callback: () => void) => {
    window.addEventListener("storage", (e) => {
      console.log("触发了", e);
      callback();
    });
    return () => window.removeEventListener("storage", callback);
  };

  //从localStorage中获取数据 如果读不到返回默认值
  const getSnapshot = () => {
    return (
      (localStorage.getItem(key)
        ? JSON.parse(localStorage.getItem(key)!)
        : null) || initValue
    );
  };

  //修改数据
  const setStorage = (value: any) => {
    localStorage.setItem(key, JSON.stringify(value));
    window.dispatchEvent(new StorageEvent("storage")); //手动触发storage事件
  };

  //返回数据
  const res = useSyncExternalStore(subscribe, getSnapshot);

  return [res, setStorage];
};
