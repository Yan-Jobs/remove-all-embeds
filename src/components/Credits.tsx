// - Credits -
// ALL OF THIS LOGIC WAS CODED BY acquite
// Thanks acquite :)
// - Credits -
import { React, Constants, StyleSheet } from "enmity/metro/common";
import { bulk, filters } from "enmity/metro";
import { name, version, repo, authors, github } from "../../manifest.json";
import { TouchableOpacity, View, Image, Text } from "enmity/components";

// @ts-ignore
const Animated = window.enmity.modules.common.Components.General.Animated;

const [Router] = bulk(filters.byProps("transitionToGuild"));

export default () => {
  const styles = StyleSheet.createThemedStyleSheet({
    container: {
      paddingTop: 30,
      paddingLeft: 20,
      marginBottom: -5,
      flexDirection: "row",
    },
    text_container: {
      paddingLeft: 15,
      paddingTop: 5,
      flexDirection: "column",
      flexWrap: "wrap",
    },
    image: {
      width: 75,
      height: 75,
      borderRadius: 10,
    },
    main_text: {
      opacity: 0.975,
      letterSpacing: 0.25,
    },
    header: {
      color: Constants.ThemeColorMap.HEADER_PRIMARY,
      fontFamily: Constants.Fonts.DISPLAY_BOLD,
      fontSize: 25,
      letterSpacing: 0.25,
    },
    sub_header: {
      color: Constants.ThemeColorMap.HEADER_SECONDARY,
      opacity: 0.975,
      fontSize: 12.75,
    },
  });

  const animatedButtonScale = React.useRef(new Animated.Value(1)).current;

  const onPressIn = () => {
    Animated.spring(animatedButtonScale, {
      toValue: 1.1,
      duration: 250,
      useNativeDriver: true,
    }).start();
  };

  const onPressOut = () => {
    Animated.spring(animatedButtonScale, {
      toValue: 1,
      duration: 250,
      useNativeDriver: true,
    }).start();
  };

  const onPress = () => {
    Router.openURL(repo);
  };
  const animatedScaleStyle = { transform: [{ scale: animatedButtonScale }] };

  return (
    <>
      <View style={styles.container}>
        <TouchableOpacity
          onPress={onPress}
          onPressIn={onPressIn}
          onPressOut={onPressOut}
        >
          <Animated.View style={[animatedScaleStyle]}>
            <Image
              style={[styles.image]}
              source={{
                uri: "https://cdn.discordapp.com/avatars/735538297815957584/a_2913d42512a616bb73678e97ccdcc4e9.gif?size=1024",
              }}
            />
          </Animated.View>
        </TouchableOpacity>
        <View style={styles.text_container}>
          <TouchableOpacity
            onPress={() => {
              Router.openURL(repo);
            }}
          >
            <Text style={[styles.main_text, styles.header]}>
              {name} {}
            </Text>
          </TouchableOpacity>
          <View
            style={
              { flexDirection: "row" } /* makes the elements render inline */
            }
          >
            <Text style={[styles.main_text, styles.sub_header]}>
              A plugin by
            </Text>
            <TouchableOpacity
              onPress={() => {
                Router.openURL(github);
              }}
            >
              <Text
                style={[
                  styles.main_text,
                  styles.sub_header,
                  {
                    paddingLeft: 4,
                    fontFamily: Constants.Fonts.DISPLAY_BOLD,
                  },
                ]}
              >
                {authors[0].name}
              </Text>
            </TouchableOpacity>
            <Text style={[styles.main_text, styles.sub_header]}>
               with code from
            </Text>
              <Text
                style={[
                  styles.main_text,
                  styles.sub_header,
                  {
                    paddingLeft: 4,
                    fontFamily: Constants.Fonts.DISPLAY_BOLD,
                  },
                ]}
              >
                acquite
              </Text>
          </View>
          <View>
            <TouchableOpacity
              style={{ flexDirection: "row" }}
              onPress={() => {}}
            >
              <Text style={[styles.main_text, styles.sub_header]}>
                Version:
              </Text>
              <Text
                style={[
                  styles.main_text,
                  styles.sub_header,
                  {
                    paddingLeft: 4,
                    fontFamily: Constants.Fonts.DISPLAY_BOLD,
                  },
                ]}
              >
                {version} {}
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </>
  );
};
