import React, { useState } from 'react';
import { View, ScrollView, SafeAreaView, Button, Text } from 'react-native';
import { Stack, useRouter } from 'expo-router'
import { COLORS, icons, images, SIZES } from "../constants"
import { Nearbyjobs, Popularjobs, ScreenHeaderBtn, Welcome } from '../components'
import { DescriptorSecretKey, Mnemonic, Blockchain, Wallet, DatabaseConfig, Descriptor } from 'bdk-rn';
import { WordCount, Network } from 'bdk-rn/lib/lib/enums';
import BdkRn from 'bdk-rn';
const Home = () => {
    const router = useRouter();
    const [mnemonic, setMnemonic] = useState('');
    const getMnemonic = async () => {
        const { data } = await BdkRn.generateMnemonic({
            length: 12,
            network: 'testnet',
        });
        console.log(data);
        setMnemonic(data);
        setDisplayText(JSON.stringify(data));
    };
    return (

        <SafeAreaView style={{ flex: 1, backgroundColor: COLORS.lightWhite }}>
            <Stack.Screen options={{
                headerStyle: { backgroundColor: COLORS.lightWhite },
                headerShadowVisible: false,
                headerLeft: () => (
                    <ScreenHeaderBtn iconUrl={icons.menu} dimension='60%' />
                ),
                headerRight: () => (
                    <ScreenHeaderBtn iconUrl={images.profile} dimension='100%' />
                ),
                headerTitle: "",
            }}
            />
            <ScrollView showsVerticalScrollIndicator={false} >
                <View
                    style={{
                        flex: 1,
                        padding: SIZES.medium
                    }}
                >
                    <Welcome />
                    <Popularjobs />
                    <Nearbyjobs />

                </View>
                <Button
                    title="Generate Mnemonic"
                    onPress={getMnemonic}
                />
                <Text>
                    {mnemonic == undefined ? "hola" : mnemonic}
                </Text>
            </ScrollView>
        </SafeAreaView>
    )
}

export default Home;