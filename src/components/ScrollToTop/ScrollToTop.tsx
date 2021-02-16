import { useEffect } from 'react';
import { useHistory } from 'react-router-dom';

/**
 * A component that scrolls to the top of the page on every URL update.
 */
export const ScrollToTop: React.FC = (): null => {
  const history = useHistory();

  // credit goes to https://stackoverflow.com/a/54343182
  useEffect(() => {
    const unlisten = history.listen(() => {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    });
    return () => {
      unlisten();
    };
  }, []);

  return null;
};
