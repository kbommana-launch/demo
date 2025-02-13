const API = require('./testapi');

jest.mock('./testapi');

test('mocked fetchDataFromAPI returns mocked data', () => {
  API.mockReturnValue('Mocked data'); 
  const data =API();
  expect(data).toBe('Mocked data');
});
