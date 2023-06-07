import { useState } from "react";
import styles from "./App.module.less";
import { Education, Experience, Header, Skill, Work } from "./components";
import data from "./params.json";

function App() {

  return (
    <div className={styles.app}>
      <Header />
      <div className={styles.appContent}>
        <Skill />
        <Experience />
        <Work />
        <Education />
      </div>
    </div>
  );
}

export default App;
