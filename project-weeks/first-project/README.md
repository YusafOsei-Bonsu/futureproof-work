# in-blog-nito documentation

[Harry Pendered-Mazer](https://github.com/harry-pm)  
[Elizabeth Luong](https://github.com/elizabethluong/)
[Yusaf Osei-Bonsu](https://github.com/YusafOsei-Bonsu)
[Darnell Thomas](https://github.com/Darnell23)

## Contents

[Brief](#brief)
[User Stories](#user-stories)
[Methodologies and Processes](#methodologies-and-processes)
[Reviewing the Process](#reviewing-the-process)
[Reflections on the Project](#reflections-on-the-project)

## Brief

Create a community website where users can visit the website and anonymously post journal entries.

## User Stories

- As a user, I'd like to see other user's entries on a homepage.
- As a user, I'd like to be able to navigate to a page to post a journal entry annonymously.
- As a user, I'd like to see my entry added to the homepage along with other user's entries.
- As a user, I'd like to click on any entry on the homepage and navigate to another page to view and comment on that entry.
- As a user, I'd like to be able to add a gif to my journal entry.
- As a user, I'd like to be able to react to other users' posts with an emoji.
- As a user, I'd like to see a word countdown for my journal entry.

## Methodologies and Processes

- Standups every morning at 9.15AM documenting everything to help with the debrief.
- Each team member:
  - Go through what was achieved the day before.
  - What they're looking to achieve in the day ahead.
  - if there's any blockers.
- Pair programming with 45 minute + 5 minute breaks using VS Code.

### Technologies

- Node.js
- Express.js
- EJS
- HTML
- CSS
- JavaScript
- Jquery
- Git & Github
- Nodemon

## Reviewing the Process

We tried to use an agile methodology and did brief 'stand-ups' at the start of each day.
After some issues with git and github, we refined the user stories and made sure each pair was working on different features/files.

## Reflections on the Project

We started off with getting the server, folders and the markup up quickly but ran into some problems reading and writing into our JSON file.

We also had some issues making the API call to Giphy but once we found an example of how to add the parameters, we made a successfull call and logged the results to the console and passed the images using Jquery to a div.

Once we got the hang of reading writing in our JSON files and access the objects it didn't take too long to implement the remaining functionalites.

On reflection we should have finished the minimum viable product before dealing with the gifs and emojis.
We could have been more specific in our user stories at the beginning. In addition, we could've performed
vigorous testing on the web application after completion. For example, nearer to the end, we discovered that
the emoji values were disfiguring the homepage's appearence; therefore, in order to resolve this, we could have altered the margin/padding spacing of the emojis.
