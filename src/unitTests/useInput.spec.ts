import { renderHook, act } from '@testing-library/react-hooks';
import { useInput } from '../hooks/useInput';

describe('useInput hook', () => {
  it('should update value when onChange is called', () => {
    // Arrange
    const initialValue = 'initial';
    const { result } = renderHook(() => useInput(initialValue));

    // Act
    act(() => {
      // Simulate a change event
      result.current.onChange({ target: { value: 'new value' } } as React.ChangeEvent<HTMLInputElement>);
    });

    // Assert
    expect(result.current.value).toBe('new value');
  });

  it('should update value when setValue is called', () => {
    // Arrange
    const initialValue = 'initial';
    const { result } = renderHook(() => useInput(initialValue));

    // Act
    act(() => {
      result.current.setValue('new value');
    });

    // Assert
    expect(result.current.value).toBe('new value');
  });
});