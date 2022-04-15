const createPlayer = (player) => {
  const { name, breed, imageUrl } = player;

  const div = document.createElement('div');
  const h4 = document.createElement('h4');
  h4.textContent = name;
  const h6 = document.createElement('h6');
  h6.textContent = breed;
  const img = document.createElement('img');
  img.src = imageUrl;
  img.style['max-width'] = '200px';
  img.style['max-height'] = '200px';

  div.append(h4, h6, img);

  return div;
}

export default createPlayer;
