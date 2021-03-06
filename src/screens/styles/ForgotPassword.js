import { StyleSheet } from 'react-native';
import colors from '../../styles/colors';

let termsTextSize = 13;
let headingTextSize = 30;

const styles = StyleSheet.create({
  createAccountButtonSyle: {
    flexDirection: "row",
    alignItems: "center",
    flex: 1,
    justifyContent: "center",
    marginTop: 20,

  },
  createAccountButtonText: {
    color: colors.black,
    fontWeight: '300',
    marginRight: 5,
  },
  forgotPasswordSubheading: {
    flex: 1,
    color: colors.white,
    fontWeight: '600',
    fontSize: 15,
    marginTop: 10,
    marginBottom: 60,
  },
  policeLoginButton: {
    alignSelf: "center",
    marginTop: 50,
  },
  policeLoginButtonText: {
    color: colors.black,
    fontSize: 16,
  },
  passwordDescription: {
    marginLeft: 20,
    fontSize: 14,
    color: colors.white,
    marginBottom: 40,
  },
  
});

export default styles;