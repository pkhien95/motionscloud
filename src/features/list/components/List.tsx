import React from 'react'
import {StackNavigationProp} from '@react-navigation/stack'
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native'
import {ShortListItem} from '../types'
import FontAwesomeIcon from 'react-native-vector-icons/FontAwesome'
import AntDesignIcon from 'react-native-vector-icons/AntDesign'
import {NAVIGATORS} from '../../../constants/navigators'

export interface ListProps {
  list: ShortListItem[]
  selectItem: (id: string) => void
  navigation: StackNavigationProp<any, 'List'>
}

const getIconFromIndex = (index: number) => {
  switch (index) {
    case 0:
      return 'dot-circle-o'
    case 1:
      return 'check-circle-o'
    case 2:
      return 'exclamation-circle'
    default:
      return 'dot-circle-o'
  }
}

const getColorFromIndex = (index: number) => {
  switch (index) {
    case 0:
      return '#164384'
    case 1:
      return '#5AC362'
    case 2:
      return '#EC5F59'
    default:
      return '#164384'
  }
}

const List = (props: ListProps) => {
  const itemOnPress = (id: string) => {
    const {selectItem, navigation} = props

    selectItem(id)
    navigation.navigate(NAVIGATORS.details)
  }

  const {list} = props
  return (
    <View style={styles.container}>
      <View style={styles.listContainer}>
        {list.map((item, index) => {
          const {id, name} = item
          return (
            <TouchableOpacity
              key={id}
              style={styles.itemContainer}
              onPress={() => itemOnPress(id)}>
              <View style={styles.itemContent}>
                <View style={styles.itemLeftSection}>
                  <FontAwesomeIcon
                    name={getIconFromIndex(index)}
                    size={20}
                    color={getColorFromIndex(index)}
                  />
                  <Text style={styles.itemText}>{name}</Text>
                </View>
                <AntDesignIcon name={'right'} size={15} color={'#333333'} />
              </View>
              {index !== list.length - 1 && <View style={styles.divider} />}
            </TouchableOpacity>
          )
        })}
      </View>
      <TouchableOpacity style={styles.bottomButton}>
        <Text style={styles.bottomButtonText}>Do Something</Text>
      </TouchableOpacity>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  listContainer: {
    flex: 1,
  },
  itemContainer: {
    backgroundColor: 'white',
    paddingHorizontal: 15,
  },
  itemContent: {
    paddingVertical: 20,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  itemLeftSection: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  itemText: {
    marginLeft: 10,
    fontSize: 16,
  },
  divider: {
    width: '100%',
    height: 1,
    backgroundColor: 'lightgray',
  },
  bottomButton: {
    backgroundColor: '#ECA83B',
    paddingVertical: 15,
    marginHorizontal: 15,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 4,
    marginBottom: 20,
  },
  bottomButtonText: {
    fontSize: 16,
    color: 'white',
    fontWeight: '600',
  },
})

export default List
