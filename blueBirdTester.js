import YantraPackage from 'yantra-package'

const url = 'https://jsonplaceholder.typicode.com/posts/1';

const blueBirdTester= async ()=>{
	const urlData = await YantraPackage.getUserData(url);
	console.log(urlData,"here is the URL data")
}

export default blueBirdTester;