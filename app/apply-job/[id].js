import { Text, View, TextInput, SafeAreaView, TouchableOpacity, Image, FlatList, ScrollView, ActivityIndicator, RefreshControl } from 'react-native'
import { Stack, useRouter, useGlobalSearchParams } from 'expo-router'
import { useCallback, useState } from 'react'

import { Company, JobAbout, JobFooter, JobTabs, ScreenHeaderBtn, Specifics } from '../../components'
import { COLORS, icons, SIZES } from '../../constants';
import useFetch from '../../hook/useFetch'
import styles from '../../components/home/welcome/welcome.style'

const Apply = () => {

    const params = useGlobalSearchParams();
    const router = useRouter();
    const { data, isLoading, error, refetch } = useFetch('job-details', {
        job_id: params.id
    })

    const [refreshing, setRefreshing] = useState(false);

    const onRefresh = useCallback(() => {
        setRefreshing(true);
        refetch();
        setRefreshing(false);
    }, [])

    return (
        <SafeAreaView style={{ flex: 1, backgroundColor: COLORS.lightWhite }}>
            <Stack.Screen
                options={{
                    headerStyle: { backgroundColor: COLORS.lightWhite },
                    headerShadowVisible: false,
                    headerBackVisible: false,
                    headerLeft: () => (
                        <ScreenHeaderBtn iconUrl={icons.left} dimension="60%" handlePress={() => router.back()} />
                    ),
                    headerRight: () => (
                        <ScreenHeaderBtn iconUrl={icons.share} dimension="60%" />
                    ),
                    headerTitle: ''
                }} />
            <>
                <ScrollView showsHorizontalScrollIndicator={false} refreshControl={<RefreshControl refreshing={refreshing} onRefresh={onRefresh} />}>
                    {isLoading ? (
                        <ActivityIndicator size="large" color={COLORS.primary} />
                    ) : error ? (
                        <Text>Something went wrong</Text>
                    ) : data.length === 0 ? (
                        <Text>No data</Text>
                    ) : (


                        <View>
                            <View style={styles.container}>
                                <Text style={styles.welcomeMessage}>Fill to apply</Text>
                            </View>
                            <View style={styles.searchWrapper}>
                                <TextInput
                                    style={styles.searchInput}
                                    placeholder={`${params.id}`}
                                />
                            </View>
                        </View>
                    )}
                </ScrollView>
            </>
        </SafeAreaView >
    )
}

export default Apply