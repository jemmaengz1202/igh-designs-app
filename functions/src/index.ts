import * as functions from 'firebase-functions';

import * as admin from 'firebase-admin';
admin.initializeApp(functions.config().firebase);

// Start writing Firebase Functions
// https://firebase.google.com/docs/functions/typescript
//
// export const helloWorld = functions.https.onRequest((request, response) => {
//  response.send("Hello from Firebase!");
// });

exports.createNewNode = 
functions.database
    .ref('/alertas/{alertaId}')
    .onCreate((snapshot, context) => {
        const _date = Date.now();
        
        return snapshot.ref.parent.parent.child('lista').push({
            text: snapshot.val(),
            date: _date
        });
    });


exports.pushNotificationAlerta = 
functions.database
    .ref('/alertas/{alertaId}')
    .onCreate((snapshot, context)  => {
        const value = snapshot.val();
        console.log(`Valor obtenido: ${value}`);

        const payload = {
            notification: {
                title: "Alerta",
                body : value,
            },
            android: {
                notification: {
                    sound       : "default",
                    click_action: "FCM_PLUGIN_ACTIVITY"
                }
            },
            data: {
                text: value
            },
            topic: "all",
        };

        const options = {
            priority  : "high",
            timeToLive: 60 * 60 * 24
        };

        return admin.messaging().send(payload).then(res => {
            console.log("Successfully sent message:", res)
        }).catch(err => {
            console.log("Error sending message:", err);

        })

    });