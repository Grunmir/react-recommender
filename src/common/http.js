import { config, urlBase } from '../config/http';

function readUrl(url = '') {
  return url.startsWith('http://') || url.startsWith('https://')
    ? url
    : `${urlBase}${url}`;
}

export async function Get(url = '', headers = {}) {
  const response = await fetch(readUrl(url), {
    ...config,
    method: 'GET',
    headers: {
      ...config.headers,
      ...headers,
    },
  });

  return await response.json();
}

export async function Post(url = '', body = {}, headers = {}) {
  const response = await fetch(readUrl(url), {
    ...config,
    method: 'POST',
    body: JSON.stringify(body),
    headers: {
      ...config.headers,
      ...headers,
    },
  });

  return await response.json();
}

export async function Put(url = '', body = {}, headers = {}) {
  const response = await fetch(readUrl(url), {
    ...config,
    method: 'PUT',
    body: JSON.stringify(body),
    headers: {
      ...config.headers,
      ...headers,
    },
  });

  return await response.json();
}

export async function Delete(url = '', headers = {}) {
  const response = await fetch(readUrl(url), {
    ...config,
    method: 'DELETE',
    headers: {
      ...config.headers,
      ...headers,
    },
  });

  return await response.json();
}
