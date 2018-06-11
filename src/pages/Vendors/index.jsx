import React from 'react';
import { HotComponentLoader } from 'react-hot-component-loader';

const Component = props => <HotComponentLoader loader={() => import('./container')} {...props} />;

export default Component;
