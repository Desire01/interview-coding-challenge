# Interview Coding Challenge

Step 1 of the Interview process. Follow the instructions below to complete this portion of the interview. 
Please note, although we do not set a time limit for this challenge, we recommend completing it as soon as possible as we evaluate candidates on a first come, first serve basis...

If you have any questions, please feel free to email support@thezig.io. We will do our best to clarify any issues you come across.


## Prerequisites:

1. A Text Editor - We recommend Visual Studio Code for the ClientSide code, its lightweight, powerful and Free! (https://code.visualstudio.com/)
2. An IDE Visual Studio Community for the ServerSide code, (https://visualstudio.microsoft.com/vs/community/)
3. You will need the .NET Core SDK in order to run the console application. (microsoft.com/net/core#windowscmd)
4. Git - For source control and committing your final solution to a new private repo (https://git-scm.com/downloads) 

    a. If you're not very familiar with git commands, here's a helpful cheatsheet (https://services.github.com/on-demand/downloads/github-git-cheat-sheet.pdf)
        
## Instructions

- Clone this repo locally using git clone
- cd into ./clientside/zig-movie-app directory for client-side code
- cd into ./serverside for web api server-side code
- Install dependencies using npm install (client side)
- Use Nuget Package Manager to restore packages (server-side)
- Obtain api key from https://developers.themoviedb.org
- Export api key environment variable: export API_KEY=${your_api_key}
- Start webpack using npm start
- Navigate to app in browser

Once the challenge is complete, please push the code up to a new private repo and grant access to the following email addresses for code review 

        - chilch  
        - manolivier93@gmail.com    
        - musukwamoshi@gmail.com    
        - mbmakayi@gmail.com    
        
***Then email jobs@thezig.io with a link to your private repo and a copy of your resume.***

## Requirements

1. Create a  homepage that will list popular movies from the API. 
2. Add a search bar that can search for movies by title.
3. The list should contain links for each movie title to navigate to an individual detail page with more info for each movie. 
4. On the detail page,display the poster image,the title should link to the movie's official site and a add a short description of the movie.
5. All the data should be retrieved from endpoints exposed via the server-side web api
6. Your API routes should be as follows:
    1. api/popular - Filters top 20 most popular movies (for homepage list of popular movies)
    2. api/search?query=birdbox - Returns movies where the title matches parts of the query string (for the search field)
    3. /api/movie/1145 - Returns a single movie by Movie Id (for use by the detail page)
7. Add Unit tests for the Controllers and Repos

## Hints

- HINT 1: Enable/Allow CORS (Cross-Origin Resource Sharing) on the server-side (https://docs.microsoft.com/en-us/aspnet/core/security/cors?view=aspnetcore-2.2)
- HINT 2: Use the DAL Project (Data Access Layer) on the server side to implement the repository pattern (https://docs.microsoft.com/en-us/previous-versions/msp-n-p/ff649690(v=pandp.10))


## Tech

The technologies used to build this app are: 
Client-Side - ReactJS, Webpack
Server-Side - .NET Core Web Api 

## Bonus Points
    
1. Using Singleton Pattern for the Http Client that access the Movie API (Server-Side)
2. Using Inversion of Control (aka Dependency Injection) throughout on the (Server-Side)
3. Using Redux to manage state (Client-Side)
4. Using React Router DOM for routing (Client-Side)
5. Use bootstrap for styling the website (Client-Side)
6. Add Swagger UI to document your API create a new API key and it will be listed under the heading "API Key (v3 auth)" 
 (Server-Side)

## Obtaining an API Token from www.themoviedb.org
1.	Create a profile on www.themoviedb.org
2.	Once you’re logged into your profile, click on your username/profile menu in the top right corner and select “Settings” 
3.	Under “Settings”, click on “API” in the left hand navigation
4.	Under the API Settings, you can


***If you have any questions, difficulties or would simply like to discuss the requirements, please do not hesitate to contact us at support@thezig.io. Asking questions for clarification or requesting help of any kind, is NOT AT ALL disqualifying, in fact we encourage it, it's called teamwork :-)*** 

We look forward to receiving your submission.

Good Luck

