import { StyleSheet } from 'react-native';
import colors from '../../styles/colors';

let termsTextSize = 13;
let headingTextSize = 30;

const styles = StyleSheet.create({
  nextButtonSyle: {
    flexDirection: "row",
    alignItems: "center",
    flex: 1,
    justifyContent: "flex-end",
    marginTop: 100,

  },
  nextButtonText: {
    color: colors.white,
    fontWeight: '300',
    marginRight: 5,
  },
  nextButtonWrapper: {
    flex: 1,
    alignItems: 'flex-end',
    top: 20,
    right: 20,
    bottom: 20,
  }
  
});

export default styles;