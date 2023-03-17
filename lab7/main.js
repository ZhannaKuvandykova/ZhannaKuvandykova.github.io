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
kek.innerHTML = 'In this task you have to reproduce this HTML page as is using <b>only</b> JavaScript. The task will be evaluated on the basis of the following DOM manipulation techniques:'

div1.appendChild(kek);

const list1 = document.createElement('ul');

div1.appendChild(list1);

const l1 = document.createElement('li');
l1.innerHTML = 'find elements in the DOM <b>(5 points);</b>'
l1.style.color ='green';

list1.appendChild(l1);

const l2 = document.createElement('li');
l2.innerHTML = 'create/add/remove elements <b>(5 points);</b>'
l2.style.color ='purple';

list1.appendChild(l2);


const l3 = document.createElement('li');
l3.innerHTML = 'change content of the elements <b>(5 points);</b>'
l3.style.color ='green';

list1.appendChild(l3);

const l4 = document.createElement('li');
l4.innerHTML = 'change styles of the elements <b>(5 points);</b>'
l4.style.color ='purple';

list1.appendChild(l4);

const l5 = document.createElement('li');
l5.innerHTML = 'change attributes of the elements <b>(5 points);</b>'
l5.style.color ='green';

list1.appendChild(l5);

const l6 = document.createElement('li');
l6.innerHTML = 'change classes of the elements <b>(5 points).</b>'
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
l1_1.innerHTML = 'Create a new repository on Github, named <b>lab7 (1 point).</b>'
l1_1.style.color ='green';

list2.appendChild(l1_1);


const l1_2 = document.createElement('li');
l1_2.textContent = 'Clone this repository to your local machine and work inside it.'
l1_2.style.color ='purple';

list2.appendChild(l1_2);

const l1_3 = document.createElement('li');
l1_3.innerHTML = 'Create a new HTML file, called <b>index.html</b>, which has only one &lt;h1&gt; tag with &quot;Hello, World!&quot; message <b>(1 point).</b>'
l1_3.style.color ='green';

list2.appendChild(l1_3);

const l1_4 = document.createElement('li');
l1_4.innerHTML = 'Create a new JavaScript file, called <b>main.js</b>, which must contain your program (assignment) described above <b>(1 point).</b>'
l1_4.style.color ='purple';

list2.appendChild(l1_4);

const l1_5 = document.createElement('li');
l1_5.innerHTML = 'Link this <b>main.js</b> file to your <b>index.html</b> file (Note: place your script at the end of the <b>body</b> section).'
l1_5.style.color ='green';

list2.appendChild(l1_5);

const l1_6 = document.createElement('li');
l1_6.innerHTML = 'Write a JavaScript program in <b>main.js</b> to make your <b>index.html</b> look identical to this HTML file <b>(5 points).</b>'
l1_6.style.color ='purple';

list2.appendChild(l1_6);

const l1_7 = document.createElement('li');
l1_7.innerHTML = 'After you finish your work, submit it to the Github <b>(2 points).</b>'
l1_7.style.color ='green';

list2.appendChild(l1_7);
