import React from 'react'
import { Text } from 'react-native'
import { SafeAreaProvider } from 'react-native-safe-area-context'
import { ClerkProvider } from '@clerk/clerk-expo'

export default function App() {
  return (
    <ClerkProvider frontendApi="clerk.more.piranha-78.lcl.dev">
      <SafeAreaProvider>
        <Text>Hello world!</Text>
      </SafeAreaProvider>
    </ClerkProvider>
  )
}
