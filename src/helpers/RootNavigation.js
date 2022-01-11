// Useful for navigating to pages that are not within the same stack
import {
  createNavigationContainerRef,
  StackActions,
} from '@react-navigation/native';

export const navigationRef = createNavigationContainerRef();

export function navigate(name, params) {
  if (navigationRef.isReady()) {
    navigationRef.navigate(name, params);
  } else {
    console.log('helloe');
  }
}

export function navigateReplace(name, param) {
  if (navigationRef.isReady()) {
    navigationRef.dispatch(
      StackActions.reset({
        index: 0,
        key: null,
        actions: [navigationRef.navigate(name, param)],
      }),
    );
  }
}
