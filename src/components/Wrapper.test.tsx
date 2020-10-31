import { getByTestId } from '@testing-library/react';


const wrapper = getByTestId(document.documentElement, 'wrapper-component');

//Test to check that the wrapper component is in the document
test('check wrapper in dom', () => {
expect(
    getByTestId(document.documentElement, 'wrapper-component'),
  ).toBeInTheDocument()

//Test to confirm that the wrapper component has class="Wrapper"
expect(wrapper).toHaveClass('Wrapper');
});


