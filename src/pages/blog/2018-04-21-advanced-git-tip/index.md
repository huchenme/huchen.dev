---
title: "Some Advanced Git Tips"
date: "2018-04-21"
image: "cover.jpg"
imageAuthor: "Hello I'm Nik"
imageAuthorLink: "https://unsplash.com/@helloimnik"
tags: ["code"]
---

Recently I learnt [Git In-depth](https://frontendmasters.com/courses/git-in-depth/) in [Frontend Masters](https://frontendmasters.com) by [Nina](https://twitter.com/nnja), it was about 4 hours course, I [tweeted](https://twitter.com/huchenme/status/986621093472485376) some notes while learning and I think it is nice to convert them into a blog post.

## Most useful

* `git add -p` will add your changes in chunks, like what [SourceTree](https://www.sourcetreeapp.com/) is able to do, but `git add -p` is more powerful, you can even divide chunks into smaller pieces.
* `git show <SHA>` will show all the details of a commit, which I did not know before.
* `git merge --no-ff` will merge with a merge commit, even if there is no conflict and git is able to fast forward, and I finally learnt what does fast forward means.
* `git config rerere.enabled true` no more repeat same merge conflict again, resolve once and git will remember it and automatically does the same for you next time.
* `git branch --merged=master` find all branches that have already been merged into master, it is very handy when you want to do some cleanups.
* `git stash --include-untracked` will stash untracked files as well.
* `git commit --fixup <SHA>` combined with `git rebase -i --autosquash <SHA>~` is awesome! I was doing some random commit message and squash using `git rebase -i`, now I don't need to write random commit message any more!
* `git clean -d` will clean untracked files and directories. You need to combine with `-f` to do actual clean or `--dry-run` to see what will be cleaned.
* `git reset --merge ORIG_HEAD` will undo a merge.

## Some random tips

* `cat .git/HEAD` will show where the current HEAD is.
* `git stash save 'message'` will stash with messages.
* `git show-ref` will show hashes of all local and remote branches and tags.
* `HEAD~` is same as `HEAD~1`, and try not to use `^`, it is most likely not what you want.
* `git log --name-status --follow filename` will show all history of that file

## `git reset` vs `git checkout`

This might be the most confusing part of git. Normally we use `git checkout` to checkout a branch, or certain commits, and use `git reset` to undo a commit. But it is more than that.

### `git checkout`

* If you use `git checkout` on a file, that is `git checkout <SHA> -- filename`, serves as a way to revert back to an old version of an individual file.
* `git checkout HEAD -- filename` will reset a file to HEAD version, no matter whether you have staged the changes of the file.
* `git checkout -- filename` will remove local changes which are not staged, but not make change in staging area.

### `git reset`

* `git reset -- filename` will move a file out of staging area, which means unstage a file.
* `git reset -- filename` is same as `git reset HEAD -- filename`.
* `git reset <SHA> -- filename` will update the file in staging area, and keep working area unchanged. `git reset <SHA> -- filename` + `git checkout -- filename` = `git checkout <SHA> -- filename`.
* `git reset <SHA>` will move HEAD to the commit, and keep diff of current version and commit version in working area.
* `git reset --soft <SHA>` will move HEAD to the commit, and keep diff of current version and commit version in staging area. As if you make a change, stage it and make a commit, you can consider this command one step backward.
* `git reset --hard <SHA>` will move HEAD to the commit, and discard changes.

## Conclusion

You can find the full slides and tips [here](https://github.com/nnja/advanced-git), it is the place I will constantly check back.
