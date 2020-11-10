# _A Game: Pig Dice_

### By _**Callie Stump, Constantine Yakubovski, and Tyler Sinks, Garrett P. Brown**_

### _This Project's Reason for Being and Description_
_This project functions as an attempt to make a playable version of the game called Pig Dice. The creators hope that it will also be a place to implement chaining methods and overall business logic using constructor functions and the prototype chain. Yay, JavaScript!_
* Created November 4 and 5, 2020
* Last major revision November 5, 2020
* Hopes to flex some just-learned skills touched on in the fourth week of Epicodus's October 2020 cohort:
* a cohort which runs from October 12, 2020 through April 30, 2021
* the Epicodus program includes the following modules *(with start dates):*
![A portion of a screenshot from the Epicodus website describing my particular cohort](img/EpicodusModules.png)
* initially created in response to a project prompt to be ginned up completely solo and completely within a nine hour window on **"created date"**

## Setup/Installation Requirements

**Software that this project requires:**
1. a web browser
2. a plain text editor, such as `Basic Text Editor` available for Windows devices, or developer-go-to text editors such as Sublime Text, Atom, VIM, or Visual Studio Code
3. a command line (or "Terminal.app" on a Mac) program for entering git prompts as they are offered/suggested to be used verbatim from this README.md
4. No additional code libraries or dependencies need to be installed locally for you to experience this project in all its splendor.
    4a. Perhaps one should make sure that git is installed on one's machine, so as to be able to follow the git prompts for the command line interface below

**Most straightforward way to just see the rendered page:**
* [click this link](https://sinkstyt.github.io/portfolio-index/index.html) to load the site as it is currently hosted by GitHub Pages
    * _Should this link fail you in any way, you could alternatively copy and paste the full address below into a web browser's address bar:_
    #### https://sinkstyt.github.io/portfolio-index/index.html ####

## To Install the Whole Thing Locally

**Let's Call This: "To Take the `git` Route"**
1. Launch your terminal application (Terminal.app comes installed as default in the Mac OS since... I'm not sure when.)
2. Navigate to (or even first _create_) the directory to which you would like to copy the project's files to your machine. _AN EXAMPLE:_
    2a. `$  pwd`
    * > `{Users}\{YOUR_USER_NAME}\`
    2b. `$  mkdir thisPersonsPortfolioPage`
    2c. `$  cd thisPersonsPortfolioPage`
    * > `{Users}\{YOUR_USER_NAME}\thisPersonsPortfolioPage`
3. Now that you are in the destination directory, pull the files down to your machine from this README's GitHub repository. A suggested series of command line prompts follows by which one might do this:
    3a. `$~  pwd`
    * > `{Users}\{YOUR_USER_NAME}\thisPersonsPortfolioPage`
    3b. `$~  git clone {the_URL_of_my_GitHub_repository_pasted_from_your_clipboard}`[^bignote]
        _Something like this will then be printed to your console:_
        > Cloning into 'live-share'...
        > remote: Enumerating objects: 72, done.
        > remote: Counting objects: 100% (72/72), done.
        > remote: Compressing objects: 100% (58/58), done.
        > remote: Total 6989 (delta 24), reused 39 (delta 14), pack-reused 6917
        > Receiving objects: 100% (6989/6989), 51.25 MiB | 9.65 MiB/s, done.
        > Resolving deltas: 100% (4274/4274), done.
4. Now you've got somebody's project (mine, in this case) in that local directory. Happy perusing!
5. **A perusal suggestion** Use that command line, now that you're in the root folder for this project anyway, to launch your editor of choice (example, Visual Studio Code):
    `code .`
    > this should launch a new window in VS Code open to the root folder of the directory. Of course some unique system or user profile settings may be pointint you to an error message at this point. For help on this, _Stick with it! We're almost there!_ please check out the documentation appropriate to this error/your text editor of choice's command prompts.

## Known Bugs

_I am sure that some of the hypertext links will break within days if not hours_
_Other than that, I just have reservations about how a few things are spaced around the page..._

## Support and Contact Details

_Please let me know if you would like to share suggestions for the page. I can be most easily reached by email._
_tyler.sinks@gmail.com_

## Technologies Used

_html_
_css_
_and a few drops of Bootstrap for styling_

## Specs

Describe: player()

Test: "It will hold this turn's score."
Expect: player(thisRoll).toEqual()

Test: "It will hold this player's full game score."
Expect: player1.overallScore.toEqual()



### License

*MIT 2.0*

Copyright (c) 2020 **_Tyler Sinks_**

[^bignote]: If you're having trouble finding that nice green "Code" button:
    * a .png of it at time of README writing is this: ![the green Code button seen near the top right of any repository hosted on GitHub](img/greenCodeButton.png)
    * Alternatively &mdash; should you not be able to use this button to load this project's URL to your clipboard &mdash; I give the URL to you here as well:
    https://github.com/sinkstyt/portfolio-index.git
