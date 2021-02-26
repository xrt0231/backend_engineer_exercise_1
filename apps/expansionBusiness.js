
// Handle writing:

// 1. Use more accurate SCHEMA design.
// 2. Use accurate INDEX.
// 3. Avoid high cost JOIN operations.
// 4. Divide popular TABLES (add cache for those popular TABLES.) 

// Handler reading:

// 1. Use Cache such as:
//     a. User side cache (OS/browser.)
//     b. Set different levels for Redis.