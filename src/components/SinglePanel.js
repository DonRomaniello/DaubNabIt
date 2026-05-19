import React, { useCallback, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { findMatches, replacePanel } from '../app/store/panelsSlice';
import { currentBrand, selectPaints } from '../app/store/paintsSlice';
import { useClipboardHex } from '../hooks/useClipboardHex';
import { ColorBar } from './ColorBar';
import { PaintParade } from './PaintParade';
import 'react-toastify/dist/ReactToastify.min.css';

export function SinglePanel({ panel, idx }) {
  const { color, rgb } = panel;
  const paints = useSelector(selectPaints);
  const brand = useSelector(currentBrand);
  const dispatch = useDispatch();
  const [range] = useState(0);

  const onHex = useCallback(
    (hex) => {
      dispatch(replacePanel({ idx, hex }));
      dispatch(findMatches({ paints, brand }));
    },
    [dispatch, idx, paints, brand]
  );

  const handlePaste = useClipboardHex(onHex);

  return (
    <div>
      <ColorBar color={color} rgb={rgb} range={range} onClick={handlePaste} />
      <PaintParade panel={panel} />
    </div>
  );
}
