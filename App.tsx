import 'react-native-gesture-handler';
import React from 'react';
import { SafeAreaView, StyleSheet, View } from 'react-native';
import { Button, DefaultTheme, Provider as PaperProvider, Text, Title, useTheme } from 'react-native-paper';
import { NavigationContainer, useNavigation } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

const theme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    primary: 'red',
    accent: 'lightgrey',
  },
};

const Stack = createStackNavigator();

const App = () => {
  const theme = useTheme();

  return (
    <PaperProvider theme={theme}>
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Home">
          <Stack.Screen name="Home" component={HomeScreen} options={{ title: 'Overview' }} />
          <Stack.Screen name="Details" component={DetailsScreen} />
        </Stack.Navigator>
      </NavigationContainer>
    </PaperProvider>
  );
};

function HomeScreen() {
  const navigation = useNavigation();

  return (
    <SafeAreaView style={styles.container}>
      <Title style={styles.title}>Welcome to unit tested app!</Title>
      <Button mode="contained" onPress={() => navigation.navigate('Details')}>Go to Details</Button>
    </SafeAreaView>
  );
}

function DetailsScreen() {
  const navigation = useNavigation();

  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Details Screen</Text>
      <Button mode="contained" onPress={() => navigation.goBack()}>Go back</Button>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    color: theme.colors.primary,
    backgroundColor: theme.colors.accent,
    borderWidth: 1,
    borderColor: theme.colors.primary,
    padding: 20,
  },
});

export default App;
