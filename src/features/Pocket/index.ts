/**
 * Save a single item to Pocket.
 */
export const saveItem = async (
  title: string,
  url: string,
  consumerKey: string,
  accessToken: string,
): Promise<boolean> => {
  const body = {
    url,
    title,
    consumer_key: consumerKey,
    access_token: accessToken,
  };

  try {
    const response = await fetch('https://getpocket.com/v3/add', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json; charset=UTF-8',
        'X-Accept': 'application/json',
      },
      body: JSON.stringify(body),
    });
    return response.ok;
  } catch (error) {
    console.error('Error saving item', error);
    return false;
  }
};
