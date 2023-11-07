import { StyleSheet } from "react-native";

import { COLORS, FONT, SHADOWS, SIZES } from "../../../constants";

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        paddingHorizontal : 25,
      },
    header:{
    fontSize: SIZES.medium,  
    },
    loginHeader:{
      fontFamily: FONT.bold,
      fontWeight: '500',
      color: COLORS.primary,
    },
    logoContainer: {
    width: 300,
    height: 300,
    justifyContent: "center",
    alignItems: "center",
  },
  logoImage: {
    width: "70%",
    height: "70%",
  },
  inputBackground:{
    backgroundColor: COLORS.gray,
    flex:1,
    paddingVertical:0,
  },
  loginBtn: {
    // width: 100,
    // height: 50,
    padding: 20,
    marginBottom: 30,
    backgroundColor: COLORS.tertiary,
    borderRadius: SIZES.medium,
    justifyContent: "center",
    alignItems: "center",
  },
  companyName: {
    fontSize: SIZES.medium,
    
    color: "#B3AEC6",
    marginTop: SIZES.small / 1.5,
  },
  containerTextInputs: {
    flexDirection: 'row',
    borderBottomColor: COLORS.secondary,
    borderBottomWidth: 1,
    paddingBottom: 8,
    marginBottom: 25,
  },

  infoWrapper: {
    flexDirection: "row",
    marginTop: 5,
    justifyContent: "flex-start",
    alignItems: "center",
  },

  location: {
    fontSize: SIZES.medium - 2,
    fontFamily: FONT.regular,
    color: "#B3AEC6",
  },
});

export default styles;
