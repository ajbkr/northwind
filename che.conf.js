var generators = {
  '/tables/customers': {
    'templates/create-table.handlebars': 'dist/customers.js',
    'templates/sequelize-model.handlebars': 'dist/models/customer.js'
  },
  '/tables/employees': {
    'templates/create-table.handlebars': 'dist/employees.js',
    'templates/sequelize-model.handlebars': 'dist/models/employee.js'
  },
  '/tables/privileges': {
    'templates/create-table.handlebars': 'dist/privileges.js',
    'templates/sequelize-model.handlebars': 'dist/models/privilege.js'
  },
  '/tables/employee_privileges': {
    'templates/create-table.handlebars': 'dist/employee-privileges.js',
    'templates/sequelize-model.handlebars': 'dist/models/employee-privilege.js'
  },
  '/tables/inventory_transaction_types': {
    'templates/create-table.handlebars': 'dist/inventory-transaction-types.js',
    'templates/sequelize-model.handlebars': 'dist/models/inventory-transaction-type.js'
  },
  '/tables/shippers': {
    'templates/create-table.handlebars': 'dist/shippers.js',
    'templates/sequelize-model.handlebars': 'dist/models/shipper.js'
  },
  '/tables/orders_tax_status': {
    'templates/create-table.handlebars': 'dist/orders-tax-status.js',
    'templates/sequelize-model.handlebars': 'dist/models/orders-tax-status.js'
  },
  '/tables/orders_status': {
    'templates/create-table.handlebars': 'dist/orders-status.js',
    'templates/sequelize-model.handlebars': 'dist/models/orders-status.js'
  },
  '/tables/orders': {
    'templates/create-table.handlebars': 'dist/orders.js',
    'templates/sequelize-model.handlebars': 'dist/models/orders.js'
  },
  '/tables/products': {
    'templates/create-table.handlebars': 'dist/products.js',
    'templates/sequelize-model.handlebars': 'dist/models/products.js'
  },
  '/tables/purchase_order_status': {
    'templates/create-table.handlebars': 'dist/purchase-order-status.js',
    'templates/sequelize-model.handlebars': 'dist/models/purchase-order-status.js'
  }
};

module.exports = {
  generators: generators
};
