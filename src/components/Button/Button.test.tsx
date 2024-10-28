import { fireEvent, render } from '@testing-library/react';
import '@testing-library/jest-dom';
import React from 'react';
import Button, { ButtonProps, ButtonType, ButtonSize } from './Button';
	const defaultProps: ButtonProps = {
    onClick: jest.fn(),
	};

	const testProps: ButtonProps = {
    btnType: ButtonType.Primary,
    size: ButtonSize.Large,
    className: 'abc',
  };
  
  const disabledProps: ButtonProps = {
    disabled: true,
    onClick: jest.fn(),
  };
describe('test Button Component', () => {
    it('should render the correct default Button', () => {
      const wrapper = render(<Button {...defaultProps}>Nice</Button>);
      const element = wrapper.getByText('Nice') as HTMLButtonElement;
      expect(element).toBeInTheDocument(); // 是否正常渲染在页面
			expect(element.tagName).toEqual('BUTTON'); // 标签是否正确
      expect(element).toHaveClass('btn btn-default'); // 类名是否正确
			fireEvent.click(element); // 模拟点击
			expect(defaultProps.onClick).toHaveBeenCalled(); // 测试是否调用了click
			expect(element.disabled).toBeFalsy(); // 测试是否禁用
    });
    it('should render the correct component based on different props', () => {
			const wrapper = render(<Button {...testProps}>Nice</Button>);
      const element = wrapper.getByText('Nice');
      expect(element).toBeInTheDocument(); // 是否正常渲染在页面
			expect(element).toHaveClass('btn-lg btn-primary abc'); // 测试是否添加了class
    });
    it('should render a link when btnType equals link and href is provided', () => {
			const wrapper = render(<Button btnType={ButtonType.Link} href="http://www.baidu.com">Link</Button>);
      const element = wrapper.getByText('Link');
      expect(element).toBeInTheDocument(); // 是否正常渲染在页面
			expect(element.tagName).toEqual('A'); // 标签是否正确
			expect(element).toHaveClass('btn btn-link'); // 测试是否添加了class
    });
    it('should render disabled button when disabled set to true', () => {
			const wrapper = render(<Button { ...disabledProps }>Disabled</Button>);
			const element = wrapper.getByText('Disabled') as HTMLButtonElement;
			expect(element).toBeDisabled();
			expect(element.disabled).toBeTruthy();
			fireEvent.click(element);
			expect(disabledProps.onClick).not.toHaveBeenCalled(); // 点击后不触发onClick
    });
  });
