import React, { useState } from 'react';
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

  const toggle = () => setHelpOpen((open) => !open);

  return (
    <div
      className={`${styles.help} ${paradeOpened ? styles.helpParadeOpened : ''}`}
    >
      <IconContext.Provider value={{ className: styles.context }}>
        <BsQuestionCircleFill
          className={styles.question}
          size={HELP_ICON_SIZE}
          onClick={toggle}
          aria-label="Help"
        />
      </IconContext.Provider>
      {helpOpen && (
        <div className={styles.helpWindow} onClick={toggle}>
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
