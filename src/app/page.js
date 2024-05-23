import Animations from "./components/Animations/Animations";
import Intro from "./components/Intro/Intro";
import Sec2 from "./components/Sec2/Sec2";
import Sec3 from "./components/Sec3/Sec3";
import Welcome from "./components/Welcome/Welcome";

export default function Home() {
  return (
    <main>
      <Intro />
      <Animations />
      <Welcome />
      <Sec2 />
      <Sec3 />
    </main>
  );
}
