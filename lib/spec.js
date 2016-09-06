/**
 * https://github.com/swagger-api/swagger-spec/blob/master/versions/2.0.md#dataTypeFormat
 */

const types = {
  integer: {
    type: 'integer',
    format: 'int32'
  },
  float: {
    type: 'number',
    format: 'float'
  },
  double: {
    type: 'number',
    format: 'double'
  },
  string: {
    type: 'string',
    format: 'string'
  },
  binary: {
    type: 'string',
    format: 'binary'
  },
  boolean: {
    type: 'boolean'
  },
  date: {
    type: 'string',
    format: 'date'
  },
  datetime: {
    type: 'string',
    format: 'date-time'
  },
  collection: {
    type: 'array',
  }
}

const typeMap = {
  text: 'string',
  json: 'string'
}

const Spec = {
  getPropertyType (attrDescObj) {
    let wltype = attrDescObj.type
    if(attrDescObj.collection) {
      wltype = 'collection'
    }
    var ptype = types[typeMap[wltype] || wltype]
    if(!ptype) {
      ptype = {
        type:'string',
        format:'string'
      }
    }
    return ptype;
  }
}

export default Spec
