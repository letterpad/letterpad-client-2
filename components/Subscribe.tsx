import gql from 'graphql-tag';

import { useState } from 'react';

const Subscribe = () => {
  const [email, setEmail] = useState('');
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');

  const doSubscribe = async () => {
    setSuccess('');
    setError('');

    const resp = await fetch('/api/subscribe', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ variables: { email } }),
    });
    const a = await resp.json();
    if (!a.data.addSubscriber.ok) {
      setError(a.data.addSubscriber.message);
    } else {
      setSuccess('');
      setEmail('');
      setSuccess(a.data.addSubscriber.message);
    }
  };

  return (
    <div id="subscribe" className="flex ">
      <div className="mx-auto max-w-md flex-1 overflow-hidden rounded-lg md:max-w-xl">
        <div className="md:flex">
          <div className="w-full p-3">
            <h2 className="mb-4 text-center font-semibold">Subscribe to the newsletter</h2>
            <div className="relative">
              <input
                type="text"
                className="h-14 w-full rounded-md bg-white px-4 pr-20 hover:cursor-pointer focus:outline-none dark:bg-neutral-800"
                placeholder="Enter your email id"
                name=""
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              <button
                onClick={doSubscribe}
                className="absolute top-2 right-2 h-10 rounded bg-black px-3 text-sm text-white hover:bg-gray-900 dark:bg-slate-900 "
              >
                Subscribe Now
              </button>
            </div>
            <small>{error || success}</small>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Subscribe;
