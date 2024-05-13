import { type MenuProps } from 'antd';

export default interface ItemNavbarProps {
    title: string | JSX.Element,
    href?: string,
    dropdown?: MenuProps['items'],
}