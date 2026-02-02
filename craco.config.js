const path = require('path');

module.exports = {
  webpack: {
    configure: (config) => {
      // Polyfill Node core modules for Solana/Anchor (webpack 5 no longer includes them)
      config.resolve.fallback = {
        ...config.resolve.fallback,
        assert: require.resolve('assert/'),
        buffer: require.resolve('buffer/'),
      };

      // Ignore source-map-loader errors in node_modules (missing source maps in Solana deps)
      config.ignoreWarnings = [
        { module: /node_modules\/@project-serum\/anchor/ },
        { module: /node_modules\/@coral-xyz\/borsh/ },
        { module: /node_modules\/@solana/ },
        { module: /node_modules\/borsh/ },
        { module: /node_modules\/superstruct/ },
      ];

      const rules = config.module?.rules;
      if (Array.isArray(rules)) {
        rules.forEach((rule) => {
          if (rule.oneOf) {
            rule.oneOf.forEach((oneOfRule) => {
              if (
                oneOfRule.loader?.includes?.('source-map-loader') ||
                oneOfRule.use?.some?.((u) => u?.loader?.includes?.('source-map-loader'))
              ) {
                oneOfRule.exclude = [
                  /node_modules/,
                  ...(Array.isArray(oneOfRule.exclude) ? oneOfRule.exclude : []),
                ];
              }
            });
          }
        });
      }

      return config;
    },
  },
};
