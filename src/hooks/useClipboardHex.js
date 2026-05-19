import { useCallback } from 'react';
import { toast } from 'react-toastify';
import { _isValidHex } from '../modules/_isValidHex';

const HEX_FORMAT_MESSAGE =
  'Pasted colors need to be in hexadecimal format (for now). See help for details.';

export const useClipboardHex = (onHex) => {
  return useCallback(() => {
    navigator.clipboard.readText().then((clipboardColor) => {
      const hex = _isValidHex(clipboardColor);
      if (hex) {
        onHex(hex);
      } else {
        toast(HEX_FORMAT_MESSAGE, { toastId: HEX_FORMAT_MESSAGE });
      }
    });
    toast.clearWaitingQueue();
  }, [onHex]);
};
