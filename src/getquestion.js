// import { query } from 'firebase/firestore';
import { query, collection, getDocs, where } from "firebase/firestore";
import {db} from './firebase';
function GetQuestion(){
    const q=query(collection(db,'questions'));
    const doc=getDocs(q);
    console.log(doc);
    // const data=doc.docs[0].data();
    console.log("reading questions");
    // console.log(data);
    return null;
    // return data.sort(()=> 0.5- Math.random()).slice(0,10);
}
export default GetQuestion;