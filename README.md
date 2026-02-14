# Fake BSOD Prank (ブラウザで動くブルースクリーンドッキリ)

このプロジェクトは、ブラウザ上に Windows 風のブルースクリーン（BSOD）を再現するドッキリ用スクリプトです。  
ランダムな速度で進む進捗バーや停止演出により、本物のエラー画面のように見えるよう設計されています。

---

## 📌 特徴

- 画面全体を覆う偽BSOD表示  
- ランダムな進捗速度  
- たまに停止したり、一気に進んだりするリアルな挙動  
- 100% 到達後にアラート → 自動リロード  
- 外部ライブラリ不要  
- どのブラウザでも動作

---

## 🖥️ 動作内容

- 青い画面とエラーメッセージが表示される  
- 進捗バーとパーセンテージが徐々に増える  
- 10% の確率で停止  
- 5% の確率で急加速  
- 100% になるとアラートが出てページがリロードされる

---

## 📂 コード概要

### 主な要素
- `#bsod` — 全画面オーバーレイ  
- `#percent` — 進捗パーセンテージ  
- `#bar` — 進捗バー  

### ロジック
- `updateProgress()` が進捗を更新  
- ランダムな進捗量とランダムな遅延  
- 300〜2000ms のランダム間隔で更新  
- 100% 到達後に終了処理

---

## 🚀 使い方

1. HTML ファイルを作成  
2. `<script>` タグ内にコードを貼り付け  
3. ブラウザで開く  
4. 自動的に偽BSODが開始

---

## ⚠️ 注意

これは **無害なジョーク用途** のみで使用してください。  
誤解を招く状況では使用しないでください。

---

## 📜 ライセンス

自由に使用・改変・再配布できます。

---

# English Version

# Fake BSOD Prank (Browser Blue Screen)

This project displays a fake Windows-style Blue Screen of Death (BSOD) in the browser.  
The progress bar increases with random delays, creating a realistic system error simulation.

---

## 📌 Features

- Fullscreen fake BSOD overlay  
- Randomized progress speed  
- Occasional pauses and sudden jumps  
- Auto-reload after reaching 100%  
- No external libraries  
- Works on any modern browser

---

## 🖥️ Behavior

- Blue error screen appears  
- Progress percentage increases gradually  
- 10% chance of stopping temporarily  
- 5% chance of jumping forward  
- At 100%, an alert appears and the page reloads

---

## 📂 Code Overview

### Main Elements
- `#bsod` — Fullscreen overlay  
- `#percent` — Progress text  
- `#bar` — Progress bar  

### Logic
- `updateProgress()` updates the progress  
- Random step size and delay  
- 300–2000ms random interval  
- Ends with alert + reload

---

## 🚀 How to Use

1. Create an HTML file  
2. Paste the script inside a `<script>` tag  
3. Open it in a browser  
4. The fake BSOD starts automatically

---

## ⚠️ Warning

Use this **only for harmless pranks**.  
Do not use it in situations where it may cause panic or misunderstanding.

---

## 📜 License

Free to use, modify, and distribute.
