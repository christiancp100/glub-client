import 'react-native-gesture-handler'
import { registerRootComponent } from 'expo'
import axios from 'axios'
import App from './App'

axios.defaults.baseURL = 'http://127.0.0.1:8000/api'

// registerRootComponent calls AppRegistry.registerComponent('main', () => App);
// It also ensures that whether you load the app in Expo Go or in a native build,
// the environment is set up appropriately
registerRootComponent(App)
