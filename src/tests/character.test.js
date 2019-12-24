import Character from '../js/character.js';

test('Ранен', () => {
  const character = new Character('Skywalker', 'Magician');
  character.damage(20);
  const received = character.health;
  expect(received).toBe(88);
});

test('Погиб', () => {
  const character = new Character('Skywalker', 'Magician');
  character.damage(180);
  const received = character.health;
  expect(received).toBe(0);
});

test('Нулевой урон', () => {
  const character = new Character('Skywalker', 'Magician');
  character.damage();
  const received = character.health;
  expect(received).toBe(100);
});
