// 專題資料庫 (可自行新增或修改)
const projectsData = {
  project1: {
    title: "智慧影像辨識與分析系統",
    desc: "這是大學四年級的畢業專題。利用 Python YOLOv8 進行目標檢測，並以 React 搭配 Flask 架構系統。解決了傳統影像監控數據無法實時統計與分析的問題。",
    github: "https://github.com"
  },
  project2: {
    title: "全端電商平台網站",
    desc: "大三網頁程式設計課程專案。具備完整的 RWD 設計，前端使用 HTML/CSS/JavaScript，後端使用 Node.js 與 Express，並串接 MongoDB 資料庫實作商品管理與訂單流。",
    github: "https://github.com"
  },
  project3: {
    title: "團隊協作與任務管理 App",
    desc: "大三軟體工程專題。採用 Flutter 進行跨平台開發，設計仿 Trello 的 Kanban 看板，支援即時通知與分工規劃，獲得課程最佳專案獎。",
    github: "https://github.com"
  }
};

// 打開詳細資料彈窗
function openModal(projectId) {
  const modal = document.getElementById("modal");
  const data = projectsData[projectId];

  if (data) {
    document.getElementById("modal-title").innerText = data.title;
    document.getElementById("modal-desc").innerText = data.desc;
    document.getElementById("modal-github").href = data.github;
    
    modal.style.display = "flex";
  }
}

// 關閉彈窗
function closeModal() {
  const modal = document.getElementById("modal");
  modal.style.display = "none";
}

// 點擊彈窗外部時自動關閉
window.onclick = function(event) {
  const modal = document.getElementById("modal");
  if (event.target === modal) {
    modal.style.display = "none";
  }
};