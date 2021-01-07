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
          { minScore: 1, aggregationMethod: 'median' },
        ],
      },
    },
    collect: {
      settings: {
        "chrome-flags": "--ignore-certificate-errors"
      },
      url: process.env.BASE_URL,
      numberOfRuns: 10,
    },
  },
};
