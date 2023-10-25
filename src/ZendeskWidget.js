import React, { useEffect } from 'react';

import { Helmet } from 'react-helmet';

function ZendeskWidget() {
  useEffect(() => {
    // This function will be called when the component mounts
    const script = document.createElement('script');
    script.id = 'ze-snippet';
    script.src = 'https://static.zdassets.com/ekr/snippet.js?key=9c9dbfcc-6dc8-440a-b223-833d8606780a';
    script.async = true;

    document.head.appendChild(script);

    return () => {
      // This function will be called when the component unmounts
      document.head.removeChild(script);
    };
  }, []);

  return (
    <div>
      {/* Your component content */}
    </div>
  );
}

export default ZendeskWidget;
