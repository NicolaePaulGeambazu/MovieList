import { useEffect, useState } from 'react';

type DeviceType = 'desktop' | 'laptop' | 'tablet' | 'mobile';

const useDeviceType = (): { deviceType: DeviceType } => {
  const [deviceType, setDeviceType] = useState<DeviceType>('desktop');

  useEffect(() => {
    const handleResize = (): void => {
      const width = window.innerWidth;

      if (width >= 1200) {
        setDeviceType('desktop');
      } else if (width >= 992) {
        setDeviceType('laptop');
      } else if (width >= 768) {
        setDeviceType('tablet');
      } else {
        setDeviceType('mobile');
      }
    };

    let timeoutId: NodeJS.Timeout;

    const debouncedHandleResize = () => {
      clearTimeout(timeoutId);
      timeoutId = setTimeout(handleResize, 100); // Adjust the delay as needed
    };

    window.addEventListener('resize', debouncedHandleResize);

    handleResize(); // Initial call to set the initial deviceType

    return () => {
      window.removeEventListener('resize', debouncedHandleResize);
    };
  }, []);

  return { deviceType };
};

export default useDeviceType;
