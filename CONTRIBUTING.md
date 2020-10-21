## Contributing

Thank you for checking out our Curation Tools Frontend work. We welcome contributions from everyone! By participating in this project, you agree to abide by the Mozilla [Community Participation Guidelines](https://www.mozilla.org/about/governance/policies/participation/).

### Asking questions / receiving updates

* Matrix channel: [pocket-outreachy-applicants]([https://matrix.to/#/!JxCLOcZqUzctTkouqk:mozilla.org?via=mozilla.org&via=matrix.org)

* File issues/questions on Github: [https://github.com/Pocket/curation-tools-frontend/issues](https://github.com/Pocket/curation-tools-frontend/issues).

### Contributing Code

If you are new to the repo, you might want to pay close attention to these tags, as they are typically a great way to get started: Good First Bug, Bug, Chore, and Polish. If you see a bug that is not yet assigned to anyone, start a conversation with an engineer in the ticket itself, expressing your interest in taking the bug. If you take the bug, someone will set the ticket to Assigned to Contributor, so we can be proactive about helping you succeed in fixing the bug.

* Fork the repository.

* Create a branch in your fork named `issue-<issue_num>-<short_issue_description>`.

* Push your branch to your fork.

* Open up a Pull Request against the `main` branch on the original repository and get your code reviewed.

### Setting up your development environment

Please review the [README](https://github.com/Pocket/curation-tools-frontend/blob/master/README.md) for instructions on setting up your development environment, installing dependencies and starting the server.

### Creating Pull Requests

You have identified the bug, written code and now want to get it into the main repo using a [Pull Request](https://help.github.com/articles/about-pull-requests/).

All code is added using a pull request against the master branch of our repo. Before submitting a PR, please go through this checklist:

* Title your PR with the same name as the issue.

* All unit tests must pass (and if you haven't written a unit test, please do!)

* Fill out the pull request template as outlined

* Please add a PR / Needs Review tag to your PR (if you have permission). This starts the code review process. If you cannot add a tag, don't worry, we will add it during triage.

* Make sure your PR will merge gracefully with `main` at the time you create the PR, and that your commit history is 'clean'

### Understanding Code Reviews

You have created a PR and submitted it to the repo, and now are waiting patiently for you code review feedback. One of the projects module owners will be along and will either:

* Make suggestions for some improvements

* Give you a 👍 in the comments section, indicating the review is done and the code can be merged

Typically, you will iterate on the PR, making changes and pushing your changes to new commits on the PR. When the reviewer is satisfied that your code is good-to-go, you will get the coveted R+ comment, and your code can be merged. If you have commit permission, you can go ahead and merge the code to `main`, otherwise, it will be done for you.

Our project prides itself on it's respectful, patient and positive attitude when it comes to reviewing contributor's code, and as such, we expect contributors to be respectful, patient and positive in their communications as well.

### Writing Good Git Commit Messages

We like this overview by Chris Beams on "[How to Write a Git Commit Message](https://chris.beams.io/posts/git-commit/)".

The tl;dr is:

1. [Separate subject from body with a blank line](https://chris.beams.io/posts/git-commit/#separate)

2. [Limit the subject line to 50 characters](https://chris.beams.io/posts/git-commit/#limit-50)

3. [Capitalize the subject line](https://chris.beams.io/posts/git-commit/#capitalize)

4. [Do not end the subject line with a period](https://chris.beams.io/posts/git-commit/#end)

5. [Use a verb to start your subject line (Add, Remove, Fix, Update, Rework, Polish, etc.)](https://chris.beams.io/posts/git-commit/#imperative)

6. [Wrap the body at 72 characters](https://chris.beams.io/posts/git-commit/#wrap-72)

7. [Use the body to explain *what* and *why* vs. *how*](https://chris.beams.io/posts/git-commit/#why-not-how)
