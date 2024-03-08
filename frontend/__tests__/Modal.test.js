import React from 'react';
import { render, fireEvent, screen } from '@testing-library/react';
import Modal from '../components/Modal';

describe('Modal Component', () => {
  test('renders correctly when isOpen is true', () => {
    render(<Modal isOpen={true} content="Test Content" actions={<button>Action</button>} />);
    expect(screen.getByText('Test Content')).toBeInTheDocument();
  });

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
