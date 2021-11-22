/**
 * @name interface
 * @author Lester
 * @date 2021-07-01 15:32
 */

// 客户信息
export interface ClientInfo {
  name?: string;
  nickName?: string;
  avatar?: string;
  multiCar?: number;
  birthDate?: string;
  resideCity?: string;
  factTagList?: TagItem[];
  ruleTagList?: TagItem[];
  personalTagList?: IPersonalTagItem[];
  carList?: ICarList[];
}

export interface TagItem {
  tagId: string;
  tagName: string;
  groupId?: string;
  groupName?: string;
  modified?: number;
  displayType?: number;
}

export interface Tag {
  tagId: string;
  tagName: string;
  tagList: TagItem[];
}

export interface IGroupIdInfo {
  groupId?: string;
  groupName?: string;
  tagList: IgroupTagItem[];
}
export interface IgroupTagItem {
  tagId?: string;
  tagName?: string;
}

export interface IMotifyTagItem {
  groupId?: string;
  groupName?: string;
  tagId?: string;
  tagName?: string;
  oldTagId?: string;
  modified?: number;
  oldModified?: number;
}

export interface IModifyTagList {
  externalUserid: string;
  carNumber?: string;
  list: IMotifyTagItem[];
}

export interface IPersonalTagItem {
  externalUserid?: string;
  tagName: string;
  isSelected: number;
  isDeleted?: number;
}

// 定义保险类型对应缩写的接口
export interface IPreferenceTagName2Abbreviation {
  车险销售概率: string;
  医疗险销售概率: string;
  重疾险销售概率: string;
  宠物险销售概率: string;
  旅游意外险销售概率: string;
  随人驾乘意外险销售概率: string;
  财产意外险销售概率: string;
}

export interface IAttrTagList {
  category: number;
  groupList: IGroupIdInfo[];
}

export interface allUserInfo {
  externalUserid: string;
  avatar: string;
  tagList: [];
}

// 定义客户信息中英文对照表
export interface IFillClientInfoEn2Zh {
  resideCity: string;
  birthDate: string;
}

// 定义车品牌修改对照表
export interface IFillCarInfoEn2Zh {
  carNumber: string;
  carBrandName: string;
  salesStatus: string;
  compulsoryInsuranceExpireDate: string;
  commercialInsuranceExpireDate: string;
}

export interface Category {
  activeIndex?: number;
  catalogId: string;
  name: string;
  logoUrl: string;
  level?: number;
  lastLevel?: number;
  childItems?: Category[];
}
// 车列表
export interface ICarList {
  carNumber: string;
  carBrandId: string;
  carBrandName: string;
  salesStatus?: number;
  compulsoryInsuranceExpireDate?: string;
  commercialInsuranceExpireDate?: string;
  carTagList: ICarTagListItem[];
}

// 车标签列表
export interface ICarTagListItem {
  tagId: string;
  tagName: string;
  groupId: string;
  groupName: string;
  modified: number;
  type: number;
  displayType: number;
  category: number;
}
