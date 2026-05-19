export const helpContent = {
  title: 'Daub Nab It',
  intro: [
    'Paint manufacturers publish color information about the hues they sell.',
    'This tool compares the colors at the top of the page to those published lists of colors and returns the closest matches.',
  ],
  sections: [
    {
      heading: 'How to Use Daub Nab It',
      paragraphs: [
        'Click Find Paints. This will search all the paint libraries for matches and display the best results.',
        'If you want to narrow down the search to one brand of paint, you can do so in the Settings menu.',
        'If you intend to actually buy the paint colors, you can click the color you want and an easy-to-use search term will be copied to your clipboard. This can then be pasted into a search bar.',
      ],
    },
    {
      heading: 'Why Aren’t These Exact Matches?',
      paragraphs: [
        'The paint companies that publish their color information do so in a format where there are upwards of sixteen and a half million possible colors.',
        'The color list in this project has just a little over eighteen thousand colors.',
        'Some simple arithmetic provides a likelihood of around one in nine hundred that any given randomly generated or carefully selected color will match perfectly with a paint in the list.',
      ],
    },
    {
      heading: 'How to Search for Custom Colors',
      paragraphs: [
        {
          parts: [
            'First, get a color in the hexadecimal format. The excellent ',
            { link: 'https://coolors.co', text: 'Coolors' },
            ' is a great way to generate hues.',
          ],
        },
        'Once you have a color description in hexadecimal format (for example, #ECF4FE or ecf4fe), simply copy the text.',
        'Click on a large color box at the top of the page. Your browser should ask for permission to access your clipboard, and you should allow this.',
      ],
    },
    {
      heading: 'Caveats',
      paragraphs: [
        "These color lists don't completely correspond to what is available for purchase. You may discover that the color is no longer manufactured, was never manufactured, or is only available for a special type of client.",
        "If you're copying these color names down and then going to a store in person, copy a few names for each search. This will save you trips.",
        "Also, just because a paint is in this list doesn't mean a store carries that color of paint. Or, the store may have that color paint, but not by that name in their database.",
      ],
    },
    {
      heading: 'Credits',
      paragraphs: [
        {
          parts: [
            'Daub Nab It was built by ',
            { link: 'https://donromaniello.com', text: 'Don Romaniello.' },
          ],
        },
        {
          parts: [
            'The code can be ',
            { link: 'https://github.com/DonRomaniello/DaubNabIt', text: 'found here.' },
          ],
        },
        {
          parts: [
            'The original format of the color lists were collected and formatted by ',
            { link: 'https://github.com/jpederson', text: 'James Pederson' },
            ', and published in the ',
            { link: 'https://github.com/jpederson/colornerd', text: 'colornerd repository' },
            '.',
          ],
        },
      ],
    },
  ],
};
