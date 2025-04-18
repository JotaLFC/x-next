import {
  collection,
  getDocs,
  getFirestore,
  orderBy,
  query,
} from 'firebase/firestore';

import { app } from '../firebase';
import Post from './Post';

export default async function Feed() {
  const db = getFirestore(app);
  const q = query(collection(db, 'posts'), orderBy('timestamp', 'desc'));
  const querySnapshot = await getDocs(q);

  // Convert Firestore data to plain objects
  let data = [];
  querySnapshot.forEach((doc) => {
    const postData = doc.data();
    data.push({
      id: doc.id,
      ...postData,
      timestamp: postData.timestamp?.toMillis(), // Convert Firestore Timestamp to milliseconds
    });
  });

  return (
    <div>
      {data.map((post) => (
        <Post key={post.id} post={post} id={post.id} />
      ))}
    </div>
  );
}