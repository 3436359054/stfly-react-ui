import React, { ReactNode, AnchorHTMLAttributes, ButtonHTMLAttributes, FC } from "react";
import classNames from "classnames";

export enum ButtonSize {
	Large = 'lg',
	Small = 'sm'
}
export enum ButtonType {
	Primary = 'primary',
	Default = 'default',
	Danger = 'danger',
	Link = 'link',
}

interface BaseButtonProps {
	className?: string;
	disabled?: boolean;
	size?: ButtonSize;
	btnType?: ButtonType;
	href?: string;
	children: ReactNode;
}
//  将原生的button和a元素的props熟悉和自定义props属性进行联合
type NativeButtonProps = BaseButtonProps & ButtonHTMLAttributes<HTMLElement>;
type AnchorButtonProps = BaseButtonProps & AnchorHTMLAttributes<HTMLElement>;
// 最终Button的props类型
export type ButtonProps = Partial<NativeButtonProps & AnchorButtonProps>;
const Button: FC<ButtonProps> = (props) => {
	const {
		className,
		btnType = ButtonType.Default,
		disabled = false,
		size,
		href,
		children,
		...resetProps
	} = props;
	const classes = classNames('btn', className, {
		[`btn-${btnType}`]: btnType,
		[`btn-${size}`]: size,
		disabled: btnType === ButtonType.Link && disabled
	})
	if (btnType === ButtonType.Link && href) {
		return <a className={classes} href={href} {...resetProps}>{children}</a>
	} else {  
		return <button className={classes} disabled={disabled} {...resetProps}>{children}</button>
	}
}

export default Button