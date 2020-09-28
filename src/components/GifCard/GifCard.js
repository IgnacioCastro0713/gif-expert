import React, { useCallback, useRef } from 'react';
import PropTypes from 'prop-types';
import { useClipboard } from 'use-clipboard-copy';

function GifCard({ image: { title, url } }) {
  const tooltipEl = useRef(null);
  const clipboard = useClipboard();

  const copyToClipboard = useCallback(() => {
    clipboard.copy(url);
    tooltipEl.current.hidden = false;
    setTimeout(() => tooltipEl.current.hidden = true, 500);
  }, [clipboard, url]);

  return (
    <div
      className="image bg-white rounded-lg flex-wrap shadow-lg overflow-hidden transform motion-safe:hover:-translate-y-1 motion-safe:hover:scale-110 transition ease-in-out duration-300
      animate__animated animate__fadeIn">
      <input ref={ clipboard.target } value={ url } readOnly hidden/>
      <img src={ url } className="h-48 w-full" alt=""
           title={ title }/>
      <span className="flex justify-center p-2 text-gray-700 text-sm inline-block w-full cursor-pointer tooltip"
            onClick={ copyToClipboard }>
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" className="h-6 w-6 text-gray-500 text-center"
             viewBox="0 0 24 24" stroke="currentColor">
          <path
            d="M8 7v8a2 2 0 002 2h6M8 7V5a2 2 0 012-2h4.586a1 1 0 01.707.293l4.414 4.414a1 1 0 01.293.707V15a2 2 0 01-2 2h-2M8 7H6a2 2 0 00-2 2v10a2 2 0 002 2h8a2 2 0 002-2v-2"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
          />
        </svg> Copy
        <span className='tooltip-text bg-gray-400 p-3 -mt-6 -ml-7 rounded text-base'
              ref={ tooltipEl }
              hidden
        >Copied!</span>
      </span>
    </div>
  );
}

GifCard.propTypes = {
  image: PropTypes.object.isRequired
};

export default GifCard;