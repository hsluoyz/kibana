/*
 * Copyright Elasticsearch B.V. and/or licensed to Elasticsearch B.V. under one
 * or more contributor license agreements. Licensed under the Elastic License;
 * you may not use this file except in compliance with the Elastic License.
 */

import { connect } from 'react-redux';
import { LayerControl } from './view';
import { getFlyoutOpen, toggleFlyout } from '../../store/ui';

function mapStateToProps(state = {}) {
  return {
    flyoutOpen: getFlyoutOpen(state)
  };
}

const mapDispatchToProps = {
  toggleFlyout
};

const connectedLayerControl = connect(mapStateToProps, mapDispatchToProps, null, { withRef: true })(LayerControl);
export { connectedLayerControl as LayerControl };