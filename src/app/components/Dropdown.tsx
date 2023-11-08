import { Menu } from '@headlessui/react';

// NOCH NICHT FERTIG

interface DropdownProps {
    title: string;
    values: [];
}

export default function Dropdown(props: DropdownProps) {
  return (
    <Menu>
      <Menu.Button>props.title</Menu.Button>
      <Menu.Items>
        <Menu.Item>
          {({ active }) => (
            <a className={`${active && 'bg-primary-600'}`} href="">Kühlschrank</a>
          )}
        </Menu.Item>
      </Menu.Items>
    </Menu>
  )
}