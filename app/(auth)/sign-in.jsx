import { View, Text, ScrollView, Image } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'



const SignIn = () => {
  return (
   <SafeAreaView className="bg-primary h-full">
        <ScrollView>
            <View className="w-full h-full justify-center px-4 my-6">
            <Image
            source={require('../../assets/images/logo.png')}
            resizeMode="contain"
            className="w-[115px] h-[34px]"
          />
                <Text className="text-2xl font-semibold text-white mt-10 font-psemibold">
            Log in to Aora
          </Text>
            </View>
        </ScrollView>
   </SafeAreaView>
  )
}

export default SignIn