import * as React from 'react';

import { StyleSheet } from 'react-native';

const colors = {
  primary: '#FFCB4C',
  secondary: '#E9E6FF',
  accent: '#FF0000',
  neutral: '#CCCCCC',
  background: '#2F004F',
  warning: '#FFB6C1',
  success: '#77DD77'
};

export default StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#00013F'
  },
  background: {
    flex: 1,
    alignItems: 'center',
    justifyContent: "center",
    width: '100%',
    height: '100%',

  },
  circleButton: {
    marginTop: 20,
    width: 175,
    height: 175,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 10,
    borderRadius: 150,
    backgroundColor: colors['primary'],
  },
  circleButtonActive: {
    marginTop: 20,
    width: 175,
    height: 175,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 10,
    borderRadius: 150,
    backgroundColor: colors['warning'],
  },
  emolabels: {
    marginTop: 20,
    marginHorizontal: 8,
    fontSize: 16,
    justifyContent: 'left',
    alignItems: 'left',
    textAlign: 'left',
    fontFamily: Platform.OS === 'ios' ? 'KohinoorBangla-Regular' : 'Roboto',
    color: colors['primary'],
  },
  labelsmall: {
    marginTop: 20,
    marginHorizontal: 8,
    fontSize: 18,
    justifyContent: 'center',
    alignItems: 'center',
    textAlign: 'center',
    fontFamily: Platform.OS === 'ios' ? 'KohinoorBangla-Regular' : 'Roboto',
    color: colors['secondary'],
  },
  label: {
    marginTop: 20,
    marginHorizontal: 8,
    fontSize: 24,
    justifyContent: 'center',
    alignItems: 'center',
    textAlign: 'center',
    fontFamily: Platform.OS === 'ios' ? 'KohinoorBangla-Semibold' : 'Roboto',
    color: colors['secondary'],
  },
  title: {
    marginTop: 20,
    marginHorizontal: 8,
    fontSize: 60,
    justifyContent: 'center',
    alignItems: 'center',
    textAlign: 'center',
    fontFamily: Platform.OS === 'ios' ? 'KohinoorBangla-Semibold' : 'Roboto',
    color: colors['secondary'],
  },
  big: {
    marginTop: 20,
    marginHorizontal: 8,
    fontSize: 120,
    justifyContent: 'center',
    alignItems: 'center',
    textAlign: 'center',
    fontFamily: Platform.OS === 'ios' ? 'KohinoorBangla-Semibold' : 'Roboto',
    color: colors['secondary'],
  }
});