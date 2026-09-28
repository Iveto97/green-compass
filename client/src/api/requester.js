async function request(method, url, data) {

    const options = {
        method,
    };

  try {
    const response = await fetch(url, options);
    
    if (response.ok === false) {
      const error = await response.json();
      throw new Error(error.message);
    }

    if (response.status === 204) {
      return response;
    }

    return await response.json();
  } catch (error) {
    console.log(error.message);
  }
}

export function get(url) {
  return request('GET', url);
}
