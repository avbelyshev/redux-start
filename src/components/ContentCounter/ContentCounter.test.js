import React from 'react'
import { render, screen } from '../../redux/testUtils'
import ContentCounter from './index'

describe('ContentCounter', () => {
  it('Renders book statistics', () => {
    render(<ContentCounter />, {
      initialState: {
        content: {
          entries: [{ title: 'First chapter', completed: true, subsections: [{ title: 'Subsection 1', completed: true }] }]
        }
      }
    });

    expect(screen.getByText('Chapters: 1 (completed: 1)')).toBeInTheDocument();
    expect(screen.getByText('Subsections: 1 (completed: 1)')).toBeInTheDocument();
    expect(screen.getByText('Readiness: 100.0 %')).toBeInTheDocument();
  })
});
