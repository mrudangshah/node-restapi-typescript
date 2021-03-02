export enum ActionType {
  Get = 1,
  GetById,
  Create,
  Update,
  UpdateStatus,
  QuickSearch,
  AdvancedSearch,
  Delete,
  UpdateImage,
  pickupRequest,
  pickupRequestInfo,
  pickupRequestInfoCount
}

export enum ReturnValue {
  IdNotFound = 1,
  Success,
  Failed, 
  AlreadyExist,
  Mapped,
  Updated,
  Deleted,
  NotMatch,
  MaximumReached,
  QuantityUpdated,
  AlreadyApproved,
  NoPaymentPending,
  AlreadyInUse,
  providerIdExist,
  priorityAlreadyExist,
  NotVerified,
  NotActive,
  InActiveRole,
  Duplicate = 'ER_DUP_ENTRY' ,
}

export interface Search {
  orderBy: string;
  startLimit: number;
  offSet: number;
  searchString: string;
  sortBy: number;
}