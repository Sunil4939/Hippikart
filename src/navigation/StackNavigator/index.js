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

const AddedCartStack = () => {
    return (
            <Stack.Navigator initialRouteName='CategoryScreen'>
               
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
            </Stack.Navigator>
    );
}


export {
    HomeStack,
    FavouriteStack,
    AddedCartStack,
}