import YantraPackage from 'yantra-package'

const sentence1 = 'hello my name is krishna';
const sentence2 = 'hello my name is dhakal';


const similarityTester= async ()=>{
	const similarity = await YantraPackage.similarityScore(sentence1,sentence2);
	console.log(`Similarity score is : ${similarity}`)
}

export default similarityTester;