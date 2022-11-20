import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/storage';
import firebaseConfig from './firebaseConfig';
//Initialize Firebase App
let app;
if (firebase.apps.length === 0) {
  app = firebase.initializeApp(firebaseConfig);
} else {
  app = firebase.app();
}

/** integrating google analytics **/
export const auth = firebase.auth();

export const uploadPhoto = (image, userId) => {
  return new Promise((resolve, reject) => {
    const randNum = Math.random().toString(36);
    const childPath = `post/${userId}/${randNum}`;

    fetch(image)
      .then(function (response) {
        return response.blob();
      })
      .then(function (blob) {
        const task = firebase.storage().ref().child(childPath).put(blob);

        const taskProgress = (snapshot) => {
          console.log(`transferred: ${snapshot.bytesTransferred}`);
        };

        const taskCompleted = () => {
          task.snapshot.ref.getDownloadURL().then((url) => {
            resolve(url);
          });
        };

        const taskError = (error) => {
          console.log(error);
          reject(error);
        };
        task.on('state_changed', taskProgress, taskError, taskCompleted);
      });
  });
};

export const deletePhoto = async (image) => {
  // Create a reference to the file to delete
  var fileRef = firebase.storage().refFromURL(image);

  // Delete the file using the delete() method
  await fileRef
    .delete()
    .then(function () {
      // File deleted successfully
      console.log('File Deleted');
    })
    .catch(function (error) {
      // Some Error occurred
      console.log(error);
    });
};
