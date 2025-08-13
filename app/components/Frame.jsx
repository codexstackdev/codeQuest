import React from 'react'

const Frame = ({language}) => {
  return (
    <>
      <iframe
        frameBorder="0"
        height="100%"
        src={`https://onecompiler.com/embed/${language.toLowerCase()}?theme=dark&hideLanguageSelection=true&hideStdin=true`}
        width="100%"
      ></iframe>
    </>
  );
}

export default Frame