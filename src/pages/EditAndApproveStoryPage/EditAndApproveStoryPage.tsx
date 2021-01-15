import React from 'react';
import { Prospect } from '../../services/types/Prospect';
import { useLocation } from 'react-router-dom';

interface EditAndApproveStoryPageProps {
  prospect?: Prospect;
}

export const EditAndApproveStoryPage: React.FC<EditAndApproveStoryPageProps> = (
  props
): JSX.Element => {
  /**
   * If a Prospect object was passed to the page from one of the other app pages,
   * let's extract it from the routing.
   */
  const location = useLocation<{ prospect?: Prospect }>();

  // Use the variable or get a TypeScript error.
  // To be replaced with actual logic for this page.
  console.log(location.state.prospect);

  return <h1>Edit & Approve</h1>;
};
