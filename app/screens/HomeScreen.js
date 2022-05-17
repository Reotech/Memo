import React, { useContext, useEffect, useState } from "react";
import { View, StyleSheet, ScrollView, RefreshControl } from "react-native";

import Card from "../components/Card";
import { credentialsContext } from "../components/CredentialsContext";
import AppActivityIndicator from "../components/AppActivityIndicator";
import colors from "../config/colors";
import Appheader from "../components/Appheader";

function HomeScreen({ navigation }) {
  const { storedCredentials, setStoredCredentials } =
    useContext(credentialsContext);
  const { name, email, photoUrl } = storedCredentials;
  const [isLoading, setLoading] = useState(true);

  const [news, setNews] = useState([]);
  const [refreshing, setRefreshing] = React.useState(false);

  useEffect(() => {
    getData();
  }, []);

  const getData = () => {
    fetch(
      "http://api.mediastack.com/v1/news?access_key=c7d1d6faedfff7d2568dfba6cd5e4cc3&limit=100&languages=en&countries=us,gb,ng,cn,au,-ma,-ar,-qa,-sd&date=2021-09-10,2021-12-31"
    )
      .then((response) => response.json())
      .then((json) => setNews(json))
      .catch((error) => console.error(error))
      .finally(() => setLoading(false));
  };

  const onRefresh = () => {
    news.data.map(() => []);
    getData();
  };

  return (
    <View style={styles.container}>
      {isLoading ? (
        <AppActivityIndicator color={colors.primary} size="large" />
      ) : (
        <>
          <Appheader />

          <ScrollView
            style={{ flex: 1, flexDirection: "column", width: "90%" }}
            refreshControl={
              <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
            }
          >
            {news.data.map((item, index) => {
              if (item.image != null) {
                return (
                  <Card
                    key={index}
                    image={{ uri: item.image }}
                    title={item.title}
                    subTitle={item.source}
                    onPress={() =>
                      navigation.navigate("WebViewScreen", { item })
                    }
                  />
                );
              }
            })}
          </ScrollView>
        </>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 40,
  },
});

export default HomeScreen;
