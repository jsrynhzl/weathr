import { View, Image, SafeAreaView, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native'
import React, { useState } from 'react'
import { StatusBar } from 'expo-status-bar'
import { theme } from '../theme'
import bg from '../assets/images/bg.png'

// ICONS
import wind from '../assets/icons/wind.png'
import drop from '../assets/icons/drop.png'
import sun from '../assets/icons/sun.png'
// import { MagnifyingGlassIcon} from 'react-native-heroicons/outline'
// import { MapPinIcon } from 'react-native-heroicons/solid'

const HomeScreen = () => {

    const [showSearch, toggleSearch] = useState(false);
    const [locations, setLocations] = useState([1, 2, 3]);

    const handleLocation = (loc) => {
        console.log("location: ", loc)
    }
    return (
        <View style={styles.container}>
            <StatusBar style="light" />
            <Image
                blurRadius={70}
                source={bg}
                className="absolute h-full w-full"
            />
            <SafeAreaView className="flex flex-1">
                {/* Search section */}
                <View style={{ height: '7%' }} className="mx-4 relative z-50">
                    <View
                        className="flex-row justify-end items-center rounded-full"
                        style={{ backgroundColor: showSearch ? theme.bgWhite(0.2) : 'transparent' }}>
                        {
                            showSearch ? (
                                <TextInput
                                    placeholder="Search city"
                                    placeholderTextColor={'lightgray'}
                                    className="pl-6 h-10 pb-1 flex-1 text-base text-white"
                                />
                            ) : null
                        }
                        <TouchableOpacity
                            onPress={() => toggleSearch(!showSearch)}
                            style={{ backgroundColor: theme.bgWhite(0.3) }}
                            className="rounded-full p-3 m-1"
                        >
                            { /* <MagnifyingGlassIcon size="25" color="white" /> */}
                        </TouchableOpacity>
                    </View>
                    {
                        locations.length > 0 && showSearch ? (
                            <View className="absolute w-full bg-gray-300 top-16 rounded-3xl">
                                {
                                    locations.map((loc, index) => {
                                        let showBorder = index + 1 != locations.length;
                                        let borderClass = showBorder ? 'border-b-2 border-b-gray-400' : '';
                                        return (
                                            <TouchableOpacity
                                                onPress={() => handleLocation(loc)}
                                                key={index}
                                                className={"flex-row items-center border-0 p-3 px-4 mb-1 " + borderClass}
                                            >
                                                { /* <MapPinIcon size="20" color="gray" /> */}
                                                <Text className="text-black text-lg ml-2">Toronto, Canada</Text>
                                            </TouchableOpacity>
                                        )
                                    })
                                }
                            </View>
                        ) : null
                    }
                </View>


                {/* FORECAST SECTION ======================================= */}
                <View className="mx-4 flex justify-around flex-1 mb-2">
                    {/* Location */}
                    <Text className="text-white text-center text-2xl font-bold">
                        London
                        <Text className="text-lg font-semibold text-gray-300">
                            United Kingdom
                        </Text>
                    </Text>

                    {/* Main weather image */}
                    <View className="flex-row justify-center">
                        <Image
                            source={require('../assets/images/partlycloudy.png')}
                            style={{ width: 90, height: 90 }}
                        />
                    </View>

                    {/* Degree celsius with subtext description */}
                    <View className="spage-y-2">
                        <Text className="text-center font-bold text-white text-6xl ml-5">
                            23&#176;
                        </Text>
                        <Text className="text-center text-white text-xl tracking-widest">
                            Partly cloudy
                        </Text>
                    </View>

                    {/* Other stats */}
                    <View className="flex-row justify-between mx-4">
                        {/* Wind speed */}
                        <View className="flex-row space-x-2 items-center">
                            <Image source={wind} style={styles.statIcon} />
                            <Text className="text-white font-semibold text-base">
                                22kph
                            </Text>
                        </View>

                        {/* Humidity */}
                        <View className="flex-row space-x-2 items-center">
                            <Image source={drop} style={styles.statIcon} />
                            <Text className="text-white font-semibold text-base">
                                23%
                            </Text>
                        </View>

                        {/* Sunrise */}
                        <View className="flex-row space-x-2 items-center">
                            <Image source={sun} style={styles.statIcon} />
                            <Text className="text-white font-semibold text-base">
                                6:05 AM
                            </Text>
                        </View>
                    </View>
                </View>

                {/* Forecast for next days */}
                <View>

                </View>
            </SafeAreaView>
        </View>
    )
}

const styles = StyleSheet.create({
    // Ref: container: flex-1 relative
    container: {
        flex: 1,
        justifyContent: 'center',
        backgroundColor: '#ecf0f1',
        padding: 8,
        position: 'relative',
    },
    // Ref: statIcon: h-6 w-6
    statIcon: {
        width: 24,
        height: 24,
    },
});

export default HomeScreen