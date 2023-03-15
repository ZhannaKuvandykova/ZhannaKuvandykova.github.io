const h1 = document.querySelector("h1");
h1.textContent = "Lab7 Assignment";
h1.style.color = "blue";
h1.setAttribute("class", "Title");

const hr1 = document.createElement('hr');
h1.after(hr1);

var div1 = document.createElement('div');

const body = document.querySelector("body");
body.appendChild(div1);

const task = document.createElement('h2');
task.textContent = 'Task';
task.style.color = 'red';

div1.appendChild(task);

const kek = document.createElement('p');
kek.textContent = 'In this task you have to reproduce this HTML page as is using only JavaScript. The task will be evaluated on the basis of the following DOM manipulation techniques:'

div1.appendChild(kek);

const list1 = document.createElement('ul');

div1.appendChild(list1);

const l1 = document.createElement('li');
l1.textContent = 'find elements in the DOM (5 points);'
l1.style.color ='green';

list1.appendChild(l1);

const l2 = document.createElement('li');
l2.textContent = 'create/add/remove elements (5 points);'
l2.style.color ='purple';

list1.appendChild(l2);


const l3 = document.createElement('li');
l3.textContent = 'change content of the elements (5 points);'
l3.style.color ='green';

list1.appendChild(l3);

const l4 = document.createElement('li');
l4.textContent = 'change styles of the elements (5 points);'
l4.style.color ='purple';

list1.appendChild(l4);

const l5 = document.createElement('li');
l5.textContent = 'change attributes of the elements (5 points);'
l5.style.color ='green';

list1.appendChild(l5);

const l6 = document.createElement('li');
l6.textContent = 'change classes of the elements (5 points).'
l6.style.color ='purple';

list1.appendChild(l6);

const hr2 = document.createElement('hr');
list1.after(hr2);

var div2 = document.createElement('div');

body.appendChild(div2);

const submission = document.createElement('h2');
submission.textContent = 'Submission';
submission.style.color = 'red';

div2.appendChild(submission);

const kek2 = document.createElement('p');
kek2.textContent = 'To submit your work, follow these instructions:'

div2.appendChild(kek2);

const list2 = document.createElement('ul');

div2.appendChild(list2);

const l1_1 = document.createElement('li');
l1_1.textContent = 'Create a new repository on Github, named lab7 (1 point).'
l1_1.style.color ='green';

list2.appendChild(l1_1);


const l1_2 = document.createElement('li');
l1_2.textContent = 'Clone this repository to your local machine and work inside it.'
l1_2.style.color ='purple';

list2.appendChild(l1_2);

const l1_3 = document.createElement('li');
l1_3.textContent = 'Create a new HTML file, called index.html, which has only one <h1> tag with "Hello, World!" message (1 point).'
l1_3.style.color ='green';

list2.appendChild(l1_3);

const l1_4 = document.createElement('li');
l1_4.textContent = 'Create a new JavaScript file, called main.js, which must contain your program (assignment) described above (1 point).'
l1_4.style.color ='purple';

list2.appendChild(l1_4);

const l1_5 = document.createElement('li');
l1_5.textContent = 'Link this main.js file to your index.html file (Note: place your script at the end of the body section).'
l1_5.style.color ='green';

list2.appendChild(l1_5);

const l1_6 = document.createElement('li');
l1_6.textContent = 'Write a JavaScript program in main.js to make your index.html look identical to this HTML file (5 points).'
l1_6.style.color ='purple';

list2.appendChild(l1_6);

const l1_7 = document.createElement('li');
l1_7.textContent = 'After you finish your work, submit it to the Github (2 points).'
l1_7.style.color ='green';

list2.appendChild(l1_7);
