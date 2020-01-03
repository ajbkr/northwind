const template = require('lodash.template')

const helpers = {
  ...require('template-helpers')('string'),
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

const compile = string => template(string, { imports: helpers })

const schema = require('./northwind.json')

const generators = Object.keys(schema.tables).reduce((objekt, table) => ({
  ...objekt,
  [`/tables/${table}`]: {
    'templates/django-model.jst': `dist/models/${table}.py`,
    'templates/drf-serializer.jst': `dist/serializers/${table}.py`,
    'templates/sequelize-model.jst': 'dist/models/' + table.replace(/_/g, '-') + '.js',
    'templates/sql-create-table.jst': 'dist/sql/' + table.replace(/_/g, '-') + '.sql',
    'templates/sqlite-create-table.jst': 'dist/' + table.replace(/_/g, '-') + '.js'
  }
}), {})

module.exports = {
  compile,
  generators,
  schema
}
