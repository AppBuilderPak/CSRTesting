async function login() {
  const email = document.getElementById('email').value;
  const password = document.getElementById('password').value;
  const role = document.getElementById('role').value;
  try {
    await firebase.auth().signInWithEmailAndPassword(email, password);
    location.href = `/${role}/index.html`;
  } catch (error) {
    alert(error.message);
  }
}
async function register() {
  const email = document.getElementById('email').value;
  const password = document.getElementById('password').value;
  const role = document.getElementById('role').value;
  try {
    const cred = await firebase.auth().createUserWithEmailAndPassword(email, password);
    await firebase.firestore().collection('users').doc(cred.user.uid).set({ email, role });
    alert('Registered! Now login.');
  } catch (error) {
    alert(error.message);
  }
}