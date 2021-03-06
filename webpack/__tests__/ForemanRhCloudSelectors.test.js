import { testSelectorsSnapshotWithFixtures } from '@theforeman/test';
import { rhCloudStateWrapper } from '../ForemanRhCloudTestHelpers';
import {
  selectForemanRhCloud,
  selectForemanInventoryUpload,
  selectInsightsCloudSync,
} from '../ForemanRhCloudSelectors';

const state = rhCloudStateWrapper({ inventoryReducersNamespaces: {} });

const fixtures = {
  'should return ForemanRhCloud': () => selectForemanRhCloud(state),
  'should return ForemanInventoryUpload': () =>
    selectForemanInventoryUpload(state),
  'should return InsightsCloudSync': () => selectInsightsCloudSync(state),
};

describe('ForemanRhCloud selectors', () =>
  testSelectorsSnapshotWithFixtures(fixtures));
