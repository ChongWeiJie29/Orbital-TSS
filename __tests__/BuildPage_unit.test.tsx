import axios from 'axios';
import { getBuildInstructions } from '../src/client/BE/BuildPage';
import { load } from 'cheerio';

jest.mock('@react-native-async-storage/async-storage');
jest.mock('load', () => ({
  load: jest.fn(),
}));

jest.mock('axios', () => ({
  get: jest.fn(),
}));

jest.mock('@env');

describe('getBuildInstructions', () => {
  it('should set instructions with the correct link', async () => {
    const build = { set_num: '123' };
    const setInstructions = jest.fn();

    const mockedResponse = `
      <div id="content">
        <div class="row">
          <a href="/instructions/456">Instructions Link</a>
        </div>
      </div>
    `;
    const mockedAxiosResponse = { data: mockedResponse };
    (axios.get as jest.Mock).mockResolvedValue(mockedAxiosResponse);

    const mocked$ = {
      get: jest
        .fn()
        .mockReturnValueOnce([{ attribs: { href: '/instructions/456' } }]),
    };
    const mockedLoad = jest.fn().mockReturnValueOnce(mocked$);
    (load as jest.Mock).mockReturnValue(mockedLoad);

    await getBuildInstructions(build, setInstructions);

    expect(axios.get).toHaveBeenCalledWith(
      'https://rebrickable.com/instructions/123',
    );
    expect(setInstructions).toHaveBeenCalledWith(
      'https://rebrickable.com/instructions/456',
    );
  });

  it('should throw an error when axios request fails', async () => {
    const build = { set_num: '123' };
    const setInstructions = jest.fn();

    const mockedAxiosError = new Error('Axios request failed');
    (axios.get as jest.Mock).mockRejectedValue(mockedAxiosError);

    await expect(
      getBuildInstructions(build, setInstructions),
    ).rejects.toThrowError(mockedAxiosError);
    expect(setInstructions).not.toHaveBeenCalled();
  });
});
