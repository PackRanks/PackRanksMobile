import { StyleSheet } from 'react-native'
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';

/** Constant to make all icon sizes uniform and scalable with screen size */
const ICON_SIZE = hp('2.5%')

/** Constant to ensure consistent "roundness" of edges, buttons, and cards */
const BORDER_RADIUS = 25

/** Lighter/secondary text color in the family of common screens. Color is hsl(0, 0, 60%) (aka #999999), according to the Material UI design paradigms on XD stickersheet */
const LIGHT_TEXT_COLOR = "#999999"

/** Gotta represent the official colors */
const NCSU_RED = "#cc0000"

/** Styles specific to LoginView */
const loginStyles = StyleSheet.create(
    {
        googleDesc: {
            //fontSize: 14,
            fontSize: hp('1.7%'),
            fontWeight: "normal",
            color: LIGHT_TEXT_COLOR, 
            paddingBottom: 20
        },
        signUpView: {
            flexDirection: "row",
            alignItems: "center",
            paddingTop: 20
        },
        opacity: {
            marginLeft: 10
        },
        loginButton: {
            backgroundColor: NCSU_RED,
            width: "100%",
            borderRadius: BORDER_RADIUS,
            height: 50,
            // --> height: hp('5%'),
            alignItems: "center",
            justifyContent: "center"
        },
        loginButtonText: {
            fontSize: 14,
            // --> fontSize: hp('2%'),
            color: "white",
            fontWeight: "bold",
        },
        loginTouchableHighlight: {
            width: "100%",
            borderRadius: BORDER_RADIUS,
        },
        buttonShadow: {
            width: "80%",
            marginVertical: 10,
            // shadows do not currently work for this wrapping view. Used to work inside the loginButton itself but the touch was restricting the shadow.
            // shadowColor: "#000000",
            // shadowOpacity: 0.35,
            // shadowRadius: 25,
            // shadowOffset: {
            //     height: 5,
            //     width: 5
            // }
        },
        forgotView: {
            paddingTop: 10,
            paddingBottom: 20
        },
        googleButton: {
            backgroundColor: NCSU_RED,
            width: "100%",
            borderRadius: BORDER_RADIUS,
            borderColor: NCSU_RED,
            borderWidth: 1,
            height: 50,
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "center",
        },
        googleButtonText: {
            fontSize: 14,
            // --> fontSize: hp('2%'),
            color: "white",
            fontWeight: "bold",
        },
    }
)

/** These styles are commonly used within the family of Login, Signup, Forgot Password, Forgot Password Confirmation, and Reset Password screens*/
const generalStyles = StyleSheet.create(
    {
        container: {
            backgroundColor: NCSU_RED,
            paddingTop: "10%",
            alignItems: "center",
            height: "100%"
        },
        inputView: {
            marginTop: 10, 
            flexDirection: 'row',
            alignItems: 'center',
            borderWidth: 1,
            borderColor: LIGHT_TEXT_COLOR,
            borderRadius: BORDER_RADIUS,
            width: "80%",
            marginBottom: 10
        },
        inputText: {
            flex: 1,
            paddingTop: 10,
            paddingRight: 10,
            paddingBottom: 10,
            fontSize: hp('1.8%'),
            marginLeft: 7
        },
        icons: {
            margin: 10,
        },
        placeholderText: {
            color: LIGHT_TEXT_COLOR,
            fontSize: hp('1.8%'),
        },
        appNameHeading: {
            //fontSize: 30,
            fontSize: hp('3.8%'),
            fontWeight: "bold",
            color: "white",
            alignSelf: "center",
            paddingTop: 10,
            paddingBottom: 20
        },
        card: {
            width: "85%", 
            borderRadius: BORDER_RADIUS, 
            backgroundColor: "white",
            alignItems: "center"
        },
        cardHeading: {
            //fontSize: 30,
            fontSize: hp('3.8%'),
            fontWeight: "bold",
            color: "black"
        },
        cardHeadingDesc: {
            //fontSize: 14,
            fontSize: hp('1.7%'),
            fontWeight: "normal",
            color: LIGHT_TEXT_COLOR,
            textAlign: "center",
        },
        cardHeadingView: {
            alignItems: "center",
            padding: 10
        },
        logo: { // keep dims static?
            //width: 100,
            width: wp('24%'),
            //height: 100,
            height: hp('12%'),
            alignSelf: "center",
            marginLeft: 10
        },
        buttonText: {
            // --> fontSize: hp('2%'),
            color: "white", 
            textAlign: "center", 
            fontWeight: "bold",
        },
        mediumText: {
            //fontSize: 18,
            fontSize: hp('2.1%'),
            fontWeight: "bold",
            color: "black",
        },
        mediumTextUnderline: {
            //fontSize: 18,
            fontSize: hp('2.1%'),
            fontWeight: "bold",
            color: "black",
            textDecorationLine: "underline",
        },
    }
)

export { generalStyles, loginStyles, ICON_SIZE }