import React from 'react'
import {StackNavigationProp} from '@react-navigation/stack'
import {StyleSheet, Text, TextInput, View} from 'react-native'
import {COLORS} from '../../../themes/colors'
import {ListItem} from '../../list/types'
import RNPickerSelect from 'react-native-picker-select'
import Ionicons from 'react-native-vector-icons/Ionicons'
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view'

export interface DetailsProps {
  navigation: StackNavigationProp<any, 'Details'>
  item: ListItem
  setFirstSectionSelection: (selected: string) => void
  setFirstSectionText: (text: string) => void
  setSecondSectionSelection: (selected: string) => void
  setSecondSectionText: (text: string) => void
  setThirdSectionSelection: (selected: string) => void
  setThirdSectionText: (text: string) => void
}

const Details = (props: DetailsProps) => {
  const {
    item: {
      firstSectionText,
      firstSectionSelection,
      secondSectionText,
      secondSectionSelection,
      thirdSectionText,
      thirdSectionSelection,
    },
    setFirstSectionSelection,
    setFirstSectionText,
    setSecondSectionSelection,
    setSecondSectionText,
    setThirdSectionSelection,
    setThirdSectionText,
  } = props

  const onFirstSectionTextChange = (text: string) => {
    setFirstSectionText(text)
  }

  const onSecondSectionTextChange = (text: string) => {
    setSecondSectionText(text)
  }

  const onThirdSectionTextChange = (text: string) => {
    setThirdSectionText(text)
  }

  const pickerOptions = [
    {label: 'Option 1', value: 'option-1'},
    {label: 'Option 2', value: 'option-2'},
    {label: 'Option 3', value: 'option-3'},
  ]

  return (
    <KeyboardAwareScrollView
      style={styles.scrollView}
      contentContainerStyle={styles.scrollViewContent}>
      <View style={styles.container}>
        <View style={styles.sectionContainer}>
          <Text style={styles.sectionName}>First Section</Text>
          <View style={styles.sectionContent}>
            <Text style={styles.elementLabel}>Select an option</Text>
            <RNPickerSelect
              value={firstSectionSelection}
              style={pickerStyles}
              onValueChange={(itemValue: string) =>
                setFirstSectionSelection(itemValue)
              }
              items={pickerOptions}
              Icon={() => {
                return (
                  <Ionicons
                    name={'md-arrow-dropdown'}
                    size={20}
                    color={'gray'}
                  />
                )
              }}
            />

            <Text style={styles.elementLabel}>Write something</Text>
            <TextInput
              style={styles.textInput}
              value={firstSectionText}
              onChangeText={onFirstSectionTextChange}
            />
          </View>
        </View>

        <View style={styles.sectionContainer}>
          <Text style={styles.sectionName}>Second Section</Text>
          <View style={styles.sectionContent}>
            <Text style={styles.elementLabel}>Select an option</Text>
            <RNPickerSelect
              value={secondSectionSelection}
              style={pickerStyles}
              onValueChange={(itemValue: string) =>
                setSecondSectionSelection(itemValue)
              }
              items={pickerOptions}
              Icon={() => {
                return (
                  <Ionicons
                    name={'md-arrow-dropdown'}
                    size={20}
                    color={'gray'}
                  />
                )
              }}
            />

            <Text style={styles.elementLabel}>Write something</Text>
            <TextInput
              style={styles.textInput}
              value={secondSectionText}
              onChangeText={onSecondSectionTextChange}
            />
          </View>
        </View>

        <View style={styles.sectionContainer}>
          <Text style={styles.sectionName}>Third Section</Text>
          <View style={styles.sectionContent}>
            <Text style={styles.elementLabel}>Select an option</Text>
            <RNPickerSelect
              value={thirdSectionSelection}
              style={pickerStyles}
              onValueChange={(itemValue: string) =>
                setThirdSectionSelection(itemValue)
              }
              items={pickerOptions}
              Icon={() => {
                return (
                  <Ionicons
                    name={'md-arrow-dropdown'}
                    size={20}
                    color={'gray'}
                  />
                )
              }}
            />

            <Text style={styles.elementLabel}>Write something</Text>
            <TextInput
              style={styles.textInput}
              value={thirdSectionText}
              onChangeText={onThirdSectionTextChange}
            />
          </View>
        </View>
      </View>
    </KeyboardAwareScrollView>
  )
}

const pickerStyles = StyleSheet.create({
  inputIOS: {
    fontSize: 16,
    height: 50,
    paddingHorizontal: 10,
    borderWidth: 1,
    borderColor: 'lightgray',
    borderRadius: 4,
    color: 'black',
    paddingRight: 30,
    marginBottom: 20,
  },
  iconContainer: {
    top: 12,
    right: 10,
  },
})

const styles = StyleSheet.create({
  scrollView: {},
  scrollViewContent: {
    paddingBottom: 30,
    backgroundColor: COLORS.white,
  },
  container: {
    flex: 1,
    backgroundColor: COLORS.white,
    alignItems: 'stretch',
  },
  sectionContainer: {},
  sectionName: {
    backgroundColor: '#F8F8F8',
    fontSize: 16,
    fontWeight: 'bold',
    color: COLORS.primaryText,
    paddingVertical: 10,
    paddingHorizontal: 10,
  },
  sectionContent: {
    paddingVertical: 20,
    paddingHorizontal: 10,
  },
  elementLabel: {
    fontSize: 15,
    fontWeight: '600',
    color: COLORS.primaryText,
    marginBottom: 5,
  },
  textInput: {
    fontSize: 16,
    height: 50,
    color: COLORS.primaryText,
    borderWidth: 1,
    borderColor: 'lightgray',
    borderRadius: 4,
    paddingHorizontal: 10,
  },
})

export default Details
