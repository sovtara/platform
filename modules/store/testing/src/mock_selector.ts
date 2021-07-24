import {
  MemoizedPropsSelector,
  MemoizedSelector,
  MemoizedSelectorWithProps,
} from '@ngrx/store';

export interface MockSelector {
  selector:
    | string
    | MemoizedSelector<any, any>
    | MemoizedSelectorWithProps<any, any, any>
    | MemoizedPropsSelector<any, any, any>;
  value: any;
}
