import {useMemo, useRef} from "react";


export function useMemoizedCallback(fn) {
  const fnRef = useRef(fn);


  // why not write `fnRef.current = fn`?
  // https://github.com/alibaba/hooks/issues/728
  fnRef.current = useMemo(() => fn, [fn]);


  const memoizedFn = useRef();


  if (!memoizedFn.current) {
    memoizedFn.current = function (...args) {
      return fnRef.current.apply(this, args);
    };
  }


  return memoizedFn.current;
}

