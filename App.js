import AppLoading from 'expo-app-loading';
import { NavigationContainer, DefaultTheme } from '@react-navigation/native';
// import OnBoardingNav from './navigation/OnBoardingNav';
import MyPageNav from './navigators/MyPageNav';
// import LoggedInNav from './navigation/LoggedInNav';
import { Context, ContextProvider } from './components/ContextProvider';
import OnBoardingNav from './navigators/OnBoardingNav';
import LoggedInNav from './navigators/LoggedInNav';
import { AppContext } from './components/ContextProvider';
import { useState } from 'react';

const MyTheme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    background: '#f3f3f3',
  },
};

export default function App() {
  const [loading, setLoading] = useState(true);
  const [loggedIn, setLoggedIn] = useState(true);
  const [colorMode, setColorMode] = useState(false);
  const onFinish = () => setLoading(false);
  const toggleLogin = () => {
    setLoggedIn(!loggedIn);
    console.log(loggedIn);
  };
  const toggleColorMode = () => {
    setColorMode(!colorMode);
  };
  const userSettings = {
    toggleLogin,
    toggleColorMode,
    loggedIn,
    colorMode,
  };

  const preload = async () => {
    // const token = await AsyncStorage.getItem("token");
    // if (token) {
    //   isLoggedInVar(true);
    //   tokenVar(token);
    // }
  };

  // if (loading) {
  //   return (
  //     <AppLoading
  //       startAsync={preload}
  //       onError={console.warn}
  //       onFinish={onFinish}
  //     />
  //   );
  // }
  
  return (
    <AppContext.Provider value={userSettings}>
      <NavigationContainer theme={MyTheme}>
        <MyPageNav />
      </NavigationContainer>
    </AppContext.Provider>
  );
}
