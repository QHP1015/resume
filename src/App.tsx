import { useState } from "react";
import styles from "./App.module.less";
import { Education, Experience, Header, Skill, Work } from "./components";
import data from "./params.json";
import jsPDF from "jspdf";
import html2canvas from "html2canvas";
import html2pdf from "html2pdf.js";

function App() {
  // const handlePrint = () => {
  //   setTimeout(() => {
  //     const mainElement = document.querySelector("main");

  //     html2canvas(mainElement).then((canvas) => {
  //       const imgData = canvas.toDataURL("image/png");
  //       const doc = new jsPDF();

  //       const imgProps = doc.getImageProperties(imgData);
  //       const pdfWidth = doc.internal.pageSize.getWidth();
  //       const pdfHeight = (imgProps.height * pdfWidth) / imgProps.width;

  //       doc.addImage(imgData, "PNG", 0, 0, pdfWidth, pdfHeight);
  //       doc.save("example.pdf");
  //     });
  //   }, 1000); // 延迟1秒
  // };

  const opt = {
    margin: 1,
    filename: "myfile.pdf",
    image: { type: "jpeg", quality: 0.98 },
    html2canvas: { scale: 1 },
  };
  return (
    <>
      {/* <button
        onClick={() => {
          setTimeout(() => {
            handlePrint();
          }, 1000);
        }}
      >
        打印
      </button> */}
      {/* <button
        onClick={() => {
          const element = document.querySelector("main"); // 要转换的 HTML 元素
          // 设置导出选项
          const options = {
            filename: "converted.pdf",
            html2canvas: {
              scale: 1, // 禁用缩放
            },
            jsPDF: {
              format: "a4", // 设置页面尺寸为 A4
            },
          };
          html2pdf().set(options).from(element).save(); // 执行转换并保存为 PDF 文件
        }}
      >
        打印
      </button> */}
      <button onClick={() => window.print()}>打印</button>
      <main className={styles.app}>
        <Header />
        <div className={styles.appContent}>
          <Skill />
          <Experience />
          <Work />
          <Education />
        </div>
      </main>
    </>
  );
}

export default App;
