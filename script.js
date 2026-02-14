document.body.innerHTML = `
  <div id="bsod" style="
    background:#0078D7;
    color:white;
    width:100vw;
    height:100vh;
    position:fixed;
    top:0;
    left:0;
    font-family:Segoe UI, sans-serif;
    padding:40px;
    box-sizing:border-box;
    font-size:24px;
    z-index:999999;
  ">
    <div style="font-size:80px;">:(</div>
    <p>Your PC ran into a problem and needs to restart.</p>
    <p>We're just collecting some error info, and then we'll restart for you.</p>


    <p id="percent" style="margin-top:40px; font-size:32px;">0% complete</p>


    <div style="
      margin-top:20px;
      width:60%;
      height:20px;
      background:rgba(255,255,255,0.3);
      border-radius:4px;
      overflow:hidden;
    ">
      <div id="bar" style="
        width:0%;
        height:100%;
        background:white;
        transition:width 0.4s ease;
      "></div>
    </div>


    <p style="margin-top:60px; font-size:18px;">
      For more information about this issue and possible fixes, visit https://fake.error
    </p>
  </div>
`;


let p = 0;


// 2分(120秒)で100% → 平均 1.2秒で1%
// ただしランダム停止・加速を入れるので平均値だけ意識
function updateProgress() {
  if (p >= 100) {
    document.getElementById("percent").textContent = "100% complete";
    document.getElementById("bar").style.width = "100%";


    setTimeout(() => {
      alert("ドッキリ成功！\n画面を元に戻します(^-^)");
      location.reload();
    }, 1000);
    return;
  }


  // ランダムで進む量（0〜3%）
  let step = Math.random() * 3;


  // たまに完全停止（10%の確率）
  if (Math.random() < 0.1) {
    step = 0;
  }


  // たまに一気に進む（5%の確率）
  if (Math.random() < 0.05) {
    step = Math.random() * 8 + 3; // 3〜11%
  }


  p = Math.min(100, p + step);


  document.getElementById("percent").textContent = Math.floor(p) + "% complete";
  document.getElementById("bar").style.width = p + "%";


  // 次の更新までの時間（ランダム）
  // 300〜2000ms → たまに止まってるように見える
  let delay = Math.random() * 1700 + 300;


  setTimeout(updateProgress, delay);
}


// スタート
updateProgress();