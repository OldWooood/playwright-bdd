import { test as base, createBdd } from 'playwright-bdd';
import { withLog } from '../../_helpers/withLog';

export const test = withLog(base);

const { BeforeWorker, AfterWorker } = createBdd(test, { tags: '@sample1' });
const { Given } = createBdd(test);

BeforeWorker(async ({ log }) => {
  log(`BeforeWorker`);
});

BeforeWorker({ tags: 'not @sample1' }, async ({}) => {
  throw new Error(`Should not be called`);
});

AfterWorker(async ({ log }) => {
  log(`AfterWorker`);
});

AfterWorker({ tags: 'not @sample1' }, async ({}) => {
  throw new Error(`Should not be called`);
});

Given('a step', async ({ log, $testInfo }) => {
  log(`${$testInfo.title}: a step`);
});
