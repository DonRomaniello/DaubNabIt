import React, {useState} from 'react';

import { IconContext } from 'react-icons';

import { useSelector } from 'react-redux';

import {
  paradeIsOpened
} from '../app/store/panelsSlice';

import {
      BsQuestionCircleFill
        } from 'react-icons/bs';

import styles from './Help.module.css';

export function Help() {

const gearSize = '55px';

  const paradeOpened = useSelector(paradeIsOpened);

  const [helpOpen, setHelpOpen] = useState(false);

  return (
    <>
    <div className={`${styles.help} + ' ' + ${paradeOpened && styles.helpParadeOpened}`}>
    <IconContext.Provider value={{ className: styles.context }}>
      <BsQuestionCircleFill
      className={styles.question}
      size={gearSize}
      onClick={() => setHelpOpen(!helpOpen)}
      />
      </IconContext.Provider>
      {helpOpen &&
      <div
      className={styles.helpWindow}
      onClick={() => setHelpOpen(!helpOpen)}
      >
      <h1>Daub Nab It</h1>
      <p>Paint manufacturers publish color information about the hues they sell.
      <br />
      <br />
        This tool compares the colors at the top of the page to those published lists of colors and returns the closest matches.</p>
      <h2>How to Use Daub Nab It</h2>
      <p>
        Click Find Paints. This will search all the paint libraries for matches and display the best results.
          <br />
          <br />
        If you want to narrow down the search to one brand of paint, you can do so in the Settings menu.
          <br />
          <br />
          If you intend to actually buy the paint colors, you can click the color you want and an easy-to-use search term will be copied to your clipboard. This can then be pasted into a search bar.
        </p>
      <h2>Why Aren’t These<br/> Exact Matches?</h2>
      <p>The paint companies that publish their color information do so in a format where there are upwards of sixteen and a half million possible colors.
      <br/>
      <br/>
      The color list in this project has just a little over eighteen thousand colors.
      <br/>
      <br/>
      Some simple arithmetic provides a likelihood of around one in nine hundred that any given randomly generated or carefully selected color will match perfectly with a paint in the list.
      </p>
      <h2>How to Search for <br/>Custom Colors</h2>
      <p>
        First, get a color in the hexadecimal format. The excellent  <a href='https://coolors.co' target='_blank'>Coolors</a> is a great way to generate hues.
        <br/>
        <br/>
        Once you have a color description in hexadecimal format (for example, #ECF4FE or ecf4fe), simply copy the text.
        <br/>
        <br/>
        Click on a large color box at the top of the page. Your browser should ask for permission to access your clipboard, and you should allow this.
       </p>
        <h2>Caveats</h2>
        <p>
          These color lists don't completely correspond to what is available for purchase. You may discover that the color is no longer manufactured, was never manufactured, or is only available for a special type of client.
        <br/>
        <br/>
          If you're copying these color names down and then going to a store in person, copy a few names for each search. This will save you trips.
        <br/>
        <br/>
          Also, just because a paint is in this list doesn't mean a store carries that color of paint. Or, the store may have that color paint, but not by that name in their database.
        </p>
        <h2>Credits</h2>
        <p>
        Daub Nab It was built by <a href='https://donromaniello.com'>Don Romaniello.</a>
        <br />
        <br />
        The code can be <a href='https://github.com/DonRomaniello/DaubNabIt'>found here.</a>
        <br />
        <br />
        The original format of the color lists were collected and formatted by <a href='https://github.com/jpederson' target='_blank'>James Pederson</a>, and published in the <a href='https://github.com/jpederson/colornerd' target='_blank'>colornerd repository</a>.
        </p>
      </div>
      }
      </div>
      </>
  )
}
