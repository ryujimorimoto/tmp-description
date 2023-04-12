const taskList = document.querySelector('#task-list'); // ul要素を取得

function addTask() {
  const newTaskInput = document.querySelector('#new-task'); // input要素を取得
  const taskName = newTaskInput.value.trim(); // 入力されたタスク名を取得
  if (taskName !== '') {
    const newTask = document.createElement('li'); // li要素を作成
    const createId = new Date().getTime();
    newTask.innerHTML = `<input type="checkbox" id="${createId}"><label for="${createId}">${taskName}</label>`; // li要素に内部HTMLを設定
    taskList.appendChild(newTask); // ul要素にli要素を追加
    newTaskInput.value = ''; // 入力欄をクリア
  }
}

function toggleTaskStatus(event) {
  const checkbox = event.target;
  const taskNameSpan = checkbox.nextSibling; // checkbox要素の次の要素（span要素）を取得
  if (checkbox.checked) {
    taskNameSpan.classList.add('completed'); // span要素にcompletedクラスを追加
  } else {
    taskNameSpan.classList.remove('completed'); // span要素からcompletedクラスを削除
  }
}

const addTaskButton = document.querySelector('#add-task'); // 追加ボタンを取得
addTaskButton.addEventListener('click', addTask); // 追加ボタンのクリックイベントを設定
