const config = process.env.NODE_ENV === 'development' ? {
    apiKey: "AIzaSyDzlVR2klzKWMBWOuHqeqEKquizBHtCaB8",
    authDomain: "chatenet-d3181.firebaseapp.com",
    databaseURL: "https://chatenet-d3181.firebaseio.com",
    projectId: "chatenet-d3181",
    storageBucket: "chatenet-d3181.appspot.com",
    messagingSenderId: "928481955676",
    appId: "1:928481955676:web:9cfce07bab790f9292bb99",
    measurementId: "G-RMR3LHZB5N"
} :
{
    apiKey: "",
    authDomain: "",
    databaseURL: "",
    projectId: "",
    storageBucket: "",
    messagingSenderId: "",
    appId: "",
    measurementId: ""
};

export default config;
  