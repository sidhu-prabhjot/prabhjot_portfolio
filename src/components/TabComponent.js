import React, { useState } from "react";

import styles from "./styles.module.css";

import {
  Terminal,
  Code,
  Database,
  FileText,
  Monitor,
  Smartphone,
  CheckSquare,
  GitBranch,
  Cloud,
  Table,
} from "react-feather";

const TabComponent = () => {
  const [activeTab, setActiveTab] = useState(0);
  const [color, setColor] = useState("#121212");

  const handleTabClick = (index, tab) => {
    setActiveTab(index);
    setColor(tab.color);
  };

  const tab1Content = (
    <div className={styles.contentDataContainer}>
      <div className={styles.contentLeftColumn}>
        <div className={styles.iconTextContainer}>
          <Terminal className={styles.featherIcon} />
          <p className={styles.textContent}>Java</p>
        </div>
        <div className={styles.iconTextContainer}>
          <Terminal className={styles.featherIcon} />
          <p className={styles.textContent}>JavaScript</p>
        </div>
        <div className={styles.iconTextContainer}>
          <Code className={styles.featherIcon} />
          <p className={styles.textContent}>HTML5</p>
        </div>
        <div className={styles.iconTextContainer}>
          <Code className={styles.featherIcon} />
          <p className={styles.textContent}>CSS3</p>
        </div>
        <div className={styles.iconTextContainer}>
          <Terminal className={styles.featherIcon} />
          <p className={styles.textContent}>C</p>
        </div>
      </div>
      <div className={styles.contentRightColumn}>
        <div className={styles.iconTextContainer}>
          <FileText className={styles.featherIcon} />
          <p className={styles.textContent}>Python 3</p>
        </div>
        <div className={styles.iconTextContainer}>
          <Database className={styles.featherIcon} />
          <p className={styles.textContent}>SQL</p>
        </div>
        <div className={styles.iconTextContainer}>
          <Terminal className={styles.featherIcon} />
          <p className={styles.textContent}>TypeScript</p>
        </div>
        <div className={styles.iconTextContainer}>
          <Database className={styles.featherIcon} />
          <p className={styles.textContent}>JSON</p>
        </div>
      </div>
    </div>
  );
  const tab2Content = (
    <div className={styles.contentDataContainer}>
      <div className={styles.contentLeftColumn}>
        <div className={styles.iconTextContainer}>
          <Monitor className={styles.featherIcon} />
          <p className={styles.textContent}>React</p>
        </div>
        <div className={styles.iconTextContainer}>
          <Smartphone className={styles.featherIcon} />
          <p className={styles.textContent}>React Native</p>
        </div>
        <div className={styles.iconTextContainer}>
          <Code className={styles.featherIcon} />
          <p className={styles.textContent}>jQuery</p>
        </div>
        <div className={styles.iconTextContainer}>
          <Code className={styles.featherIcon} />
          <p className={styles.textContent}>Node</p>
        </div>
      </div>
      <div className={styles.contentRightColumn}>
        <div className={styles.iconTextContainer}>
          <CheckSquare className={styles.featherIcon} />
          <p className={styles.textContent}>jUnit</p>
        </div>
        <div className={styles.iconTextContainer}>
          <Code className={styles.featherIcon} />
          <p className={styles.textContent}>Media Queries</p>
        </div>
        <div className={styles.iconTextContainer}>
          <Monitor className={styles.featherIcon} />
          <p className={styles.textContent}>Java Swing</p>
        </div>
      </div>
    </div>
  );
  const tab3Content = (
    <div className={styles.contentDataContainer}>
      <div className={styles.contentLeftColumn}>
        <div className={styles.iconTextContainer}>
          <GitBranch className={styles.featherIcon} />
          <p className={styles.textContent}>Git</p>
        </div>
        <div className={styles.listedTextContainer}>
          <div className={styles.iconTextContainer}>
            <Cloud className={styles.featherIcon} />
            <p className={styles.textContent}>Firebase</p>
          </div>
          <div className={styles.textListContainer}>
            <p className={styles.listTextContent}>Authentication</p>
            <p className={styles.listTextContent}>Firestore</p>
            <p className={styles.listTextContent}>Cloud Functions</p>
          </div>
        </div>
      </div>
      <div className={styles.contentRightColumn}>
        <div className={styles.iconTextContainer}>
          <Table className={styles.featherIcon} />
          <p className={styles.textContent}>SQLite</p>
        </div>
        <div className={styles.listedTextContainer}>
          <div className={styles.iconTextContainer}>
            <Cloud className={styles.featherIcon} />
            <p className={styles.textContent}>AWS</p>
          </div>
          <div className={styles.textListContainer}>
            <p className={styles.listTextContent}>Amplify</p>
            <p className={styles.listTextContent}>DynamoDB</p>
          </div>
        </div>
      </div>
    </div>
  );

  const tabData = [
    { label: "Languages and Markups", content: tab1Content, color: "#121212" },
    {
      label: "Frameworks and Libraries",
      content: tab2Content,
      color: "#f05454",
    },
    { label: "Developer Tools", content: tab3Content, color: "#30475E" },
  ];

  return (
    <div className={styles.tabContainer}>
      <div className={styles.tabs}>
        {tabData.map((tab, index) => (
          <div
            key={index}
            className={`tab ${activeTab === index ? "active" : ""} ${
              styles.tab
            }`}
            onClick={() => handleTabClick(index, tab)}
          >
            <p>{tab.label}</p>
          </div>
        ))}
      </div>
      <div className={styles.tabContent}>
        <div
          className={styles.tabContentContainer}
          style={{ backgroundColor: color }}
        >
          {tabData[activeTab].content}
        </div>
      </div>
    </div>
  );
};

export default TabComponent;
