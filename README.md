# Frontend Mentor - Product preview card component solution

This is a solution to the [Product preview card component challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/product-preview-card-component-GO7UmttRfa). Frontend Mentor challenges help you improve your coding skills by building realistic projects. 

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
- [Author](#author)

**Note: Delete this note and update the table of contents based on what sections you keep.**

## Overview

### The challenge

Users should be able to:

- View the optimal layout depending on their device's screen size
- See hover and focus states for interactive elements

### Screenshot

![Design preview for the Product preview card component coding challenge](./src/images/preview.png)


### Links

- Solution URL: [Check Solution Here](https://www.frontendmentor.io/solutions/product-preview-component-3RhrtbNUnn)
- Live Site URL: [Visit Live Site](https://product-preview-comp-lexzee.vercel.app/)

## My process

### Built with

- Semantic HTML5 markup
- CSS custom properties
- Flexbox
- CSS Grid
- Mobile-first workflow
- [React](https://reactjs.org/) - JS library

### What I learned

I learnt how to use conditional rendering that depends on window width.

See code snippet, see below:

```js
function App = () => {
  const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
      const handleView = () => {
        setIsMobile(window.innerWidth < 780);
      };
      handleView();
      window.addEventListener('resize', handleView);

      return () => {
        window.removeEventListener('resize', handleView);
      }
    }, [])

  return (
    <div className="App">
      {isMobile ? <Mobile /> : <Desktop />}
    </div>
  );
}
```

## Author

- Website - [Abdulquddus Abdulrahman (Lexee)](https://github.com/lexzee)
- Frontend Mentor - [@lexzeeyourusername](https://www.frontendmentor.io/profile/lexzee)
- Twitter - [@lexzee](https://www.twitter.com/lexzee)
