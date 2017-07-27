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
  },
  '/tables/orders_tax_status': {
    'templates/create-table.handlebars': 'dist/orders-tax-status.js'
  },
  '/tables/orders_status': {
    'templates/create-table.handlebars': 'dist/orders-status.js'
  },
  '/tables/orders': {
    'templates/create-table.handlebars': 'dist/orders.js'
  },
  '/tables/products': {
    'templates/create-table.handlebars': 'dist/products.js'
  },
  '/tables/purchase_order_status': {
    'templates/create-table.handlebars': 'dist/purchase-order-status.js'
  }
};

module.exports = {
  generators: generators
};
