import  from '../app';

jest.setTimeout(5000);

test('Преобразование данных', (done) => {
  const data = await GameSavingLoader.load();
    expect(data).toEqual({
      id: 9,
      created: 1546300800,
      userInfo:
        {
          id: 1, name: 'Hitman', level: 10, points: 2000,
        },
    });
    done();
});


test('Преобразование данных', (done) => {
  GameSavingLoader.load((data) => {
    expect(data).toEqual({
      id: 9,
      created: 1546300800,
      userInfo:
        {
          id: 1, name: 'Hitman', level: 10, points: 2000,
        },
    });
    done();
  });
});


test('Преобразование данных', () => {
  expect.assertions(1);
  try {
    const data = await GameSavingLoader.load();
  }
  catche(e) {
    expect(e).toEqual();
  }
});