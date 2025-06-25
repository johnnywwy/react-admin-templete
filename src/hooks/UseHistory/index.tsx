import { useSyncExternalStore } from "react";

export const useHistory = () => {
  const subscribe = (callback: () => void) => {
    // 订阅浏览器api，监听 history 变化
    // vue 三种路由结构 ssr 浏览器：hash history
    // hash 底层，监听 hashChange 事件
    // history 底层，监听 popstate 事件

    window.addEventListener("popstate", callback);
    window.addEventListener("hashChange", callback);
    return () => {
      // 取消订阅
      window.removeEventListener("popstate", callback);
      window.removeEventListener("hashChange", callback);
    };
  };

  const getSnapshot = () => {
    return window.location.href;
  };

  const url = useSyncExternalStore(subscribe, getSnapshot);

  const push = (url: string) => {
    window.history.pushState({}, "", url);
    window.dispatchEvent(new PopStateEvent("popstate"));
  };

  const replace = (url: string) => {
    window.history.replaceState({}, "", url);
    window.dispatchEvent(new PopStateEvent("popstate"));
  };

  return [url, push, replace] as const;
};

// const [url, push, replace] = useHistory()
