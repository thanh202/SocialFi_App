import {StyleSheet} from 'react-native';
import {useSelector} from 'react-redux';
import {darkMode, lightMode} from '../assets/colors';

export const getContainerScreen = isDarkMode => ({
  flex: 1,
  backgroundColor: isDarkMode ? darkMode.background : lightMode.background,
});

export const getBaseText = isDarkMode => ({
  color: isDarkMode ? darkMode.background : lightMode.background,
});

export const headings = {
  h1: 32,
  h2: 24,
  h3: 20,
  h4: 18,
  h5: 16,
  h6: 14,
};
