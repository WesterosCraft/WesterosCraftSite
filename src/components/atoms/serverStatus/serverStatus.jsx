import React, { useState, useEffect } from 'react';
import useSWR from 'swr';

export const ServerStatus = () => {
  const fetcher = (url) => fetch(url).then((r) => r.json());

  const { data, error, isValidating } = useSWR('https://mcapi.us/server/status?ip=mc.westeroscraft.com', fetcher, {
    refreshInterval: 300000,
    revalidateOnFocus: false,
  });
  console.log('validating', isValidating);
  console.log('data', data);

  if (isValidating) {
    return <h1>validating</h1>;
  }
  return (
    <div>
      <h1>server status</h1>
    </div>
  );
};
