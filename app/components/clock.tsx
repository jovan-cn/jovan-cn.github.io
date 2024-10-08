'use client'
import classNames from "classnames";
import { useCallback, useEffect, useState } from "react";

/* needle and scale is draw in container, default rotate start from 0 clock */
const containStyle = 'absolute left-1/2 h-1/2 -translate-x-1/2 origin-[0_100%] flex';

export default function Clock() {
  const [clck, setClck] = useState<Date>(new Date())

  useEffect(() => {
    const timer = setInterval(() => {
      setClck(new Date()); /* localtime */
    }, 1000);

    return () => clearInterval(timer);
  }, [clck])

  const scDeg = useCallback(() => {
    const deg = clck.getSeconds() * 6;
    return `${deg}deg`;
  }, [clck]);

  const mnDeg = useCallback(() => {
    const deg: number = clck.getMinutes() * 6 + clck.getSeconds() * 6 / 60;
    return `${deg}deg`;
  }, [clck]);

  const hrDeg = useCallback(() => {
    const deg: number = clck.getHours() * 30 + clck.getTime() / 1000 % 3600 * 30 / 3600;
    return `${deg}deg`;
  }, [clck]);


  return (
    <div className={'relative w-full h-full'}>
      {/* minute scale */}
      {Array.from({ length: 60 }).map((v: unknown, scale: number) => {
        return (
          <div key={scale} className={containStyle} style={{ rotate: `${scale * 6}deg` }}>
            <div className={classNames('h-3 rounded',
              scale % 5 ? 'w-0.5 bg-slate-200 dark:bg-slate-600'
                        : 'w-1 bg-slate-300 dark:bg-slate-400',
            )}></div>
          </div>
        )
      })}

      {/* center circle */}
      <div className={classNames(
        'absolute top-1/2 left-1/2 w-2 h-2 rounded z-10',
        '-translate-x-1/2 -translate-y-1/2',
        'bg-slate-600 dark:bg-slate-400',
      )}></div>

      {/* hour */}
      <div className={classNames(containStyle, 'items-end z-[3]')} style={{ rotate: hrDeg() }}>
        <div className={'rounded w-1 h-2/5 bg-slate-700 dark:bg-slate-300'}></div>
      </div>

      {/* minute */}
      <div className={classNames(containStyle, 'items-end z-[2]')} style={{ rotate: mnDeg() }}>
        <div className={'rounded w-0.5 h-3/5 bg-slate-700 dark:bg-slate-300'}></div>
      </div>

      {/* second */}
      <div className={classNames(containStyle, 'items-end z-[1]')} style={{ rotate: scDeg() }}>
        <div className={'rounded w-0.5 h-full bg-red-600 dark:bg-red-900'}></div>
      </div>
    </div>
  )
}