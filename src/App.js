

import Haider from './Components/Haider';
import Nav from './Components/Nav';
import Course  from './Components/Course';
import Goals  from './Components/Goals';
import WorkFlow  from './Components/WorkFlow';
import LiveTutoring  from './Components/LiveTutoring';
import Skill from './Components/Skill';
import OurAchievement from './Components/OurAchievement';

function App() {
  return (
    <div className="App">
      <Nav />
      <Haider />
      <Course />
      <Goals />
      <WorkFlow />
      <LiveTutoring />
      <Skill />
      <OurAchievement />
    </div>
  );
}

export default App;
