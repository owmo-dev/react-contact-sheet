# react-contact-sheet

React webapp intended for making printable contact sheets locally.

This project is a convenience wrapper around `react-photo-gallery` for the sole purpose of viewing a large set of uniformly sized / shaped images as part of a creative review worklow. I simply found viewing these images in a file browser insufficient due to the un-necessary styling, spacing and meta information.

https://github.com/neptunian/react-photo-gallery

## How to Use

1. Run it locally - `npm run dev`
2. Copy jpg / png files into the `/public` folder
3. Edit the `Config.js` file to match the image's aspect ratio width and height
4. Edit the `sttyle.css` file to adjust paper aspection ratio, margins, padding
5. View the results live

## PDF Print Tips

-   Scroll to the bottom of print preview to ensure margins are working, adjust marings in `style.css`
-   I've found that Firefox is the most performant browser for previewing a PDF accurately
-   Use smaller resolution images, no need to pack in more data than necessary

That's it, nothing fancy in this tool. Enjoy!
