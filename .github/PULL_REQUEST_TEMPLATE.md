## Goal

This pull request seeks to provide a solution to issue #60 - Create a wrapper component. This wrapper acts as a container for other child components and must meet the following styling specifications.

## Todos:

- [1] Outstanding todo
- [1] Completed todo

## Implementation Decisions

- Though not specified in the requirements, the wrapper is styled with light-gray background color to enable a quick visual signal of it's existence and the elements inspection can confirm if it meets the specifications. This can be removed later before a final commit and completion of this pull request's review and merging, so as not to cause any visual conflicts with the other components to be integrated.

- The entire project uses the base Material UI, which is not included in this component since this is a simple component which does not depend on any feature-rich UI components. Basic css is employed to achieve the desired styling.
