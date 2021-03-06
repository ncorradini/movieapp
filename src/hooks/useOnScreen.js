import { useEffect, useState } from 'react';

export const useOnScreen = (ref) => {
  const [isIntersecting, setIntersecting] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      setIntersecting(entry.isIntersecting);
      if (entry.isIntersecting) observer.disconnect();
    }, {
      rootMargin: '0px',
    });

    if (ref.current) observer.observe(ref.current);
  }, []);

  return isIntersecting;
};
