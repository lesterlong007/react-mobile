/**
 * @name Search
 * @author Lester
 * @date 2021-07-15 14:33
 */

import React, { useState } from 'react';
import classNames from 'classnames';
import Icon from '../SvgIcon/SvgIcon';
import style from './style.module.less';

interface SearchProps {
  onSearch: (val: string) => void;
  className?: string;
  placeholder?: string;
  setSearchFlag?: (val: boolean) => void;
  searchIconDirection?: string;
}

const Search: React.FC<SearchProps> = ({
  onSearch,
  className,
  placeholder,
  setSearchFlag, // 设置是否处于搜索状态，决定页面展示的是搜索内容还是默认的内容
  searchIconDirection = 'right' // 搜索图标在左边还是右边
}) => {
  const [value, setValue] = useState<string>('');
  const [isFocus, setIsFocus] = useState<boolean>(false);

  return (
    <div
      className={classNames(style.searchWrap, className, {
        [style.focus]: isFocus
      })}
    >
      {searchIconDirection === 'left' && (
        <Icon className={style.leftSearchIcon} name="icon_common_16_seach" onClick={() => onSearch(value)} />
      )}
      <input
        value={value}
        onChange={(e) => {
          setValue(e.target.value);
          !e.target.value && setSearchFlag && setSearchFlag(false);
        }}
        className={style.input}
        placeholder={placeholder || '可输入关键字查询'}
        type="text"
        onKeyDown={(e) => {
          if (e.keyCode === 13) {
            onSearch(value);
          }
        }}
        onBlur={() => setIsFocus(false)}
        onFocus={() => setIsFocus(true)}
      />
      <Icon
        className={classNames(style.clearIcon, {
          [style.show]: value
        })}
        name="icon_common_16_inputclean"
        onClick={() => {
          setValue('');
          setSearchFlag && setSearchFlag(false);
        }}
      />
      {searchIconDirection === 'right' && (
        <Icon className={style.rightSearchIcon} name="icon_common_16_seach" onClick={() => onSearch(value)} />
      )}
    </div>
  );
};

export default Search;
