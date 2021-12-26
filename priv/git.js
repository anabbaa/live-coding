//git add -A	Stages all changed files
//git add -u	Stages changed and deleted files, NOT new files
//git reset --hard HEAD	Removes all local changes in working directory
//git remote add [name][url]	Switch to that branch
//git fetch [remote][branch]	Merge [branch] into current branch
//git pull [remote]	Switch to that branch
//git push [remote][branch]	Create and checkout new branch
//git blame [file]	Shows who changed what and when in file
//git log --pretty=oneline	Lists compressed version history for the current branch
//git show [commit]	Outputs metadata and content changes of the specified commit
//git remote add origin git@github.com:YOUR-ACCOUNT/YOUR-REPO.git  its to add new remote for working directory
//Create a working copy of a local repository:  /git clone /path/to/repository
//For a remote server, use:  git clone username@host:/path/to/repository
//List all currently configured remote repositories:  git remote -v
//Delete a branch on your remote repository:  git push origin :<branchname></branchname>
//View all the merge conflicts: View the conflicts against the base file: Preview changes, before merging:

//git diff
//git diff --base <filename>
//git diff <sourcebranch> <targetbranch></targetbranch>
//You can use tagging to mark a significant changeset, such as a release: git tag 1.0.0 <commitID>
//Undo local changes
//If you mess up, you can replace the changes in your working tree with the last content in head:

//Changes already added to the index, as well as new files, will be kept.

//git checkout -- <filename>
//Instead, to drop all your local changes and commits, fetch the latest history from the server and point your local master branch at it, do this:

//git fetch origin
//git reset --hard origin/master
//Search the working directory for foo():   git grep "foo()"
//git revert - Undo a “public” change
//You just ran git push, sending your changes to GitHub, now you realize there’s a problem with one of those commits. You’d like to undo that commit.

//git revert <SHA>
//You’ve made some commits locally (not yet pushed), but everything is terrible, you want to undo the last three commits—like they never happened.

//git reset --hard <last good SHA>
//The git stash command takes your uncommitted changes (both staged and unstaged), saves them away for later use, and then reverts them from your working copy.

//git stash "Some description"
//git stash list
//You can reapply previously stashed changes with git stash pop:

//$ git stash pop 
//Popping your stash removes the changes from your stash and reapplies them to your working copy.

//Alternatively, you can reapply the changes to your working copy and keep them in your stash with git stash apply:
//$ git stash apply
