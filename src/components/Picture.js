import React from 'react';

function Picture({ url, title }) {
  return (
    <>
      <img src={url} alt={title} />
    </>
  )
}

export default Picture;