/*
 * Licensed to Elasticsearch B.V. under one or more contributor
 * license agreements. See the NOTICE file distributed with
 * this work for additional information regarding copyright
 * ownership. Elasticsearch B.V. licenses this file to you under
 * the Apache License, Version 2.0 (the "License"); you may
 * not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *    http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing,
 * software distributed under the License is distributed on an
 * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
 * KIND, either express or implied.  See the License for the
 * specific language governing permissions and limitations
 * under the License.
 */

import { PluginInitializerContext } from 'kibana/server';
import { UsageCollectionSetup } from '../../../../usage_collection/server';
import { fetchProvider } from './fetch';

export interface Usage {
  successCount: number;
  errorCount: number;
  averageDuration: number | null;
}

export async function registerUsageCollector(
  usageCollection: UsageCollectionSetup,
  context: PluginInitializerContext
) {
  try {
    const collector = usageCollection.makeUsageCollector<Usage>({
      type: 'search',
      isReady: () => true,
      fetch: fetchProvider(context.config.legacy.globalConfig$),
      schema: {
        successCount: { type: 'long' },
        errorCount: { type: 'long' },
        averageDuration: { type: 'float' },
      },
    });
    usageCollection.registerCollector(collector);
  } catch (err) {
    return; // kibana plugin is not enabled (test environment)
  }
}
