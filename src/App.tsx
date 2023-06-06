import { useState } from "react";
import styles from "./App.module.less";
import { Header } from "./components";
import data from "./params.json";

function App() {
  const [count, setCount] = useState(0);

  // const inputFilePath = 'params.json';
  // const paramsString = fs.readFileSync(inputFilePath, 'utf8');
  // const params = JSON.parse(paramsString);
  const params = {
    g_unKown: {
      Attributes: {
        alarmnum: 10,
        analysis: false,
        color: "#ff6600",
        id: 8000,
      },
    },
    主要缺陷: {
      Attributes: {
        color: "#aa0000",
        enable: true,
        algorithm_id: 1913,
        id: 1300,
        show: "大型缺陷",
      },
      Level_0: {
        Attributes: {
          color: "#bb0000",
          enable: true,
          algorithm_id: 1913,
          id: 1301,
          show: "可见",
        },
      },
      Level_1: {
        Attributes: {
          color: "#aa0010",
          enable: true,
          algorithm_id: 1413,
          id: 1302,
          show: "不可见",
        },
      },
      min: {
        show: "最小像素数",
        unit: "个",
        value: 25,
      },
    },
    颜色缺陷: {
      Attributes: {
        color: "#aa0010",
        enable: true,
        algorithm_id: 913,
        id: 1200,
        show: "白点",
      },
      Level_5: {
        Level_6: {
          Attributes: {
            id: 3636,
            show: "aimyon",
          },
        },
      },
      Level_0: {
        Attributes: {
          color: "#aa0010",
          enable: true,
          algorithm_id: 1413,
          id: 1201,
          show: "微小白点",
        },
      },
      Level_1: {
        Attributes: {
          color: "#aa0010",
          enable: true,
          algorithm_id: 1413,
          id: 1202,
          show: "小白点",
        },
      },
      Level_2: {
        Attributes: {
          color: "#aa0010",
          enable: true,
          algorithm_id: 1413,
          id: 1203,
          show: "中白点",
        },
      },
      Level_3: {
        Attributes: {
          color: "#aa0010",
          enable: true,
          algorithm_id: 63,
          id: 1204,
          show: "大白点",
        },
      },
      Level_4: {
        Attributes: {
          color: "#aa0010",
          enable: true,
          algorithm_id: 213,
          id: 1205,
          show: "超大白点",
        },
      },
    },
    纹路: {
      Attributes: {
        color: "#aa0010",
        enable: true,
        algorithm_id: 1413,
        id: 1700,
        show: "划痕/划伤",
      },
      Level_0: {
        Attributes: {
          color: "#aa0010",
          enable: true,
          algorithm_id: 23,
          id: 1701,
          show: "条纹",
        },
      },
      ashow: {
        max: 50,
        show: "横条纹灵敏度",
        unit: "等级",
        value: 10,
      },
      minLineHeight: {
        Attributes: {
          max: 50,
          show: "最小条纹长度",
          unit: "等级",
          value: 10,
        },
      },
      verLineFliterGradient: {
        max: 50,
        show: "竖条纹灵敏度",
        unit: "等级",
        value: 0,
      },
    },
    webconfig: {
      Attributes: {
        host: "192.168.1.1",
        port: "8008",
      },
    },
  };


  const targetString = JSON.stringify(target.flat(Infinity), null);
  console.log(targetString);

  return (
    <div className={styles.app}>
      <Header />
      <div>职业技能</div>
      <div>项目经历</div>
      <div>实习经历</div>
      <div>教育经历</div>
    </div>
  );
}

export default App;
