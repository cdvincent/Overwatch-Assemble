<h1>Overwatch Assemble!</h1>

<h4>Link</h4>
<p>https://github.com/cdvincent/Overwatch-Assemble</p>

<h4>Technology used</h4>
<ul>
    <li>React</li>
    <li>CSS</li>
    <li>Bootstrap</li>
    <li>Javascript</li>
</ul>

<h2>Description</h2>
<p>Overwatch Assemble is a memory game in which the user selects members from the Overwatch Video Game. The user must select each character once to assemble the whole team. If the user repeats a selection, they will lose the match. Wins and Losses will be tracked at the top of the screen, along with the users best score during the current session.</p>

<h2>Development</h2>
<p>I used React and Bootstrap for the front-end, using the card component for each character and rendering them with the map method. The map method accesses the Choices.js file, which holds an array of objects (heroes) comprised of the heroes id, name, and image url. The user selected characters id's are stored in an array in order to keep track of which heroes have not been selected yet.</p>

<p>I used state in order to track the users score, incrementing their score if the selected id does not match one that is stored in the chosen array. An If statement determines if the users score is high enough to win, and displays an updated message at the top of the screen if the condition is met. The users high score is always updated when it is higher than their previous high score by incrementing state.</p>