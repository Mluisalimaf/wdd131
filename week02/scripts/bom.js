
const input = document.querySelector("input");
const button = document.querySelector("button");
const list = document.querySelector("________");

button.addEventListener('click', function () {
    if (input.value.trim() !== '') {
      const li = document.createElement('li');
      const deleteButton = document.createElement('button');
  
      li.textContent = input.value;
      deleteButton.textContent = 'X';
  
      li.append(deleteButton);
      list.append(li);
  
      deleteButton.addEventListener('click', function () {
        list.removeChild(li);
        input.focus();
      });

      input.value = '';
    }
  
    input.focus();
  });