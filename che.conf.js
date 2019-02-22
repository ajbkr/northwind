const helpers = {
  ...require('handlebars-helpers')(),
  // Convert MySQL data type to equivalent Django/Sequelize/SQLite data type
  dataType: (dbms, dataType) => {
    const dataTypes = {
      django: {
        BLOB: 'Binary',
        DATETIME: 'Date',
        DECIMAL: 'Decimal',
        DOUBLE: 'Float',
        INT: 'Integer',
        LONGBLOB: 'Binary',
        LONGTEXT: 'Text',
        VARCHAR: 'Char'
      },
      sequelize: {
        DATETIME: 'DATE',
        INT: 'INTEGER',
        LONGBLOB: 'BLOB',
        LONGTEXT: 'TEXT',
        VARCHAR: 'STRING'
      },
      sqlite: {
        DATETIME: 'REAL',
        DECIMAL: 'REAL',
        DOUBLE: 'REAL',
        LONGBLOB: 'BLOB',
        LONGTEXT: 'TEXT',
        VARCHAR: 'TEXT'
      }
    }

    return dataTypes && dataTypes[dbms] && dataTypes[dbms][dataType]
      ? dataTypes[dbms][dataType]
      : dataType
  }
}

const schema = require('./northwind.json')

const generators = Object.keys(schema.tables).reduce((objekt, table) => ({
  ...objekt,
  [`/tables/${table}`]: {
    'templates/sqlite-create-table.handlebars': 'dist/' + table.replace(/_/g, '-') + '.js',
    'templates/django-model.handlebars': `dist/models/${table}.py`,
    'templates/drf-serializer.handlebars': `dist/serializers/${table}.py`,
    'templates/sequelize-model.handlebars': 'dist/models/' + table.replace(/_/g, '-') + '.js'
  }
}), {})

module.exports = {
  generators,
  helpers,
  schema
}
