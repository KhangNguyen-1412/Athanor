import { useEffect } from 'react';

let lockCount = 0;

/**
 * Hook to lock body and background scrolling when a modal is open.
 * Supports multiple nested modals via lock counter.
 */
export const useBodyScrollLock = (isLocked: boolean = true) => {
  useEffect(() => {
    if (!isLocked) return;

    lockCount++;
    if (lockCount === 1) {
      document.body.style.overflow = 'hidden';
      document.documentElement.style.overflow = 'hidden';
      document.body.classList.add('modal-open');
    }

    return () => {
      lockCount = Math.max(0, lockCount - 1);
      if (lockCount === 0) {
        document.body.style.overflow = '';
        document.documentElement.style.overflow = '';
        document.body.classList.remove('modal-open');
      }
    };
  }, [isLocked]);
};
