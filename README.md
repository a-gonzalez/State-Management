# State-Management
State Management For 2D Games

A shout-out to Frank's Laboratory - El Mago

State design pattern is the most powerful technique a beginner can learn. It gives us complete control over our project. This is how I implement it with plain vanilla JavaScript and object oriented programming.

We can apply state pattern to an individual character to give it a set of abilities and special moves.

We can also apply it to the entire game, split it into levels and give each level different environment and other unique features. 

State design pattern focuses on separating code for each state in it's own code block, that code block could be a special attack or individual game level for example.

In my implementation we will also include elements of finite state machine, which is more about the relationships between the individual states and how they transition into each other. We will restrict which states the alien is able to switch into and how it reacts to user inputs, depending on which state it is currently in.
