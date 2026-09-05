// Firebase project config for the Coloring Book App (BOLF-CBA).
//
// This object is safe to commit/publish — it's a public client identifier,
// not a secret (access is controlled by Firebase Auth + security rules,
// and by restricting the API key to this app's domains in Google Cloud).
//
// Firebase project: BOLF-CBA (bolf-cba, project number 609583859792).
// Hosting is GitHub Pages only — no Firebase Hosting for this project.
//
// TODO: Replace these placeholders with the values from the Web app just
// registered in that project: Firebase Console -> Project settings ->
// General -> "Your apps" -> Web app -> SDK setup and configuration -> Config.
export const firebaseConfig = {
  apiKey: "REPLACE_WITH_API_KEY",
  authDomain: "bolf-cba.firebaseapp.com",
  projectId: "bolf-cba",
  storageBucket: "REPLACE_WITH_STORAGE_BUCKET",
  messagingSenderId: "609583859792",
  appId: "REPLACE_WITH_APP_ID",
  measurementId: "REPLACE_WITH_MEASUREMENT_ID_IF_PRESENT"
};
