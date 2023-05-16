import admin from "firebase-admin";
import("./pikif-3470c-firebase-adminsdk-wjrqj-fd652f07e5.json", {
  assert: { type: "json" },
}).then((value) => {
  value;
  admin.initializeApp({
    credential: admin.credential.cert(value.default),
  });
});

export default admin;
