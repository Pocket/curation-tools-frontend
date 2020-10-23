# Structuring Pull Requests & Testing Your Components

## Structuring your Pull Request

Your component should be added to the `src/components` directory.

## Testing Your Component

To test and help us review the rendering of your component, import it into `App.tsx` file and place the component inside the `<div className="App">` element.

This will help you visualize the rendering of the component during development, and will help us review the rendering when reviewing your pull request.

After your pull request has been approved, you will make a final commit reverting the changes you made to `App.tsx` (so we don't have merge conflicts with later pull requests).
