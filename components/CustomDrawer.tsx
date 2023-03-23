import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { DrawerContentScrollView, DrawerItem, useDrawerProgress } from '@react-navigation/drawer';
import Animated, { interpolate, useAnimatedStyle} from 'react-native-reanimated';

interface CustomDrawerItemProps {
  label: string;
  onPress: () => void;
  isFocused: boolean;
}

const CustomDrawerItem = ({ label, onPress, isFocused }: CustomDrawerItemProps) => {
  return (
    <TouchableOpacity
      onPress={onPress}
      style={[
        styles.item,
        { backgroundColor: isFocused ? 'red' : 'transparent' },
      ]}
    >
      <Text style={styles.label}>{label}</Text>
    </TouchableOpacity>
  );
};

const CustomDrawer = (props: any) => {
  const { state, navigation } = props;

  const drawerProgress = useDrawerProgress();

  const viewStyles = useAnimatedStyle(() => {
    const translateY = interpolate(drawerProgress.value, [0, 1], [0, 10]);

    return {
      transform: [{ translateY }],
    };
  });

  return (
    <Animated.View style={[styles.container, viewStyles]}>
      <Text style={styles.title}>Beka</Text>
      <DrawerContentScrollView {...props}>
        {state.routes.map((route: any, index: any) => {
          const isFocused = state.index === index;

          const onPress = () => {
            const e = navigation.emit({
              type: 'tabPress',
              target: route.key,
            });
            if (!isFocused && !e.defaultPrevented) {
              navigation.navigate(route.name);
            }
          };

          return (
            <CustomDrawerItem
              key={index}
              label={route.name}
              onPress={onPress}
              isFocused={isFocused}
            />
          );
        })}
        <View style={styles.separator} />
        <DrawerItem
          label="Sign Out"
          onPress={() => {}}
          labelStyle={styles.label}
        />
      </DrawerContentScrollView>
    </Animated.View>
  );
};

export default CustomDrawer;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 40,
    paddingHorizontal: 16,
  },
  title: {
    alignSelf: 'center',
    fontSize: 20,
    fontWeight: 'bold',
    color: 'white',
  },
  item: {
    padding: 16,
    borderRadius: 16,
  },
  label: {
    fontSize: 18,
    color: 'rgba(255,255,255,.75)',
  },
  separator: {
    marginVertical: 20,
    width: '100%',
    borderTopColor: 'rgba(255,255,255,.75)',
    borderTopWidth: 1,
  },
});
