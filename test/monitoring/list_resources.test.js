// Copyright 2015-2016, Google, Inc.
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
//    http://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.

'use strict';

var assert = require('assert');
var listResourcesExample = require('../../monitoring/list_resources');

it('should list a bunch of stuff', function (done) {
  this.timeout(20000);
  listResourcesExample.main(
    process.env.GCLOUD_PROJECT,
    function (err, results) {
      assert.ifError(err);
      assert.equal(results.length, 3);
      // Monitored resources
      assert.ok(Array.isArray(results[0].resourceDescriptors));
      // Metric descriptors
      assert.ok(Array.isArray(results[1].metricDescriptors));
      // Time series
      assert.ok(Array.isArray(results[2].timeSeries));
      done();
    }
  );
});