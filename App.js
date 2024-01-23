/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React,{useEffect} from 'react';
import * as Progress from 'react-native-progress';
import { ProgressBar } from '@react-native-community/progress-bar-android';
import type {PropsWithChildren} from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
  TouchableOpacity
} from 'react-native';

import {
  Colors,
  DebugInstructions,
  Header,
  LearnMoreLinks,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';

type SectionProps = PropsWithChildren<{
  title: string;
}>;

function Section({children, title}: SectionProps): React.JSX.Element {
  const isDarkMode = useColorScheme() === 'dark';
  return (
    <View style={styles.sectionContainer}>
      <Text
        style={[
          styles.sectionTitle,
          {
            color: isDarkMode ? Colors.white : Colors.black,
          },
        ]}>
        {title}
      </Text>
      
      <Text
        style={[
          styles.sectionDescription,
          {
            color: isDarkMode ? Colors.light : Colors.dark,
          },
        ]}>
        {children}
      </Text>
    </View>
  );
}

function App(): React.JSX.Element {
  const isDarkMode = useColorScheme() === 'dark';

  const [progress, setProgress] = React.useState(0);
  const [indeterminate, setIndeterminate] = React.useState(true);
  useEffect(() => {
    let interval: ReturnType<typeof setInterval>;
    const timer = setTimeout(() => {
      setIndeterminate(false);
      interval = setInterval(() => {
        setProgress((prevProgress) =>
          Math.min(0.5, prevProgress + Math.random() / 5)
        );
      }, 100);
    }, 1500);
    return () => {
      clearTimeout(timer);
      clearInterval(interval);
    };
  }, []);
  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };

  return (
    <SafeAreaView style={backgroundStyle}>
      <StatusBar
        barStyle={isDarkMode ? 'light-content' : 'dark-content'}
        backgroundColor={backgroundStyle.backgroundColor}
      />
      <ScrollView
        contentInsetAdjustmentBehavior="automatic"
        style={backgroundStyle}>
        {/* <Header /> */}
        <View
          style={{
            backgroundColor: isDarkMode ? Colors.black : Colors.white,
          }}>
          <TouchableOpacity activeOpacity={0.7}
            style={{
              height: 60,
              justifyContent: 'center',
            }}>
            <Text >
              Go to Next
            </Text>
           
          </TouchableOpacity>
          <Progress.Bar progress={progress} width={200} animated={true} indeterminateAnimationDuration={500} useNativeDriver={false} />

          {/* <Progress.Circle size={30} progress={progress} animated={true} />  */}
          {/* <Progress.Pie progress={0.4} size={50} indeterminate={true} animated={true} />
          */}
          <Progress.CircleSnail color={['red', 'green', 'blue']} />

         
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
  },
  highlight: {
    fontWeight: '700',
  },
  container: {
    flex: 1,
    backgroundColor:'red',
    justifyContent: 'center',
    alignItems: 'center',
  },
  example: {
    marginVertical: 24,
  },
});

export default App;
