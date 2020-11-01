# Trivia-game
The app built on React, is simple trivia game with 10 random questions in one round and multiple-choice answers. Only one answer option is available.
This app was built in aim to fulfill Tandem Apprenticeship Software Engineer challeng. About challenge find here:
https://madeintandem.com/about/apprenticeship-program/
The goal and requirements for the app are mentioned below.

I tried to use as few external dependencies and third-party libraries deliberately, thus UI and UX are built with pure language and logic. Building the app I was thinking about simplicity and reusability. So in the future this app could be used for different question themes and components would be reusable.

For better functionality and appearance I would add a timer to limit the round in the time frame, staying with Bootstrap or Material UI, multipage functionality with React Routes, state manipulation with React Hooks, more dynamic interface with modals. The data storage could be NoSQL database for possible usage with clouds. The page where different gamers could see and compare their results/progress would be necessary as well. 

Third-party dependence Enzyme was used for testing only. Also Enzyme requires React 16. version.

#### My challenges
My challenges were to figure out how to make appear the question only once per round and how to shuffle the answers. For the first challenge, I found a solution by fetching a random question index from a JSON array with data and pushing it after to the state to avoid repeating this question. Recursion is helpful in this case as checking the multi indexes are needed. The second challenge was fixed by mixing indexes of answer choices randomly 



## Goal
The goal is to create an application that displays trivia questions with multiple-choice answers to select from.

 ## Challenge requirements
A round of trivia has 10 Questions
All questions are multiple-choice questions
Gamer score does not need to update in real time
Results can update on form submit, button click, or any other interaction
The trivia data such as the questions, correct and incorrect answers are provided via a JSON file.

## User stories 
A user can view questions.
Questions with their multiple choice options must be displayed one at a time. Questions should not repeat in a round.
A user can select only 1 answer out of the 4 possible answers.
The correct answer must be revealed after a user has submitted their answer A user can see the score they received at the end of the round

## Final Product
!["Start page"](/images/startpage.png)
-------------------------------------
!["Question page"](/images/questionshown.png)
-------------------------------------
!["Question with answer shown page"](/images/answershown.png)
-------------------------------------
!["Score page"](/images/scoreshown.png)

## Dependencies

"@testing-library/react": "^11.1.0"
"@testing-library/user-event": "^12.1.10"
"react": "^16.14.0"
"react-dom": "^17.0.1"
"react-scripts": "4.0.0"
"web-vitals": "^0.2.4"
"@testing-library/jest-dom": "^5.11.5"
"enzyme": "^3.11.0"
"enzyme-adapter-react-16": "^1.15.5"
"react-test-renderer": "^17.0.1"

## Getting Started
- To start the app, please, clone repository in separeta folder
- Install all dependencies using the `npm install` command.
- Run the development web server using the `npm start` command.
- Open trivia-game in a browser with localhost:3000/
- To quit the app use ctrl + C

## Testing

Jest and Enzyme are used for testing the components. Tests are run in a Node environment and not in a real browser. For the app, I am testing the components rendering inside a container.
- To run the tests use `npm test` command
- To quit the test mode use ctrl + C
- If you get the App.test.js file, please, delete it as it could cause a testing error.

Enjoy the game:)
