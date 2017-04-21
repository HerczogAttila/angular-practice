import { FetchJsonPipe } from './fetch-json.pipe';

describe('FetchJsonPipe', () => {
  const pipe = new FetchJsonPipe(null);

  it('should create', () => {
    expect(pipe).toBeTruthy();
  });

  // TODO - FetchJsonPipe tests
  // it('heroes.json', () => {
  //   pipe.transform('heroes.json');
  //   expect(pipe.transform('heroes.json')).toBe('[ { "name": "Windstorm", "canFly": true }, ' +
  //     '{ "name": "Bombasto", "canFly": false }, ' +
  //     '{ "name": "Magneto", "canFly": false }, ' +
  //     '{ "name": "Tornado", "canFly": true } ]');
  // });
});
