var generators = {
  '/tables/customers': {
    'templates/create-table.handlebars': 'dist/customers.js'
  },
  '/tables/employees': {
    'templates/create-table.handlebars': 'dist/employees.js'
  },
  '/tables/privileges': {
    'templates/create-table.handlebars': 'dist/privileges.js'
  },
  '/tables/employee_privileges': {
    'templates/create-table.handlebars': 'dist/employee-privileges.js'
  },
  '/tables/inventory_transaction_types': {
    'templates/create-table.handlebars': 'dist/inventory-transaction-types.js'
  },
  '/tables/shippers': {
    'templates/create-table.handlebars': 'dist/shippers.js'
  }
};

module.exports = {
  generators: generators
};
