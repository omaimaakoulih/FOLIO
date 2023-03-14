import { Injectable } from "@angular/core";
import {Storage} from '@angular/fire/storage';
import { getDownloadURL, ref, uploadBytes } from "firebase/storage";
import { from, Observable, switchMap } from "rxjs";

@Injectable({
    providedIn : 'root'
})
export class ImageUpload{

    constructor(private storage:Storage){ }

    upladesdImage(image:File, path: string): Observable<string>{

        const storageRef = ref(this.storage, path);
        const uploadTask = from(uploadBytes(storageRef, image)); // la fonction from c'est pour la conversion a un Observable


        return uploadTask.pipe(
            switchMap((result) => getDownloadURL(result.ref))
        );
    }

}