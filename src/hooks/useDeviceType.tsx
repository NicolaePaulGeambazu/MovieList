import { useEffect, useState } from 'react'
import { DeviceType } from '../types'


const useDeviceType = (): { deviceType: DeviceType } => {
  const [deviceType, setDeviceType] = useState<DeviceType>('desktop')

  useEffect(() => {
    const handleResize = (): void => {
      const width = window.innerWidth

      if (width >= 1200) {
        setDeviceType('desktop')
      } else if (width >= 992) {
        setDeviceType('laptop')
      } else if (width >= 768) {
        setDeviceType('tablet')
      } else {
        setDeviceType('mobile')
      }
    }

    let timeoutId: NodeJS.Timeout

    const debouncedHandleResize = () => {
      clearTimeout(timeoutId)
      timeoutId = setTimeout(handleResize, 100)
    }

    window.addEventListener('resize', debouncedHandleResize)

    handleResize()

    return () => {
      window.removeEventListener('resize', debouncedHandleResize)
    }
  }, [])

  return { deviceType }
}

export default useDeviceType
