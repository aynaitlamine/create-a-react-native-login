import { TextInput as Input, Text } from 'react-native-paper'

import React from 'react'
import { StyleSheet,View  } from 'react-native'
import { theme } from '../core/theme'

const TextInput = ({ error, description, ...props }) => {
  return (
    <View style={styles.container}>
        <Input 
            style={styles.input}
            selectionColor={theme.colors.primary}
            underlineColor="transparent"
            mode="outlined"
            {...props}
        />
        {description && !error ? (
            <Text style={styles.description}>{description}</Text>
        ) : null}
        {error ? <Text style={styles.error}>{error}</Text> : null}
    </View>
  )
}

export default TextInput

const styles = StyleSheet.create({
    container: {
        width: '100%',
        marginVertical: 5,
        borderRadius: 40,
      },
      input: {
        backgroundColor: theme.colors.surface,
      },
      description: {
        fontSize: 13,
        color: theme.colors.secondary,
        paddingTop: 4,
      },
      error: {
        fontSize: 13,
        color: theme.colors.error,
        paddingTop: 4,
      },
})