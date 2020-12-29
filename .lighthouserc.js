require('dotenv').config();

module.exports = {
  ci: {
    upload: {
      target: 'temporary-public-storage',
    },
    assert: {
      assertions: {
        'categories:performance': [
          'error',
          { minScore: 0.90, aggregationMethod: 'median' },
        ],
      },
    },
    collect: {
      settings: {
        "chrome-flags": "--ignore-certificate-errors"
      },
      url: process.env.BASE_URL,
      numberOfRuns: 20,
    },
  },
};
