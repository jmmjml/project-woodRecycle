import { loadAsync } from "expo-font";
import Ubuntu from '../assets/fonts/Ubuntu-Regular.ttf'
import UbuntuBold from '../assets/fonts/Ubuntu-Bold.ttf'
import UbuntuMedium from '../assets/fonts/Ubuntu-Medium.ttf'
export default Fonts = async () => {
  await loadAsync({
    'Ubuntu': Ubuntu,
    'UbuntuMedium': UbuntuMedium,
    "UbuntuBold": UbuntuBold,
  });
};
