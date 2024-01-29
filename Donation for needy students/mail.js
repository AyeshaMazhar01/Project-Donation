const firebaseConfig = {
    apiKey: "AIzaSyCLa3PMnfVaAKbjG4FfCT15U9ksKiT9hn0",
    authDomain: "form-6676e.firebaseapp.com",
    databaseURL: "https://form-6676e-default-rtdb.firebaseio.com",
    projectId: "form-6676e",
    storageBucket: "form-6676e.appspot.com",
    messagingSenderId: "985711672023",
    appId: "1:985711672023:web:b534206a0ccb982f608e92"
  };

  //initialize firebase
  firebase.initializeApp(firebaseConfig);

  //reference your database
  var formDB = firebase.database().ref('form')

  document.getElementById('form').addEventListener('submit', submitForm);

  function submitForm(e){
    e.preventDefault();
    var name = getElementVal('name');
    var rollno = getElementVal('rollno');
    var Department = getElementVal('department');
    var Fee = getElementVal('fee');
    var Email = getElementVal('email');

    saveMessages(name, rollno, department, fee, email);
  }

  const saveMessages = (name, rollno, department, fee, email) => {
    var newform = formDB.push();
    newform.set({
        name : name,
        rollno : rollno,
        department : department,
        fee : fee,
        email :email,

    })
  };

  const getElementVal = (id) => {
    return document.getElementById(id).value;
  }