// import React from 'react';
// import renderer from 'react-test-renderer';
// import MainPage, { Props } from '../src/client/FE/MainPage';
// import { getBackgroundMusic } from '../src/client/BE/MusicSettings';
// import TrackPlayer from 'react-native-track-player';
// import 'node_modules/react-native/Libraries/StyleSheet/Utilities/Platform';

// jest.mock('../src/client/BE/MusicSettings', () => ({
//   getBackgroundMusic: jest.fn(),
// }));

// jest.mock('react-native-track-player', () => ({
//   play: jest.fn(),
// }));

// describe('MainPage component', () => {
//   beforeEach(() => {
//     jest.clearAllMocks();
//   });

//   it('should play background music when status is true', async () => {
//     (getBackgroundMusic as jest.Mock).mockResolvedValue(true);

//     const mockNavigation = {} as Props['navigation'];

//     await renderer.act(async () => {
//       renderer.create(<MainPage navigation={mockNavigation} />);
//     });

//     expect(getBackgroundMusic).toHaveBeenCalled();
//     expect(TrackPlayer.play).toHaveBeenCalled();
//   });

//   it('should not play background music when status is false', async () => {
//     (getBackgroundMusic as jest.Mock).mockResolvedValue(false);

//     const mockNavigation = {} as Props['navigation'];

//     await renderer.act(async () => {
//       renderer.create(<MainPage navigation={mockNavigation} />);
//     });

//     expect(getBackgroundMusic).toHaveBeenCalled();
//     expect(TrackPlayer.play).not.toHaveBeenCalled();
//   });
// });

import {
  handleNewBuild,
  handleExistingBuild,
  handleSettings,
} from '../src/client/BE/MainPage';

describe('handleNewBuild', () => {
  it('should navigate to "New Build"', async () => {
    const mockNavigation = {
      navigate: jest.fn(),
    };

    await handleNewBuild(mockNavigation);

    expect(mockNavigation.navigate).toHaveBeenCalledWith('New Build');
  });
});

describe('handleExistingBuild', () => {
  it('should navigate to "Existing Build"', async () => {
    const mockNavigation = {
      navigate: jest.fn(),
    };

    await handleExistingBuild(mockNavigation);

    expect(mockNavigation.navigate).toHaveBeenCalledWith('Existing Build');
  });
});

describe('handleSettings', () => {
  it('should navigate to "Settings"', async () => {
    const mockNavigation = {
      navigate: jest.fn(),
    };

    await handleSettings(mockNavigation);

    expect(mockNavigation.navigate).toHaveBeenCalledWith('Settings');
  });
});
