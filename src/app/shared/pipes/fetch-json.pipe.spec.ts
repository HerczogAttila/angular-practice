import { FetchJsonPipe } from './fetch-json.pipe';

describe('FetchJsonPipe', () => {
  const pipe = new FetchJsonPipe(null);

  it('should create', () => {
    expect(pipe).toBeTruthy();
  });

  // TODO - FetchJsonPipe tests
  // it('heroes.git', () => {
  //   pipe.transform('heroes.git');
  //   expect(pipe.transform('heroes.git')).toBe('[ { "name": "Windstorm", "canFly": true }, ' +
  //     '{ "name": "Bombasto", "canFly": false }, ' +
  //     '{ "name": "Magneto", "canFly": false }, ' +
  //     '{ "name": "Tornado", "canFly": true } ]');
  // });
});
