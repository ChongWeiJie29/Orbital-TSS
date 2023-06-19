import { AppRegistry } from 'react-native';
import App from './src/client/App';
import { name as appName } from './app.json';
import { playbackService } from './src/client/Assets/Settings/TrackPlayerServices';
import TrackPlayer from 'react-native-track-player';

AppRegistry.registerComponent(appName, () => App);
TrackPlayer.registerPlaybackService(() => playbackService);
