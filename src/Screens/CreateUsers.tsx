import React, { useState } from 'react';
import {
  Button,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  View,
} from 'react-native';
import { FIREBASE_APP, FIREBASE_AUTH, FIRESTORE_DB } from '../../firebaseConfig';

import { addDoc, collection, doc, getDocs, setDoc } from "firebase/firestore";
import { BTextInput } from '../Components/Styles';


export const CreateUsers = () => {
  const [state, setState] = useState({
    name: '',
    email: '',
    phone: '',
  });
  const [showError, setShowError] = useState(false);

  const handleChangeText = (name: string, value: string) => {
    setState({ ...state, [name]: value });
  };

  // const createNewUser = async () => {
  //   console.log("🚀 ~ file: CreateUsers.tsx:30 ~ createNewUser ~ FIRESTORE_DB:", FIRESTORE_DB)
  //   const querySnapshot = await getDocs(collection(FIRESTORE_DB, "users"));

  //   querySnapshot.forEach((doc) => {
  //     console.log(`${doc.id} => ${doc}`);
  //   });

  // };
const addUserDoc = async () => {
  try {
    let usersRef = collection(FIRESTORE_DB, "users");
    console.log("Doc Path is:", usersRef.path);

    console.log("about to add the doc");
    let newDocRef = await addDoc(usersRef, {    // << this will auto-generate a doc ID
      first: "Ada",
      last: "Lovelace",
      born: 1815
    });

    console.log("done adding the doc");
    console.log("response path: ", newDocRef.path);

  } catch (e) {
    console.error("Error adding document: ", e);
  }
  console.log("done the function");
};

  return (
    <ScrollView style={styles.container}>
      <View style={styles.inputGroup}>
      <BTextInput
                label={"Password"}
                secureTextEntry={true}
                // value={password}
                placeholder='Your post...'
                onChangeText={value => handleChangeText('name', value)}
                />
        {/* <TextInput
          placeholder="UserName"
          style={styles.input}
        /> */}
      </View>
      <View style={styles.inputGroup}>
        <TextInput
          placeholder="Email"
          style={styles.input}
          onChangeText={value => handleChangeText('email', value)}
        />
      </View>
      <View style={styles.inputGroup}>
        <TextInput
          style={styles.input}
          placeholder="Phone number"
          onChangeText={value => handleChangeText('phone', value)}
        />
      </View>
      {showError && (
        <Text style={styles.errorText}>El nombre no puede estar vacío</Text>
      )}

      <View style={styles.button}>
        <Button title="Save" onPress={addUserDoc} />
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 30,
    paddingHorizontal: 20,
  },
  errorText: {
    color: 'red',
    paddingVertical: 10,
  },
  inputGroup: {
    flex: 1,
    paddingHorizontal: 20,
    marginBottom: 15,
    borderBottomWidth: 1,
    borderBottomColor: '#cccccc',
  },
  input: {
    paddingVertical: 15,
  },
  button: {},
});
