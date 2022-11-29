import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from '../../screens/home';
import BlogPage from '../../screens/Blogs';
import SingleBlog from '../../screens/SingleBlog';
import SizeChart from '../../screens/sizeCharts';
import SearchPage from '../../screens/Search';
import SingleProduct from '../../screens/SingleProduct';
import FavouriteCarts from '../../screens/Favourite';
import AddedCarts from '../../screens/Cart';
import AddAddress from '../../screens/AddAddress';
import CategoryPage from '../../screens/Category';
import FilterPage from '../../screens/Filter';
import PlaceOrder from '../../screens/PlaceOrder';
import NewAddress from '../../screens/NewAddress';
import Help from '../../screens/Help';
import OrderHistory from '../../screens/History';
import ProductReturn from '../../screens/ReturnProduct';
import AboutUs from '../../screens/About';
import PaymentGateway from '../../screens/Payment';
import OrderPlaced from '../../screens/OrderPlaced';
import ReasonOfReturn from '../../screens/ReasonReturn';
import SetAccountDetails from '../../screens/SetAccount';


const Stack = createStackNavigator();

const HomeStack = () => {
    return (
            <Stack.Navigator initialRouteName='HomeScreen'>
                
                  <Stack.Screen name="HomeScreen" component={HomeScreen}
                    options={() => ({
                        headerShown: false,
                    })}
                />
                <Stack.Screen name="BlogScreen" component={BlogPage}
                    options={() => ({
                        headerShown: false,
                    })}
                />
                 <Stack.Screen name="SingleBlogScreen" component={SingleBlog}
                    options={() => ({
                        headerShown: false,
                    })}
                />
                  <Stack.Screen name="SingleProductScreen" component={SingleProduct}
                    options={() => ({
                        headerShown: false,
                    })}
                />
                <Stack.Screen name="SizeScreen" component={SizeChart}
                    options={() => ({
                        headerShown: false,
                    })}
                />
                   <Stack.Screen name="SearchScreen" component={SearchPage}
                    options={() => ({
                        headerShown: false,
                    })}
                />
            </Stack.Navigator>
    );
}

const FavouriteStack = () => {
    return (
            <Stack.Navigator initialRouteName='FavouriteScreen'>
               
                <Stack.Screen name="FavouriteScreen" component={FavouriteCarts}
                    options={() => ({
                        headerShown: false,
                    })}
                />
                 
            </Stack.Navigator>
    );
}
const HistoryStack = () => {
    return (
            <Stack.Navigator initialRouteName='HistoryScreen'>
               
                <Stack.Screen name="HistoryScreen" component={OrderHistory}
                    options={() => ({
                        headerShown: false,
                    })}
                />
                 
                 <Stack.Screen name="ProductReturn" component={ProductReturn}
                    options={() => ({
                        headerShown: false,
                    })}
                />
                  <Stack.Screen name="ReasonReturnProduct" component={ReasonOfReturn}
                    options={() => ({
                        headerShown: false,
                    })}
                />
                 
                 <Stack.Screen name="SetAccount" component={SetAccountDetails}
                    options={() => ({
                        headerShown: false,
                    })}
                />
            </Stack.Navigator>
    );
}

const AddedCartStack = () => {
    return (
            <Stack.Navigator initialRouteName='CartScreen'>
               
                <Stack.Screen name="CartScreen" component={AddedCarts}
                    options={() => ({
                        headerShown: false,
                    })}
                />
                 <Stack.Screen name="AddressScreen" component={AddAddress}
                    options={() => ({
                        headerShown: false,
                    })}
                />
                  <Stack.Screen name="CategoryScreen" component={CategoryPage}
                    options={() => ({
                        headerShown: false,
                    })}
                />
                <Stack.Screen name="FilterScreen" component={FilterPage}
                    options={() => ({
                        headerShown: false,
                    })}
                />
                   <Stack.Screen name="PlaceOrderScreen" component={PlaceOrder}
                    options={() => ({
                        headerShown: false,
                    })}
                />
                <Stack.Screen name="NewAddressScreen" component={NewAddress}
                    options={() => ({
                        headerShown: false,
                    })}
                />
                 <Stack.Screen name="HelpScreen" component={Help}
                    options={() => ({
                        headerShown: false,
                    })}
                />
                 <Stack.Screen name="About" component={AboutUs}
                    options={() => ({
                        headerShown: false,
                    })}
                />
                <Stack.Screen name="OrderPlaced" component={OrderPlaced}
                    options={() => ({
                        headerShown: false,
                    })}
                />
                 <Stack.Screen name="PaymentScreen" component={PaymentGateway}
                    options={() => ({
                        headerShown: false,
                    })}
                />
            </Stack.Navigator>
    );
}


export {
    HomeStack,
    FavouriteStack,
    HistoryStack,
    AddedCartStack,
}