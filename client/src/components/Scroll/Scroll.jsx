import { useEffect } from 'react';

function Scroll() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return null;
}

export default Scroll;
