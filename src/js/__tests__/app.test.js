import GameSavingLoader from '../GameSavingLoader';

const player1 = '{"id":9,"created":1546300800,"userInfo":{"id":1,name":"Hitman","level":10,"points":2000}}';

test('Должен загружать данные через класс с промисами', (done) => {
  GameSavingLoader.load().then((saving) => {
    expect(saving).toEqual(JSON.parse(player1));
    done();
  });
});
