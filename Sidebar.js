import {DrawerNavigator} from 'react-navigation';

import Menu from './Menu';

const DrawerScreen = DrawerNavigator ({
    Menu: {screen: Menu}

})

export default DrawerScreen;