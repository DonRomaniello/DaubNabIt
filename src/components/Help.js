import React, { useEffect, useState } from 'react';
import { IconContext } from 'react-icons';
import { useSelector } from 'react-redux';
import { BsQuestionCircleFill } from 'react-icons/bs';
import { paradeIsOpened } from '../app/store/panelsSlice';
import { helpContent } from '../content/helpContent';
import { HELP_ICON_SIZE } from '../config';
import styles from './Help.module.css';

const renderParagraph = (paragraph, key) => {
  if (typeof paragraph === 'string') {
    return <p key={key}>{paragraph}</p>;
  }
  return (
    <p key={key}>
      {paragraph.parts.map((part, i) =>
        typeof part === 'string' ? (
          <React.Fragment key={i}>{part}</React.Fragment>
        ) : (
          <a key={i} href={part.link} target="_blank" rel="noreferrer">
            {part.text}
          </a>
        )
      )}
    </p>
  );
};

export function Help() {
  const paradeOpened = useSelector(paradeIsOpened);
  const [helpOpen, setHelpOpen] = useState(false);

  const close = () => setHelpOpen(false);

  useEffect(() => {
    if (!helpOpen) return undefined;
    const onKey = (e) => {
      if (e.key === 'Escape') close();
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [helpOpen]);

  return (
    <div
      className={`${styles.help} ${paradeOpened ? styles.helpParadeOpened : ''}`}
    >
      <button
        type="button"
        className={styles.iconButton}
        onClick={() => setHelpOpen((open) => !open)}
        aria-label="Help"
        aria-expanded={helpOpen}
      >
        <IconContext.Provider value={{ className: styles.context }}>
          <BsQuestionCircleFill
            className={styles.question}
            size={HELP_ICON_SIZE}
          />
        </IconContext.Provider>
      </button>
      {helpOpen && (
        <div
          role="dialog"
          aria-modal="true"
          aria-label={helpContent.title}
          className={styles.helpWindow}
          onClick={close}
        >
          <h1>{helpContent.title}</h1>
          {helpContent.intro.map((text, i) => (
            <p key={i}>{text}</p>
          ))}
          {helpContent.sections.map((section) => (
            <React.Fragment key={section.heading}>
              <h2>{section.heading}</h2>
              {section.paragraphs.map((p, i) => renderParagraph(p, i))}
            </React.Fragment>
          ))}
        </div>
      )}
    </div>
  );
}
