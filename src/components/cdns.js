import React from 'react';
import Helmet from 'react-helmet';

/**
 *  CDNs
 *  @description Injects cdn scripts into the head of the document at runtime
 */

export default () => {
  return (
    <Helmet>
      <link
        rel="stylesheet"
        href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css"
        integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T"
        crossorigin="anonymous"
      />
      <link
        href="https://fonts.googleapis.com/css?family=Sacramento"
        rel="stylesheet"
      />
    </Helmet>
  );
};
