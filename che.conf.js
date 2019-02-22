var generators = {
  '/tables/customers': {
    'templates/create-table.handlebars': 'dist/customers.js',
    'templates/django-model.handlebars': 'dist/models/customer.py',
    'templates/drf-serializer.handlebars': 'dist/serializers/customer.py',
    'templates/sequelize-model.handlebars': 'dist/models/customer.js'
  },
  '/tables/employees': {
    'templates/create-table.handlebars': 'dist/employees.js',
    'templates/django-model.handlebars': 'dist/models/employee.py',
    'templates/drf-serializer.handlebars': 'dist/serializers/employee.py',
    'templates/sequelize-model.handlebars': 'dist/models/employee.js'
  },
  '/tables/privileges': {
    'templates/create-table.handlebars': 'dist/privileges.js',
    'templates/django-model.handlebars': 'dist/models/privilege.py',
    'templates/drf-serializer.handlebars': 'dist/serializers/privilege.py',
    'templates/sequelize-model.handlebars': 'dist/models/privilege.js'
  },
  '/tables/employee_privileges': {
    'templates/create-table.handlebars': 'dist/employee-privileges.js',
    'templates/django-model.handlebars': 'dist/models/employee_privilege.py',
    'templates/drf-serializer.handlebars': 'dist/serializers/employee_privilege.py',
    'templates/sequelize-model.handlebars': 'dist/models/employee-privilege.js'
  },
  '/tables/inventory_transaction_types': {
    'templates/create-table.handlebars': 'dist/inventory-transaction-types.js',
    'templates/django-model.handlebars': 'dist/models/inventory_transaction_type.py',
    'templates/drf-serializer.handlebars': 'dist/serializers/inventory_transaction_type.py',
    'templates/sequelize-model.handlebars': 'dist/models/inventory-transaction-type.js'
  },
  '/tables/shippers': {
    'templates/create-table.handlebars': 'dist/shippers.js',
    'templates/django-model.handlebars': 'dist/models/shipper.py',
    'templates/drf-serializer.handlebars': 'dist/serializers/shipper.py',
    'templates/sequelize-model.handlebars': 'dist/models/shipper.js'
  },
  '/tables/orders_tax_status': {
    'templates/create-table.handlebars': 'dist/orders-tax-status.js',
    'templates/django-model.handlebars': 'dist/models/orders_tax_status.py',
    'templates/drf-serializer.handlebars': 'dist/serializers/orders_tax_status.py',
    'templates/sequelize-model.handlebars': 'dist/models/orders-tax-status.js'
  },
  '/tables/orders_status': {
    'templates/create-table.handlebars': 'dist/orders-status.js',
    'templates/django-model.handlebars': 'dist/models/orders_status.py',
    'templates/drf-serializer.handlebars': 'dist/serializers/orders_status.py',
    'templates/sequelize-model.handlebars': 'dist/models/orders-status.js'
  },
  '/tables/orders': {
    'templates/create-table.handlebars': 'dist/orders.js',
    'templates/django-model.handlebars': 'dist/models/order.py',
    'templates/drf-serializer.handlebars': 'dist/serializers/order.py',
    'templates/sequelize-model.handlebars': 'dist/models/orders.js'
  },
  '/tables/products': {
    'templates/create-table.handlebars': 'dist/products.js',
    'templates/django-model.handlebars': 'dist/models/product.py',
    'templates/drf-serializer.handlebars': 'dist/serializers/product.py',
    'templates/sequelize-model.handlebars': 'dist/models/products.js'
  },
  '/tables/purchase_order_status': {
    'templates/create-table.handlebars': 'dist/purchase-order-status.js',
    'templates/django-model.handlebars': 'dist/models/purchase_order_status.py',
    'templates/drf-serializer.handlebars': 'dist/serializers/purchase_order_status.py',
    'templates/sequelize-model.handlebars': 'dist/models/purchase-order-status.js'
  },
  '/tables/suppliers': {
    'templates/create-table.handlebars': 'dist/suppliers.js',
    'templates/django-model.handlebars': 'dist/models/supplier.py',
    'templates/drf-serializer.handlebars': 'dist/serializers/supplier.py',
    'templates/sequelize-model.handlebars': 'dist/models/supplier.js'
  },
  '/tables/purchase_orders': {
    'templates/create-table.handlebars': 'dist/purchase-orders.js',
    'templates/django-model.handlebars': 'dist/models/purchase_order.py',
    'templates/drf-serializer.handlebars': 'dist/serializers/purchase_order.py',
    'templates/sequelize-model.handlebars': 'dist/models/purchase-order.js'
  },
  '/tables/inventory_transactions': {
    'templates/create-table.handlebars': 'dist/inventory-transactions.js',
    'templates/django-model.handlebars': 'dist/models/inventory_transaction.py',
    'templates/drf-serializer.handlebars': 'dist/serializers/inventory_transaction.py',
    'templates/sequelize-model.handlebars': 'dist/models/inventory-transaction.js'
  }
};

var helpers = Object.assign({}, require('handlebars-helpers')(), {
  // Convert MySQL data type to equivalent Django/Sequelize/SQLite data type
  dataType: function(dbms, dataType) {
    var dataTypes = {
      django: {
        BLOB:     'Binary',
        DATETIME: 'Date',
        DECIMAL:  'Decimal',
        DOUBLE:   'Float',
        INT:      'Integer',
        LONGBLOB: 'Binary',
        LONGTEXT: 'Text',
        VARCHAR:  'Char'
      },
      sequelize: {
        DATETIME: 'DATE',
        INT:      'INTEGER',
        LONGBLOB: 'BLOB',
        LONGTEXT: 'TEXT',
        VARCHAR:  'STRING'
      },
      sqlite: {
        DATETIME: 'REAL',
        DECIMAL:  'REAL',
        DOUBLE:   'REAL',
        LONGBLOB: 'BLOB',
        LONGTEXT: 'TEXT',
        VARCHAR:  'TEXT'
      }
    };

    return dataTypes && dataTypes[dbms] && dataTypes[dbms][dataType] ?
     dataTypes[dbms][dataType] :
     dataType;
  }
});

var schema = require('./northwind.json');

module.exports = {
  generators: generators,
  helpers:    helpers,
  schema:     schema
};
