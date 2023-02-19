# Setup
```sh
# Install
npm install
# Test
npm test
# Test with coverage
npm test -- --coverage
```

# Business rules
* principals below 50 are not allowed
* principals between 50 and 1000 the rate must be 1
* principals between 1000 and 10000 the rate must be 3
* principals over 10000 the rate must be 5