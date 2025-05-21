'use client'
import clsx from "clsx";
import { useCallback, useEffect, useState } from "react";

/* needle and scale is draw in container, default rotate start from 0 clock */
const containStyle = 'absolute left-1/2 h-1/2 -translate-x-1/2 origin-bottom flex';

export default function Clock() {
  const [clck, setClck] = useState<Date>(new Date());
  const [mount, setMount] = useState<boolean>(false);

  useEffect(() => {
    setMount(true);
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
    const deg: number = clck.getHours() % 12 * 30 + clck.getMinutes() * 0.5;
    return `${deg}deg`;
  }, [clck]);

  if (!mount) {
    return <ClockPanel hrDeg={'0deg'} mnDeg={'0deg'} scDeg={'0deg'} />
  }

  return <ClockPanel hrDeg={hrDeg()} mnDeg={mnDeg()} scDeg={scDeg()} />
}


function ClockPanel({
  hrDeg,
  mnDeg,
  scDeg,
} : {
  hrDeg: string,
  mnDeg: string,
  scDeg: string,
}) {
  return (
    <div className={'relative w-full h-full aspect-square'}>
      {/* minute scale */}
      {Array.from({ length: 60 }).map((_: unknown, scale: number) => {
        return (
          <div key={scale} className={containStyle} style={{ rotate: `${scale * 6}deg` }}>
            <div className={clsx('h-4 rounded',
              scale % 5 ? 'w-0.5 bg-slate-200 dark:bg-slate-600'
                        : 'w-1 bg-slate-300 dark:bg-slate-400',
            )}></div>
          </div>
        )
      })}

      {/* center circle */}
      <div className={clsx(
        'absolute top-1/2 left-1/2 w-2 h-2 rounded-full z-10',
        '-translate-x-1/2 -translate-y-1/2',
        'bg-slate-600 dark:bg-slate-400',
      )}></div>

      {/* hour */}
      <div className={clsx(
        containStyle,
        'items-end z-[3]'
      )} style={{ rotate: hrDeg }}>
        <div className={'rounded w-1 h-2/5 bg-slate-700 dark:bg-slate-300'}></div>
      </div>

      {/* minute */}
      <div className={clsx(
        containStyle,
         'items-end z-[2]'
      )} style={{ rotate: mnDeg }}>
        <div className={'rounded w-0.5 h-3/5 bg-slate-700 dark:bg-slate-300'}></div>
      </div>

      {/* second */}
      <div className={clsx(
        containStyle,
        'items-end z-[1]'
      )} style={{ rotate: scDeg }}>
        <div className={'rounded w-0.5 h-full bg-red-600 dark:bg-red-700'}></div>
      </div>
    </div>
  )
}