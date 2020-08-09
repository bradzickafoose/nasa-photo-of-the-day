import React from 'react';
import Video from './Video';
import Picture from './Picture';

function Main({ url, title, hdurl, explanation, media_type }) {
  return (
    <main className="grid fade-in txt-center">
      <section
        className="grid__max push--bottom"
        style={{ display: 'grid', placeItems: 'center' }}
      >
        {media_type && media_type === 'video' ? (
          <Video url={url} />
        ) : (
          <Picture url={url} title={title} />
        )}
      </section>
      {hdurl && (
        <a href={hdurl} className="push--bottom">
          <span>View  in HD</span>
        </a>
      )}
      {title && <h2>{title}</h2>}
      {explanation && <p>{explanation}</p>}
    </main>
  );
}

export default Main;
