import React from 'react';
import cx from 'classnames';
import './style.module.less';

interface ItemProps {
  checked: string | number;
  value: string;
  change: (value: any) => void;
  children: any;
}
interface RadiosProps {
  value: string;
  onChange: (item: any, index: number) => void;
  prop: string;
  childrens: {
    [propKey: string]: any;
  }[];
}

const Item: React.FC<ItemProps> = (props) => {
  const { checked, value, change, children } = props;
  return (
    <label className={cx({ 'radio-wrapper': true, 'radio-wrapper-checked': value === checked })}>
      <span className={cx({ radio: true, 'radio-checked': value === checked })}>
        <input type="radio" className="radio-input" onClick={change.bind(this, value)} />
        <span className="radio-inner"></span>
      </span>
      {children}
    </label>
  );
};

const Radios: React.FC<RadiosProps> = (props) => {
  const { childrens, onChange, value, prop } = props;
  return (
    <div className={'radio-group'}>
      {childrens.map((item, index: number) => {
        return (
          <Item key={index} checked={value} value={index + ''} change={(value) => onChange(item, value)}>
            {item[prop]}
          </Item>
        );
      })}
    </div>
  );
};

export default Radios;
