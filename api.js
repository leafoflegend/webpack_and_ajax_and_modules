const getAllPlayers = async () => {
  try {
    const response = await window.fetch('https://fsa-puppy-bowl.herokuapp.com/api/2202-ftb-pt-web-pt/players');

    const json = await response.json();

    return json.data.players;
  } catch (e) {
    console.error('Error fetching players!', e.message);
  }
}

export { getAllPlayers };
