import './App.css';
import Sample from './Sample';
import Character from './Character';
import About from './About';
import Character1 from './Character1';
function MyButton() {
  return (
    <button>
      Enter the react👍
    </button>
  );
}
function Hello() {
  return(<h1>hello</h1>);

}

 function MyApp() {
  return (
    <div>
      <h1>Anime Name: Haikyu!!🏐</h1>
      {/* <MyButton />
      <Hello />
      <Sample/>
      <MyButton /> */}
      <Character/>
      <About/>
      
      <Character1/>
      <About/>





    </div>
  );
}
export default MyApp;
