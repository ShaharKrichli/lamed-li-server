export type entitle = {
  title: string,
  desc: string
}

export interface IRequest {
  id: number;
  catId: number;
  name: string;
  desc: string;
  steps: string;
  entitleDesc?: string;
  parentInd?: boolean;
  isSupported: boolean;
  isSupportedUnderCategory: boolean;
  applyId?: number;
  openType: string;
  isCommingSoon: boolean;
  isDisplayAsRight: boolean
}

