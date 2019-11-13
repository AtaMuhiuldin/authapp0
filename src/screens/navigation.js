import { createAppContainer, createDrawerNavigator } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";
import SplashScreen from "../screens/authScreens/splashScreen";
import TabScreens from "./tab";
import PasswordRecoveryScreen from "../screens/authScreens/passwordRecoveryScreen";
import ChangePasswordScreen from "../screens/authScreens/changePasswordScreen";
import HomeScreen from './homeScreen';
import CustomDrawer from '../component/CustomComponents/Drawer/customDrawer'
import EmailSentScreen from "./authScreens/smailSentScreen";
const AppDrawerNavigation = createDrawerNavigator(
  {
    HomeScreen: {screen: HomeScreen}
}, 
{
  initialRouteName: "HomeScreen", 
  contentComponent: CustomDrawer
}
)


const AppStackNavigator = createStackNavigator(
  {
    SplashScreen: { screen: SplashScreen },
    TabScreens: { screen: TabScreens },
    PasswordRecoveryScreen: { screen: PasswordRecoveryScreen },
    ChangePasswordScreen: { screen: EmailSentScreen }, 
    HomeScreen: {screen: AppDrawerNavigation}
  },
  {
    initialRouteName: "SplashScreen",
    headerMode: "none"
  }
);

const AppContainer = createAppContainer(AppStackNavigator);
export default AppContainer;
