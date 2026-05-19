import { useCallback } from 'react';
import { toast } from 'react-toastify';

const SUCCESS_MESSAGE = 'Paint information copied to clipboard!';
const FAILURE_MESSAGE = 'Could not copy to clipboard.';

const formatPaint = (paint) => `${paint.hex} "${paint.name}" ${paint.brand}`;

export const useCopyPaintToClipboard = () => {
  return useCallback((match) => {
    navigator.clipboard
      .writeText(formatPaint(match.paint))
      .then(() => toast(SUCCESS_MESSAGE, { autoClose: 2000 }))
      .catch(() => toast(FAILURE_MESSAGE, { autoClose: 2000 }));
  }, []);
};
