# CWEBot

[![CircleCI](https://circleci.com/gh/abdel/cwebot/tree/master.svg?style=svg&circle-token=af646a94b249576e528cf63b0acf99b9a494f0fd)](https://circleci.com/gh/abdel/cwebot/tree/master)

## Setup

1. Clone the repository
2. Install the NodeJS dependencies using `npm install`
3. Configure the settings for IRC and MongoDB
4. Start the bot using `npm start`


## Contributing Guide

### Requirements:
- Git
- Terminal application
- Text editor or IDE ([VS Code](https://code.visualstudio.com), [SublimeText](https://www.sublimetext.com))

### Environment Setup

**Note:** You'll need to add your personal SSH key to GitHub to pull and push to repositories you have access to. Follow the documentation provided by GitHub, https://help.github.com/articles/connecting-to-github-with-ssh/

- Open Terminal application
- Change to a directory where you want to store the project e.g. `cd ~/code`. You can also make a new directory if it doesn't exist using `mkdir ~/code`
- Clone the Git repository using `git@github.com:abdel/cwebot.git`
- Change to the project directory using `cd ./cwebot`

### Making Changes
- In Terminal application, create a new Git branch using `git checkout -b BRANCH_NAME`, where `BRANCH_NAME` is something descriptive of your changes
- Open the project folder using your preferred editor (I use VS Code)
- Make changes to the file e.g. `bot.js`
- Go back to the Terminal application
- Check which files changed using `git status`
- Add specific files to a commit using `git add FILENAME` or `git add .` to add all changes
- Make a commit using `git commit -m 'MESSAGE'` where `MESSAGE` is something descriptive of your changes
- Push changes to your branch using `git push origin BRANCH_NAME`

### Keeping Things Up To Date
- First, ensure your local environment is up to date by using `git pull --all` which will update all branches
- Keep your specific branch up to date with master by:
   - Checkout your branch using `git checkout BRANCH_NAME`
   - Merge latest changes from master using `git merge origin/master`

