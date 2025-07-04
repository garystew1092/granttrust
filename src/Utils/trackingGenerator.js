const crypto = require('crypto');

// Configuration
const TRACKING_PREFIX = 'GRANT'; // Your company/project prefix
const TRACKING_LENGTH = 10; // Length of random part

function generateTrackingNumber() {
    // Generate random string
    const randomString = crypto
        .randomBytes(Math.ceil(TRACKING_LENGTH / 2))
        .toString('hex')
        .slice(0, TRACKING_LENGTH)
        .toUpperCase();

    // Combine with prefix and timestamp
    const timestamp = Date.now().toString().slice(-4);
    return `${TRACKING_PREFIX}-${timestamp}-${randomString}`;
}

// Example output: "GRANT-5678-A3B5C7D9E1"
module.exports = generateTrackingNumber;