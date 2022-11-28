import React, { useState } from 'react';

const KEY_QUERY = `
query {
  Languages {
    code
  }
}
`;

function Page() {
  const [name, setName] = useState(null);
  fetch('http://jackanticosandbox.thoughtindustries.com/helium?apiKey=0gd45vv64sfm2cv9l9kewvq3pfe7behb', {
    method: 'POST',
    mode: 'no-cors',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      query: KEY_QUERY
    })
  })
    .then(r => r.json())
    .then(res => {
      console.log('>>> res', res);
      console.log('>>> res.data', res.data);
      console.log('>>> res.data.Languages', res.data.Languages);
      console.log('>>> stringed', res.data.Languages.map(lang => lang.code).join(','));
      setName(res.data.Languages.map(lang => lang.code).join(','));
    })
    .catch(err => {
      console.log('>>> err', err);
    });

  return (
    <div>
      <h1>{name ? name : 'hi'}</h1>
    </div>
  );
}

export { Page };