export const createChallenge = async (accessToken, challenge) => {
  try {
    const response = await fetch('http://localhost:2018/challenge', {
      method: 'POST',
      headers: {
        Authorization: 'Bearer ' + accessToken,
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(challenge),
    });
    const responseJson = await response.json();
    // TODO: do something with this
    console.log('RESPONSE JSON: ', responseJson);
  } catch (error) {
    console.log('CHALLENGE ERROR: ', error);
  }
};
