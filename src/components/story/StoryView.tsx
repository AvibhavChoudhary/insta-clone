/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react-native/no-inline-styles */
import {
  View,
  Image,
  Dimensions,
  TextInput,
  TouchableOpacity,
  StyleSheet,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import {useNavigation} from '@react-navigation/native';
import Feather from 'react-native-vector-icons/Feather';
import Entypo from 'react-native-vector-icons/Entypo';
import {UserDataType} from '../../utils/userData';
import {StoryType} from '../../utils/types';
import {Box, HStack, Pressable, VStack, Text} from '@gluestack-ui/themed';
import Animated, {
  useSharedValue,
  useAnimatedStyle,
  withTiming,
  Easing,
  useAnimatedReaction,
  runOnJS,
  cancelAnimation,
} from 'react-native-reanimated';

const screenHeight = Dimensions.get('window').height;
const screenWidth = Dimensions.get('window').width;
const storyViewDuration = 5 * 1000;

const StoryView = ({route}) => {
  const [currentStoryIndex, setCurrentStoryIndex] = useState(0);
  const [currentUserIndex, setCurrentUserIndex] = useState<number>(
    route.params.userIndex,
  );
  const allUsers: UserDataType[] = route.params.stories;
  const currentUser = allUsers[currentUserIndex];
  const currentUserStory: StoryType[] = currentUser.story;
  const navigation = useNavigation();
  const progress = useSharedValue(0);

  useEffect(() => {
    progress.value = 0;
    progress.value = withTiming(1, {
      duration: storyViewDuration,
      easing: Easing.linear,
    });
  }, [currentStoryIndex, currentUserIndex]);

  const gotoNextStory = () => {
    setCurrentStoryIndex(index => {
      if (index === currentUser.story.length - 1) {
        goToNextUser();
        return 0;
      }
      return index + 1;
    });
  };
  const gotoPrevStory = () => {
    setCurrentStoryIndex(index => {
      if (index === 0) {
        goToPrevUser();
        return 0;
      }
      return index - 1;
    });
  };

  const goToNextUser = () => {
    setCurrentUserIndex(index => {
      if (index === allUsers.length - 1) {
        navigation.goBack();
      }
      return index + 1;
    });
  };

  const goToPrevUser = () => {
    setCurrentUserIndex(index => {
      if (index === 0) {
        navigation.goBack();
      }
      return index - 1;
    });
  };

  useAnimatedReaction(
    () => progress.value,
    (currentValue, previousValue) => {
      if (currentValue !== previousValue && currentValue === 1) {
        runOnJS(gotoNextStory)();
      }
    },
  );

  const startAnimation = () => {
    progress.value = withTiming(1, {
      duration: storyViewDuration,
      easing: Easing.linear,
    });
  };

  const indicatorAnimatedStyle = useAnimatedStyle(() => ({
    width: `${progress.value * 100}%`,
  }));

  return (
    <Box
      flex={1}
      bg="$black"
      position="relative"
      alignItems="center"
      justifyContent="center">
      <Pressable
        flex={1}
        position="absolute"
        h="80%"
        w="34%"
        left={0}
        zIndex={1}
        bottom={80}
        onPress={gotoPrevStory}
        onLongPress={() => {
          console.log('long');
          cancelAnimation(progress);
        }}
        onPressOut={() => {
          console.log('press out');
        }}
      />
      <Pressable
        flex={1}
        position="absolute"
        h="80%"
        w="34%"
        right={0}
        zIndex={1}
        bottom={80}
        onPress={gotoNextStory}
        onPressOut={() => {
          console.log('press out');
        }}
      />

      <Box
        position="absolute"
        top={0}
        bg="rgba(0, 0, 0, 0.25)"
        w="$full"
        p="$5"
        pt="$2.5">
        <Box flexDirection="row" gap={5} mb="$5">
          {currentUserStory.map((story, index) => (
            <Box
              key={`${currentUser.id}-${index}`}
              flex={1}
              h="$1"
              bg="gray"
              overflow="hidden"
              borderRadius={10}>
              <Animated.View
                style={[
                  styles.indicator,
                  index === currentStoryIndex && indicatorAnimatedStyle,
                  index > currentStoryIndex && {width: 0},
                  index < currentStoryIndex && {width: '100%'},
                ]}
              />
            </Box>
          ))}
        </Box>
      </Box>

      <HStack
        alignItems="center"
        w="$full"
        justifyContent="space-between"
        zIndex={1}
        position="absolute"
        top={12}
        left={0}>
        <HStack
          pt="$3"
          pl="$3"
          alignItems="center"
          position="relative"
          zIndex={1}>
          <Image style={styles.storyAvatarImage} source={currentUser.profile} />
          <Text size="lg" color="white" fontWeight="$bold">
            {currentUser.name}
          </Text>
          <Text size="lg" color="white" fontWeight="$semibold" ml="$3">
            {currentUserStory[currentStoryIndex].time}hr
          </Text>
        </HStack>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Entypo name="cross" style={styles.crossButton} />
        </TouchableOpacity>
      </HStack>
      <VStack alignItems="center" justifyContent="space-between" flex={1}>
        <Image
          source={currentUserStory[currentStoryIndex]?.image}
          style={styles.storyImage}
        />
      </VStack>

      <HStack
        mt="$2.5"
        alignItems="center"
        justifyContent="space-around"
        flex={0.1}>
        <TextInput
          style={styles.replyInput}
          placeholder="Message"
          placeholderTextColor={'white'}
        />
        <TouchableOpacity>
          <Feather name="send" style={styles.replyButton} />
        </TouchableOpacity>
      </HStack>
    </Box>
  );
};

export default StoryView;

const styles = StyleSheet.create({
  storyAvatarImage: {height: 40, width: 40, borderRadius: 20, marginRight: 10},
  crossButton: {color: 'white', fontSize: 28, marginRight: 10, marginTop: 10},
  storyImage: {
    height: screenHeight - 120,
    width: screenWidth,
    flex: 1,
    borderBottomRightRadius: 15,
    borderBottomLeftRadius: 15,
    objectFit: 'contain',
  },
  replyInput: {
    borderWidth: 1,
    borderColor: 'white',
    height: '80%',
    paddingHorizontal: 15,
    color: 'white',
    borderRadius: 30,
    marginHorizontal: 10,
    flex: 0.8,
  },
  replyButton: {marginLeft: 15, color: 'white', fontSize: 22},
  indicator: {
    backgroundColor: 'white',
    height: '100%',
  },
});
