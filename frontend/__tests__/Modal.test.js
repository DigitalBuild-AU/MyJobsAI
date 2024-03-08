"""
File: Modal.test.js
Description: This file contains tests for the Modal component. It tests the rendering of the modal based on its open state, and the onClose event handling when the escape key is pressed or the backdrop is clicked.
"""

import React from 'react';
import { render, fireEvent, screen } from '@testing-library/react';
import Modal from '../components/Modal';

describe('Modal Component', () => {
  """
  Tests that the Modal component renders correctly when its 'isOpen' prop is set to true.
  """
  """
Tests the Modal component's rendering behavior based on its 'isOpen' prop. It checks that the modal renders its content when open and remains hidden when not.
"""
test('renders correctly when isOpen is true', () => {
    render(<Modal isOpen={true} content="Test Content" actions={<button>Action</button>} />);
    expect(screen.getByText('Test Content')).toBeInTheDocument();
  });

  """
Validates that the Modal component does not render its content when the 'isOpen' prop is set to false, ensuring the modal remains hidden.
"""
test('does not render when isOpen is false', () => {
    render(<Modal isOpen={false} content="Test Content" actions={<button>Action</button>} />);
    expect(screen.queryByText('Test Content')).not.toBeInTheDocument();
  });

  test('calls onClose when the escape key is pressed', () => {
    const onCloseMock = jest.fn();
    render(<Modal isOpen={true} onClose={onCloseMock} content="Test Content" actions={<button>Action</button>} />);
    fireEvent.keyDown(window, { key: 'Escape', code: 'Escape', keyCode: 27 });
    expect(onCloseMock).toHaveBeenCalled();
  });

  test('calls onClose when the backdrop is clicked', () => {
    const onCloseMock = jest.fn();
    render(<Modal isOpen={true} onClose={onCloseMock} content="Test Content" actions={<button>Action</button>} />);
    fireEvent.click(screen.getByClassName('modal-backdrop'));
    expect(onCloseMock).toHaveBeenCalled();
  });

  test('prevents onClose from being called when the modal content is clicked', () => {
    const onCloseMock = jest.fn();
    render(<Modal isOpen={true} onClose={onCloseMock} content="Test Content" actions={<button>Action</button>} />);
    fireEvent.click(screen.getByClassName('modal-content'));
    expect(onCloseMock).not.toHaveBeenCalled();
  });
});
