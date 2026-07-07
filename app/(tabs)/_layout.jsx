import { Tabs } from "expo-router";
import { Image, View } from "react-native";

const TabsLayout = () => {
  const TabIcon = ({ name, focused }) => {
    const icons = {
      home: require("../../assets/icons/Library-Home.png"),
      heart: require("../../assets/icons/Library-Heart.png"),
      bag: require("../../assets/icons/Library-Bag.png"),
      profile: require("../../assets/icons/Profile.png"),
    };

    return (
      <View style={{ alignItems: "center", justifyContent: "center", gap: 6 }}>
        <Image
          source={icons[name]}
          style={{
            width: 28,
            height: 28,
            tintColor: focused ? "#C67C4E" : "#B3B3B3",
          }}
        />
        {focused && (
          <View
            style={{
              height: 6,
              width: 15,
              backgroundColor: "#C67C4E",
              borderRadius: 3,
            }}
          />
        )}
      </View>
    );
  };

  return (
    <Tabs
      screenOptions={{
        headerShown: false,
        headerTintColor: "#000",
        tabBarShowLabel: false,
        tabBarStyle: {
          backgroundColor: "#FFFFFF",
          borderTopWidth: 0,
          paddingTop: 10,
          height: 80,
          elevation: 0,
        },
      }}
    >
      <Tabs.Screen
        name="home"
        options={{
          tabBarIcon: ({ focused }) => (
            <TabIcon name="home" focused={focused} />
          ),
        }}
      />
      <Tabs.Screen
        name="heart"
        options={{
          tabBarIcon: ({ focused }) => (
            <TabIcon name="heart" focused={focused} />
          ),
        }}
      />
      <Tabs.Screen
        name="bag"
        options={{
          tabBarIcon: ({ focused }) => <TabIcon name="bag" focused={focused} />,
        }}
      />
      <Tabs.Screen
        name="profile"
        options={{
          tabBarIcon: ({ focused }) => (
            <TabIcon name="profile" focused={focused} />
          ),
        }}
      />
    </Tabs>
  );
};

export default TabsLayout;
