import type { SidebarsConfig } from '@docusaurus/plugin-content-docs'

const sidebars: SidebarsConfig = {
  docs: [
    {
      "type": "doc",
      "className": "hidden",
      "id": "index"
    },
    {
      type: 'category',
      label: 'Getting Started',
      items: [
        'getting-started/overview',
        {
          type: 'category',
          label: 'Installation',
          items: [
            'getting-started/installation/overview',
            'getting-started/installation/greptimedb-standalone',
            'getting-started/installation/greptimedb-cluster',
            'getting-started/installation/greptimedb-dashboard',
          ],
        },
        'getting-started/quick-start',
      ],
    },
    {
      type: 'category',
      label: 'User Guide',
      items: [
        'user-guide/overview',
        {
          type: 'category',
          label: 'Concepts',
          items: [
            'user-guide/concepts/overview',
            'user-guide/concepts/why-greptimedb',
            'user-guide/concepts/data-model',
            'user-guide/concepts/architecture',
            'user-guide/concepts/storage-location',
            'user-guide/concepts/key-concepts',
            'user-guide/concepts/features-that-you-concern',
          ],
        },
        {
          type: 'category',
          label: 'Ingest Data',
          items: [
            'user-guide/ingest-data/overview',
            {
              type: 'category',
              label: 'For Observerbility',
              items: [
                'user-guide/ingest-data/for-observerbility/overview',
                'user-guide/ingest-data/for-observerbility/prometheus',
                'user-guide/ingest-data/for-observerbility/vector',
                'user-guide/ingest-data/for-observerbility/opentelemetry',
                'user-guide/ingest-data/for-observerbility/influxdb-line-protocol',
              ],
            },
            {
              type: 'category',
              label: 'For IoT',
              items: [
                'user-guide/ingest-data/for-iot/overview',
                'user-guide/ingest-data/for-iot/sql',
                {
                  type: 'category',
                  label: 'gRPC SDKs',
                  items: [
                    'user-guide/ingest-data/for-iot/grpc-sdks/overview',
                    'user-guide/ingest-data/for-iot/grpc-sdks/go',
                    'user-guide/ingest-data/for-iot/grpc-sdks/java',
                  ],
                },
                'user-guide/ingest-data/for-iot/influxdb-line-protocol',
                'user-guide/ingest-data/for-iot/emqx',
                'user-guide/ingest-data/for-iot/opentsdb',
              ],
            },
          ],
        },
        {
          type: 'category',
          label: 'Query Data',
          items: [
            'user-guide/query-data/overview',
            'user-guide/query-data/sql',
            'user-guide/query-data/promql',
            'user-guide/query-data/view',
            'user-guide/query-data/cte',
            'user-guide/query-data/query-external-data',
          ],
        },
        { type: 'category', label: 'Manage Data', items: ['user-guide/manage-data/overview'] },
        { type: 'category',
          label: 'Integrations',
          items: [
            'user-guide/integrations/overview',
            'user-guide/integrations/prometheus',
            'user-guide/integrations/vector',
            'user-guide/integrations/grafana',
            'user-guide/integrations/superset',
            'user-guide/integrations/metabase',
            'user-guide/integrations/emqx',
            'user-guide/integrations/dbeaver',
          ],
        },
        { type: 'category',
          label: 'Protocols',
          items: [
            'user-guide/protocols/overview',
            'user-guide/protocols/influxdb-line-protocol',
            'user-guide/protocols/opentelemetry',
            'user-guide/protocols/mysql',
            'user-guide/protocols/postgresql',
            'user-guide/protocols/http',
            'user-guide/protocols/grpc',
            'user-guide/protocols/opentsdb',
          ],
        },
        { type: 'category', label: 'Migrate to GreptimeDB', items: ['user-guide/migrate-to-greptimedb/migrate-from-influxdb'] },
        {
          type: 'category',
          label: 'Continuous Aggregation',
          items: [
            'user-guide/continuous-aggregation/overview',
            'user-guide/continuous-aggregation/usecase-example',
            'user-guide/continuous-aggregation/manage-flow',
            'user-guide/continuous-aggregation/expression',
          ],
        },
        {
          type: 'category',
          label: 'Logs',
          items: [
            'user-guide/logs/overview',
            'user-guide/logs/quick-start',
            'user-guide/logs/pipeline-config',
            'user-guide/logs/manage-pipelines',
            'user-guide/logs/write-logs',
            'user-guide/logs/query-logs',
          ],
        },
        {
          type: 'category',
          label: 'Deployments',
          items: [
            'user-guide/deployments/overview',
            'user-guide/deployments/configuration',
            {
              type: 'category',
              label: 'Authentication',
              items: [
                'user-guide/deployments/authentication/overview',
                'user-guide/deployments/authentication/static',
              ],
            },
            {
              type: 'category',
              label: 'Deploy on Kubernetes',
              items: [
                'user-guide/deployments/deploy-on-kubernetes/overview',
                {
                  type: 'category',
                  label: 'Manage GreptimeDB Operator',
                  items: [
                    'user-guide/deployments/deploy-on-kubernetes/manage-greptimedb-operator/deploy-greptimedb-operator',
                    'user-guide/deployments/deploy-on-kubernetes/manage-greptimedb-operator/upgrade-greptimedb-operator',
                  ]
                },
                'user-guide/deployments/deploy-on-kubernetes/deploy-greptimedb-cluster',
                'user-guide/deployments/deploy-on-kubernetes/destroy-cluster',
              ],
            },
            'user-guide/deployments/run-on-android',
          ],
        },
        {
          type: 'category',
          label: 'Administration',
          items: [
            'user-guide/administration/overview',
            'user-guide/administration/capacity-plan',
            {
              type: 'category',
              label: 'Manage Data',
              items: [
                'user-guide/administration/manage-data/overview',
                'user-guide/administration/manage-data/basic-table-operations',
                'user-guide/administration/manage-data/table-sharding',
                'user-guide/administration/manage-data/region-migration',
                'user-guide/administration/manage-data/region-failover',
                'user-guide/administration/manage-data/compaction',
              ],
            },
            {
              type: 'category',
              label: 'Disaster Recovery',
              items: [
                'user-guide/administration/disaster-recovery/overview',
                'user-guide/administration/disaster-recovery/back-up-&-restore-data',
                'user-guide/administration/disaster-recovery/dr-solution-based-on-cross-region-deployment-in-single-cluster',
              ],
            },
            {
              type: 'category',
              label: 'Remote WAL',
              items: ['user-guide/administration/remote-wal/quick-start', 'user-guide/administration/remote-wal/cluster-deployment'],
            },
            {
              type: 'category',
              label: 'Monitoring',
              items: [
                'user-guide/administration/monitoring/overview',
                'user-guide/administration/monitoring/export-metrics',
                'user-guide/administration/monitoring/tracing',
              ],
            },
            'user-guide/administration/runtime-info',
            'user-guide/administration/performance-tuning-tips',
            'user-guide/administration/upgrade',
          ],
        },
      ],
    },
    {
      type: 'category',
      label: 'GreptimeCloud',
      items: [
        'greptimecloud/overview',
        {
          type: 'category',
          label: 'Getting Started',
          items: [
            'greptimecloud/getting-started/overview',
            'greptimecloud/getting-started/prometheus',
            'greptimecloud/getting-started/mysql',
            'greptimecloud/getting-started/influxdb',
            'greptimecloud/getting-started/go',
            'greptimecloud/getting-started/java',
            'greptimecloud/getting-started/python',
            'greptimecloud/getting-started/node',
            'greptimecloud/getting-started/vector',
          ],
        },
        {
          type: 'category',
          label: 'Integrations',
          items: [
            'greptimecloud/integrations/prometheus',
            'greptimecloud/integrations/grafana',
            'greptimecloud/integrations/mysql',
            'greptimecloud/integrations/postgresql',
            'greptimecloud/integrations/influxdb',
            'greptimecloud/integrations/kafka',
            'greptimecloud/integrations/otlp',
            'greptimecloud/integrations/vector',
            'greptimecloud/integrations/alloy',
            'greptimecloud/integrations/emqx',
            'greptimecloud/integrations/streamlit',
            'greptimecloud/integrations/superset',
            'greptimecloud/integrations/metabase',
            'greptimecloud/integrations/mindsdb',
            'greptimecloud/integrations/dbeaver',
            {
              type: 'category',
              label: 'SDK Libraries',
              items: ['greptimecloud/integrations/sdk-libraries/go', 'greptimecloud/integrations/sdk-libraries/java'],
            },
          ],
        },
        { type: 'category', label: 'Migrate to GreptimeCloud', items: ['greptimecloud/migrate-to-greptimecloud/migrate-from-influxdb'] },
        {
          type: 'category',
          label: 'Usage & Billing',
          items: [
            'greptimecloud/usage-&-billing/overview',
            'greptimecloud/usage-&-billing/request-capacity-unit',
            'greptimecloud/usage-&-billing/hobby',
            'greptimecloud/usage-&-billing/serverless',
            'greptimecloud/usage-&-billing/dedicated',
            'greptimecloud/usage-&-billing/byoc',
            'greptimecloud/usage-&-billing/billing',
          ],
        },
        {
          type: 'category',
          label: 'Tutorials',
          items: [
            {
              type: 'category',
              label: 'Monitor Host Metrics',
              items: [
                'greptimecloud/tutorials/monitor-host-metrics/prometheus',
                'greptimecloud/tutorials/monitor-host-metrics/mysql',
                'greptimecloud/tutorials/monitor-host-metrics/influxdb',
                'greptimecloud/tutorials/monitor-host-metrics/go',
                'greptimecloud/tutorials/monitor-host-metrics/java',
                'greptimecloud/tutorials/monitor-host-metrics/python',
                'greptimecloud/tutorials/monitor-host-metrics/node-js',
              ],
            },
          ],
        },
      ],
    },
    {
      type: 'category',
      label: 'GreptimeDB Enterprise',
      items: [
        'enterprise/overview',
        {
          type: 'category',
          label: 'Autopilot',
          items: ['enterprise/autopilot/region-balancer'],
        },
        {
          type: 'category',
          label: 'Deployments',
          items: ['enterprise/deployments/authentication',],
        },
        {
          type: 'category', 
          label: 'Administration',
          items: [
            {
              type: 'category',
              label: 'Disaster Recovery',
              items: [
                'enterprise/administration/disaster-recovery/overview',
                'enterprise/administration/disaster-recovery/dr-solution-based-on-active-active-failover',
              ]
            }
          ],
        },
      ],
    },
    {
      type: 'category',
      label: 'Reference',
      items: [
        'reference/command-lines',
        'reference/sql-tools',
        {
          type: 'category',
          label: 'SQL',
          items: [
            'reference/sql/overview',
            'reference/sql/data-types',
            'reference/sql/http-api',
            'reference/sql/insert',
            'reference/sql/cast',
            'reference/sql/copy',
            'reference/sql/drop',
            'reference/sql/select',
            'reference/sql/distinct',
            'reference/sql/where',
            'reference/sql/order_by',
            'reference/sql/group_by',
            'reference/sql/limit',
            'reference/sql/join',
            'reference/sql/range',
            'reference/sql/delete',
            'reference/sql/show',
            'reference/sql/tql',
            'reference/sql/truncate',
            'reference/sql/create',
            'reference/sql/describe_table',
            'reference/sql/with',
            'reference/sql/alter',
            'reference/sql/explain',
            { type: 'category', label: 'Functions', items: ['reference/sql/functions/overview', 'reference/sql/functions/df-functions', 'reference/sql/functions/geo'] },
            'reference/sql/admin',
            'reference/sql/compatibility',
            {
              type: 'category',
              label: 'Information Schema',
              items: [
                'reference/sql/information-schema/overview',
                'reference/sql/information-schema/build-info',
                'reference/sql/information-schema/character-sets',
                'reference/sql/information-schema/collations',
                'reference/sql/information-schema/collation-character-set-applicability',
                'reference/sql/information-schema/columns',
                'reference/sql/information-schema/engines',
                'reference/sql/information-schema/key-column-usage',
                'reference/sql/information-schema/partitions',
                'reference/sql/information-schema/schemata',
                'reference/sql/information-schema/tables',
                'reference/sql/information-schema/table-constraints',
                'reference/sql/information-schema/views',
                'reference/sql/information-schema/flows',
                'reference/sql/information-schema/region-peers',
                'reference/sql/information-schema/runtime-metrics',
                'reference/sql/information-schema/cluster-info',
              ],
            },
          ],
        },
        'reference/telemetry',
        'reference/gtctl',
      ],
    },
    {
      type: 'category',
      label: 'Contributor Guide',
      items: [
        'contributor-guide/overview',
        'contributor-guide/getting-started',
        {
          type: 'category',
          label: 'Frontend',
          items: [
            'contributor-guide/frontend/overview',
            'contributor-guide/frontend/table-sharding',
            'contributor-guide/frontend/distributed-querying',
          ],
        },
        {
          type: 'category',
          label: 'Datanode',
          items: [
            'contributor-guide/datanode/overview',
            'contributor-guide/datanode/storage-engine',
            'contributor-guide/datanode/query-engine',
            'contributor-guide/datanode/data-persistence-indexing',
            'contributor-guide/datanode/wal',
            'contributor-guide/datanode/metric-engine',
          ],
        },
        {
          type: 'category',
          label: 'Metasrv',
          items: [
            'contributor-guide/metasrv/overview',
            'contributor-guide/metasrv/admin-api',
            'contributor-guide/metasrv/selector',
          ],
        },
        {
          type: 'category',
          label: 'Flownode',
          items: ['contributor-guide/flownode/overview', 'contributor-guide/flownode/dataflow', 'contributor-guide/flownode/arrangement'],
        },
        {
          type: 'category',
          label: 'Tests',
          items: [
            'contributor-guide/tests/overview',
            'contributor-guide/tests/unit-test',
            'contributor-guide/tests/integration-test',
            'contributor-guide/tests/sqlness-test',
          ],
        },
        {
          type: 'category',
          label: 'How To',
          items: [
            'contributor-guide/how-to/how-to-write-sdk',
            'contributor-guide/how-to/how-to-use-tokio-console',
            'contributor-guide/how-to/how-to-trace-greptimedb',
          ],
        },
      ],
    },
    {
      "type": "link",
      "label": "Release Notes",
      "href": "/release-notes"
    },
    { type: 'category', label: 'FAQ and Others', items: ['faq-and-others/overview', 'faq-and-others/faq'] },
  ],
}

export default sidebars
