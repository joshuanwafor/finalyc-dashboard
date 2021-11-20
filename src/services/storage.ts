import { getStorage, ref, uploadBytes } from "firebase/storage";


export async function uploadFile(file: File): Promise<string>{
    const storage = getStorage();

    const storageRef = ref(storage, "pack-"+Date.now(),);
    console.log('Uploaded a blob or file!');
    let snapshot = await uploadBytes(storageRef, file);
    console.log(snapshot);
    return snapshot.metadata.fullPath;
}