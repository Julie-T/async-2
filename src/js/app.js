import json from './parser';
import read from './reader';

(async () => {
  try {
    const data = await read();
    const value = await json(data);
    const result = JSON.parse(value);
    return result;
  } catch (err) {
    return err;
  }
})();
