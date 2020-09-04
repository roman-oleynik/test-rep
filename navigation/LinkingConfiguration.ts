import * as Linking from 'expo-linking';

export default {
  prefixes: [Linking.makeUrl('/')],
  config: {
    screens: {
      Root: {
        screens: {
          Main: {
            screens: {
              MainTabScreen: '',
            },
          },
          History: {
            screens: {
              HistoryTabScreen: 'history',
              ChosenLocationResponse: 'chosenLocation',
            },
          },
          Map: {
            screens: {
              MapTabScreen: 'map',
            },
          },
        },
      },
      NotFound: '*',
    },
  },
};
