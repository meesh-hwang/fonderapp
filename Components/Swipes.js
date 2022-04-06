import React, { useState } from 'react'
import { StyleSheet } from 'react-native'
import Swipeable from 'react-native-gesture-handler/Swipeable'
import { RectButton } from 'react-native-gesture-handler'
import SwipeableBox from './SwipeableBox'

function Swipes({ meals, currentIndex, handleLike, handlePass, swipesRef }) {
  const [willLike, setWillLike] = useState(false)
  const [willPass, setWillPass] = useState(false)
  const renderLeftActions = () => {
    return (
      <RectButton style={styles.container}>
        <SwipeableBox meals={meals[meals.length -1 == currentIndex ? 0 : currentIndex + 1]}></SwipeableBox>
      </RectButton>
    )
  }
  const renderRightActions = () => {
    return (
      <RectButton style={styles.container}>
        <SwipeableBox meals={meals[meals.length -1 == currentIndex ? 0 : currentIndex + 1]}></SwipeableBox>
      </RectButton>
    )
  }

  return (
    <Swipeable
      ref={swipesRef}
      friction={2}
      leftThreshold={40}
      rightThreshold={40}
      renderLeftActions={renderLeftActions}
      renderRightActions={renderRightActions}
      onSwipeableLeftOpen={() => {
        // setWillLike(false)
        handleLike(meals[currentIndex].id)
      }}
      onSwipeableRightOpen={() => {
        // setWillPass(false)
        handlePass()
      }}
      onSwipeableLeftWillOpen={() => setWillLike(true)}
      onSwipeableRightWillOpen={() => setWillPass(true)}
    >
      <SwipeableBox meals={meals[currentIndex]} willLike={willLike} willPass={willPass} />
    </Swipeable>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
})

export default React.forwardRef((props, ref) => <Swipes swipesRef={ref} {...props}></Swipes>)