'use client'

import { useCallback, useState } from 'react';
import { Controlled as ControlledZoom } from 'react-medium-image-zoom';
import 'react-medium-image-zoom/dist/styles.css';




export default function ZoomImg({
  children,
} : {
  children: string | Blob | undefined,
}) {
  const [isZoomed, setIsZoomed] = useState(false);

  const handleZoomChange = useCallback(
    (shouldZoom: boolean) => {
      setIsZoomed(shouldZoom)
    }, []);

  return (
    <div className="w-full circled">
      <ControlledZoom
        isZoomed={isZoomed}
        onZoomChange={handleZoomChange}
      >
        <img src={children} alt="" className="w-full h-full rounded" />
      </ControlledZoom>
    </div>
  )
}