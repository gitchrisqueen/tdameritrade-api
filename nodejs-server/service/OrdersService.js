'use strict';


/**
 * Get Orders by Path
 * Orders for a specific account.
 *
 * accountId Integer 
 * maxResults Integer  (optional)
 * fromEnteredTime Date  (optional)
 * toEnteredTime Date  (optional)
 * status String  (optional)
 * returns OrderGet
 **/
exports.accountsAccountIdOrdersGET = function(accountId,maxResults,fromEnteredTime,toEnteredTime,status) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "remainingQuantity" : 1.4658129805029452,
  "orderType" : {
    "schema" : "MARKET"
  },
  "orderStrategyType" : "SINGLE",
  "releaseTime" : "2000-01-23T04:56:07.000+00:00",
  "cancelable" : false,
  "orderId" : 2,
  "session" : {
    "schema" : "NORMAL"
  },
  "stopPriceOffset" : 5.637376656633329,
  "stopPriceLinkType" : "VALUE",
  "orderActivityCollection" : [ {
    "schema" : {
      "schema" : {
        "quantity" : 7.386281948385884,
        "executionType" : "FILL",
        "orderRamainingQuantity" : 1.2315135367772556,
        "activityType" : "EXECUTION",
        "executionLegs" : [ {
          "quantity" : 1.4894159098541704,
          "price" : 7.457744773683766,
          "legId" : 1,
          "mismarkedQuantity" : 6.84685269835264,
          "time" : "2000-01-23T04:56:07.000+00:00"
        }, {
          "quantity" : 1.4894159098541704,
          "price" : 7.457744773683766,
          "legId" : 1,
          "mismarkedQuantity" : 6.84685269835264,
          "time" : "2000-01-23T04:56:07.000+00:00"
        } ]
      }
    }
  }, {
    "schema" : {
      "schema" : {
        "quantity" : 7.386281948385884,
        "executionType" : "FILL",
        "orderRamainingQuantity" : 1.2315135367772556,
        "activityType" : "EXECUTION",
        "executionLegs" : [ {
          "quantity" : 1.4894159098541704,
          "price" : 7.457744773683766,
          "legId" : 1,
          "mismarkedQuantity" : 6.84685269835264,
          "time" : "2000-01-23T04:56:07.000+00:00"
        }, {
          "quantity" : 1.4894159098541704,
          "price" : 7.457744773683766,
          "legId" : 1,
          "mismarkedQuantity" : 6.84685269835264,
          "time" : "2000-01-23T04:56:07.000+00:00"
        } ]
      }
    }
  } ],
  "filledQuantity" : 6.027456183070403,
  "enteredTime" : "2000-01-23T04:56:07.000+00:00",
  "closedTime" : "2000-01-23T04:56:07.000+00:00",
  "duration" : {
    "schema" : "DAY"
  },
  "stopPriceLinkBasis" : "MANUAL",
  "destinationLinkName" : "destinationLinkName",
  "price" : 2.3021358869347655,
  "priceLinkType" : "VALUE",
  "tag" : "tag",
  "childOrderStrategies" : [ { }, { } ],
  "orderLegCollection" : [ {
    "orderLegType" : "EQUITY",
    "quantityType" : "ALL_SHARES",
    "quantity" : 9.301444243932576,
    "instruction" : "BUY",
    "legId" : 7,
    "instrument" : {
      "schema" : {
        "schema" : ""
      }
    },
    "positionEffect" : "OPENING"
  }, {
    "orderLegType" : "EQUITY",
    "quantityType" : "ALL_SHARES",
    "quantity" : 9.301444243932576,
    "instruction" : "BUY",
    "legId" : 7,
    "instrument" : {
      "schema" : {
        "schema" : ""
      }
    },
    "positionEffect" : "OPENING"
  } ],
  "taxLotMethod" : "FIFO",
  "specialInstruction" : "ALL_OR_NONE",
  "editable" : false,
  "stopType" : "STANDARD",
  "quality" : 0.8008281904610115,
  "accountId" : 4,
  "stopPrice" : 5.962133916683182,
  "statusDescription" : "statusDescription",
  "priceLinkBasis" : "MANUAL",
  "requestedDestination" : "INET",
  "cancelTime" : {
    "date" : "date",
    "shortFormat" : false
  },
  "activationPrice" : 3.616076749251911,
  "replacingOrderCollection" : [ { }, { } ],
  "complexOrderStrategyType" : "NONE",
  "status" : "AWAITING_PARENT_ORDER"
};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * Cancel Order
 * Cancel a specific order for a spcific account
 *
 * accountId Integer 
 * orderId Integer 
 * returns ErrorObject
 **/
exports.accountsAccountIdOrdersOrderIdDELETE = function(accountId,orderId) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "error" : "error"
};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * Get Order
 * Get a specific order for a specific account.
 *
 * accountId Integer 
 * orderId Integer 
 * returns OrderGet
 **/
exports.accountsAccountIdOrdersOrderIdGET = function(accountId,orderId) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "remainingQuantity" : 1.4658129805029452,
  "orderType" : {
    "schema" : "MARKET"
  },
  "orderStrategyType" : "SINGLE",
  "releaseTime" : "2000-01-23T04:56:07.000+00:00",
  "cancelable" : false,
  "orderId" : 2,
  "session" : {
    "schema" : "NORMAL"
  },
  "stopPriceOffset" : 5.637376656633329,
  "stopPriceLinkType" : "VALUE",
  "orderActivityCollection" : [ {
    "schema" : {
      "schema" : {
        "quantity" : 7.386281948385884,
        "executionType" : "FILL",
        "orderRamainingQuantity" : 1.2315135367772556,
        "activityType" : "EXECUTION",
        "executionLegs" : [ {
          "quantity" : 1.4894159098541704,
          "price" : 7.457744773683766,
          "legId" : 1,
          "mismarkedQuantity" : 6.84685269835264,
          "time" : "2000-01-23T04:56:07.000+00:00"
        }, {
          "quantity" : 1.4894159098541704,
          "price" : 7.457744773683766,
          "legId" : 1,
          "mismarkedQuantity" : 6.84685269835264,
          "time" : "2000-01-23T04:56:07.000+00:00"
        } ]
      }
    }
  }, {
    "schema" : {
      "schema" : {
        "quantity" : 7.386281948385884,
        "executionType" : "FILL",
        "orderRamainingQuantity" : 1.2315135367772556,
        "activityType" : "EXECUTION",
        "executionLegs" : [ {
          "quantity" : 1.4894159098541704,
          "price" : 7.457744773683766,
          "legId" : 1,
          "mismarkedQuantity" : 6.84685269835264,
          "time" : "2000-01-23T04:56:07.000+00:00"
        }, {
          "quantity" : 1.4894159098541704,
          "price" : 7.457744773683766,
          "legId" : 1,
          "mismarkedQuantity" : 6.84685269835264,
          "time" : "2000-01-23T04:56:07.000+00:00"
        } ]
      }
    }
  } ],
  "filledQuantity" : 6.027456183070403,
  "enteredTime" : "2000-01-23T04:56:07.000+00:00",
  "closedTime" : "2000-01-23T04:56:07.000+00:00",
  "duration" : {
    "schema" : "DAY"
  },
  "stopPriceLinkBasis" : "MANUAL",
  "destinationLinkName" : "destinationLinkName",
  "price" : 2.3021358869347655,
  "priceLinkType" : "VALUE",
  "tag" : "tag",
  "childOrderStrategies" : [ { }, { } ],
  "orderLegCollection" : [ {
    "orderLegType" : "EQUITY",
    "quantityType" : "ALL_SHARES",
    "quantity" : 9.301444243932576,
    "instruction" : "BUY",
    "legId" : 7,
    "instrument" : {
      "schema" : {
        "schema" : ""
      }
    },
    "positionEffect" : "OPENING"
  }, {
    "orderLegType" : "EQUITY",
    "quantityType" : "ALL_SHARES",
    "quantity" : 9.301444243932576,
    "instruction" : "BUY",
    "legId" : 7,
    "instrument" : {
      "schema" : {
        "schema" : ""
      }
    },
    "positionEffect" : "OPENING"
  } ],
  "taxLotMethod" : "FIFO",
  "specialInstruction" : "ALL_OR_NONE",
  "editable" : false,
  "stopType" : "STANDARD",
  "quality" : 0.8008281904610115,
  "accountId" : 4,
  "stopPrice" : 5.962133916683182,
  "statusDescription" : "statusDescription",
  "priceLinkBasis" : "MANUAL",
  "requestedDestination" : "INET",
  "cancelTime" : {
    "date" : "date",
    "shortFormat" : false
  },
  "activationPrice" : 3.616076749251911,
  "replacingOrderCollection" : [ { }, { } ],
  "complexOrderStrategyType" : "NONE",
  "status" : "AWAITING_PARENT_ORDER"
};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * Replace Order
 * Replace an existing order for an account. The existing order will be replaced by the new order. Once replaced, the old order will be canceled and a new order will be created. See our Place Order Samples Guide - https://developer.tdameritrade.com/content/place-order-samples.
 *
 * accountId Integer 
 * orderId Integer 
 * returns OrderGet
 **/
exports.accountsAccountIdOrdersOrderIdPUT = function(accountId,orderId) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "remainingQuantity" : 1.4658129805029452,
  "orderType" : {
    "schema" : "MARKET"
  },
  "orderStrategyType" : "SINGLE",
  "releaseTime" : "2000-01-23T04:56:07.000+00:00",
  "cancelable" : false,
  "orderId" : 2,
  "session" : {
    "schema" : "NORMAL"
  },
  "stopPriceOffset" : 5.637376656633329,
  "stopPriceLinkType" : "VALUE",
  "orderActivityCollection" : [ {
    "schema" : {
      "schema" : {
        "quantity" : 7.386281948385884,
        "executionType" : "FILL",
        "orderRamainingQuantity" : 1.2315135367772556,
        "activityType" : "EXECUTION",
        "executionLegs" : [ {
          "quantity" : 1.4894159098541704,
          "price" : 7.457744773683766,
          "legId" : 1,
          "mismarkedQuantity" : 6.84685269835264,
          "time" : "2000-01-23T04:56:07.000+00:00"
        }, {
          "quantity" : 1.4894159098541704,
          "price" : 7.457744773683766,
          "legId" : 1,
          "mismarkedQuantity" : 6.84685269835264,
          "time" : "2000-01-23T04:56:07.000+00:00"
        } ]
      }
    }
  }, {
    "schema" : {
      "schema" : {
        "quantity" : 7.386281948385884,
        "executionType" : "FILL",
        "orderRamainingQuantity" : 1.2315135367772556,
        "activityType" : "EXECUTION",
        "executionLegs" : [ {
          "quantity" : 1.4894159098541704,
          "price" : 7.457744773683766,
          "legId" : 1,
          "mismarkedQuantity" : 6.84685269835264,
          "time" : "2000-01-23T04:56:07.000+00:00"
        }, {
          "quantity" : 1.4894159098541704,
          "price" : 7.457744773683766,
          "legId" : 1,
          "mismarkedQuantity" : 6.84685269835264,
          "time" : "2000-01-23T04:56:07.000+00:00"
        } ]
      }
    }
  } ],
  "filledQuantity" : 6.027456183070403,
  "enteredTime" : "2000-01-23T04:56:07.000+00:00",
  "closedTime" : "2000-01-23T04:56:07.000+00:00",
  "duration" : {
    "schema" : "DAY"
  },
  "stopPriceLinkBasis" : "MANUAL",
  "destinationLinkName" : "destinationLinkName",
  "price" : 2.3021358869347655,
  "priceLinkType" : "VALUE",
  "tag" : "tag",
  "childOrderStrategies" : [ { }, { } ],
  "orderLegCollection" : [ {
    "orderLegType" : "EQUITY",
    "quantityType" : "ALL_SHARES",
    "quantity" : 9.301444243932576,
    "instruction" : "BUY",
    "legId" : 7,
    "instrument" : {
      "schema" : {
        "schema" : ""
      }
    },
    "positionEffect" : "OPENING"
  }, {
    "orderLegType" : "EQUITY",
    "quantityType" : "ALL_SHARES",
    "quantity" : 9.301444243932576,
    "instruction" : "BUY",
    "legId" : 7,
    "instrument" : {
      "schema" : {
        "schema" : ""
      }
    },
    "positionEffect" : "OPENING"
  } ],
  "taxLotMethod" : "FIFO",
  "specialInstruction" : "ALL_OR_NONE",
  "editable" : false,
  "stopType" : "STANDARD",
  "quality" : 0.8008281904610115,
  "accountId" : 4,
  "stopPrice" : 5.962133916683182,
  "statusDescription" : "statusDescription",
  "priceLinkBasis" : "MANUAL",
  "requestedDestination" : "INET",
  "cancelTime" : {
    "date" : "date",
    "shortFormat" : false
  },
  "activationPrice" : 3.616076749251911,
  "replacingOrderCollection" : [ { }, { } ],
  "complexOrderStrategyType" : "NONE",
  "status" : "AWAITING_PARENT_ORDER"
};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * Get Orders By Query
 * All orders for a specific account or, if account ID isn't specified, orders will be returned for all linked accounts.
 *
 * accountId Integer  (optional)
 * maxResults Integer  (optional)
 * fromEnteredTime Date  (optional)
 * toEnteredTime Date  (optional)
 * status String  (optional)
 * returns OrderGet
 **/
exports.ordersGET = function(accountId,maxResults,fromEnteredTime,toEnteredTime,status) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "remainingQuantity" : 1.4658129805029452,
  "orderType" : {
    "schema" : "MARKET"
  },
  "orderStrategyType" : "SINGLE",
  "releaseTime" : "2000-01-23T04:56:07.000+00:00",
  "cancelable" : false,
  "orderId" : 2,
  "session" : {
    "schema" : "NORMAL"
  },
  "stopPriceOffset" : 5.637376656633329,
  "stopPriceLinkType" : "VALUE",
  "orderActivityCollection" : [ {
    "schema" : {
      "schema" : {
        "quantity" : 7.386281948385884,
        "executionType" : "FILL",
        "orderRamainingQuantity" : 1.2315135367772556,
        "activityType" : "EXECUTION",
        "executionLegs" : [ {
          "quantity" : 1.4894159098541704,
          "price" : 7.457744773683766,
          "legId" : 1,
          "mismarkedQuantity" : 6.84685269835264,
          "time" : "2000-01-23T04:56:07.000+00:00"
        }, {
          "quantity" : 1.4894159098541704,
          "price" : 7.457744773683766,
          "legId" : 1,
          "mismarkedQuantity" : 6.84685269835264,
          "time" : "2000-01-23T04:56:07.000+00:00"
        } ]
      }
    }
  }, {
    "schema" : {
      "schema" : {
        "quantity" : 7.386281948385884,
        "executionType" : "FILL",
        "orderRamainingQuantity" : 1.2315135367772556,
        "activityType" : "EXECUTION",
        "executionLegs" : [ {
          "quantity" : 1.4894159098541704,
          "price" : 7.457744773683766,
          "legId" : 1,
          "mismarkedQuantity" : 6.84685269835264,
          "time" : "2000-01-23T04:56:07.000+00:00"
        }, {
          "quantity" : 1.4894159098541704,
          "price" : 7.457744773683766,
          "legId" : 1,
          "mismarkedQuantity" : 6.84685269835264,
          "time" : "2000-01-23T04:56:07.000+00:00"
        } ]
      }
    }
  } ],
  "filledQuantity" : 6.027456183070403,
  "enteredTime" : "2000-01-23T04:56:07.000+00:00",
  "closedTime" : "2000-01-23T04:56:07.000+00:00",
  "duration" : {
    "schema" : "DAY"
  },
  "stopPriceLinkBasis" : "MANUAL",
  "destinationLinkName" : "destinationLinkName",
  "price" : 2.3021358869347655,
  "priceLinkType" : "VALUE",
  "tag" : "tag",
  "childOrderStrategies" : [ { }, { } ],
  "orderLegCollection" : [ {
    "orderLegType" : "EQUITY",
    "quantityType" : "ALL_SHARES",
    "quantity" : 9.301444243932576,
    "instruction" : "BUY",
    "legId" : 7,
    "instrument" : {
      "schema" : {
        "schema" : ""
      }
    },
    "positionEffect" : "OPENING"
  }, {
    "orderLegType" : "EQUITY",
    "quantityType" : "ALL_SHARES",
    "quantity" : 9.301444243932576,
    "instruction" : "BUY",
    "legId" : 7,
    "instrument" : {
      "schema" : {
        "schema" : ""
      }
    },
    "positionEffect" : "OPENING"
  } ],
  "taxLotMethod" : "FIFO",
  "specialInstruction" : "ALL_OR_NONE",
  "editable" : false,
  "stopType" : "STANDARD",
  "quality" : 0.8008281904610115,
  "accountId" : 4,
  "stopPrice" : 5.962133916683182,
  "statusDescription" : "statusDescription",
  "priceLinkBasis" : "MANUAL",
  "requestedDestination" : "INET",
  "cancelTime" : {
    "date" : "date",
    "shortFormat" : false
  },
  "activationPrice" : 3.616076749251911,
  "replacingOrderCollection" : [ { }, { } ],
  "complexOrderStrategyType" : "NONE",
  "status" : "AWAITING_PARENT_ORDER"
};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * Place Order
 * Place an order for a specific account. See our Place Order Samples Guide - https://developer.tdameritrade.com/content/place-order-samples.
 *
 * body OrderGet  (optional)
 * accountId Integer 
 * returns OrderGet
 **/
exports.ordersPOST = function(body,accountId) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "remainingQuantity" : 1.4658129805029452,
  "orderType" : {
    "schema" : "MARKET"
  },
  "orderStrategyType" : "SINGLE",
  "releaseTime" : "2000-01-23T04:56:07.000+00:00",
  "cancelable" : false,
  "orderId" : 2,
  "session" : {
    "schema" : "NORMAL"
  },
  "stopPriceOffset" : 5.637376656633329,
  "stopPriceLinkType" : "VALUE",
  "orderActivityCollection" : [ {
    "schema" : {
      "schema" : {
        "quantity" : 7.386281948385884,
        "executionType" : "FILL",
        "orderRamainingQuantity" : 1.2315135367772556,
        "activityType" : "EXECUTION",
        "executionLegs" : [ {
          "quantity" : 1.4894159098541704,
          "price" : 7.457744773683766,
          "legId" : 1,
          "mismarkedQuantity" : 6.84685269835264,
          "time" : "2000-01-23T04:56:07.000+00:00"
        }, {
          "quantity" : 1.4894159098541704,
          "price" : 7.457744773683766,
          "legId" : 1,
          "mismarkedQuantity" : 6.84685269835264,
          "time" : "2000-01-23T04:56:07.000+00:00"
        } ]
      }
    }
  }, {
    "schema" : {
      "schema" : {
        "quantity" : 7.386281948385884,
        "executionType" : "FILL",
        "orderRamainingQuantity" : 1.2315135367772556,
        "activityType" : "EXECUTION",
        "executionLegs" : [ {
          "quantity" : 1.4894159098541704,
          "price" : 7.457744773683766,
          "legId" : 1,
          "mismarkedQuantity" : 6.84685269835264,
          "time" : "2000-01-23T04:56:07.000+00:00"
        }, {
          "quantity" : 1.4894159098541704,
          "price" : 7.457744773683766,
          "legId" : 1,
          "mismarkedQuantity" : 6.84685269835264,
          "time" : "2000-01-23T04:56:07.000+00:00"
        } ]
      }
    }
  } ],
  "filledQuantity" : 6.027456183070403,
  "enteredTime" : "2000-01-23T04:56:07.000+00:00",
  "closedTime" : "2000-01-23T04:56:07.000+00:00",
  "duration" : {
    "schema" : "DAY"
  },
  "stopPriceLinkBasis" : "MANUAL",
  "destinationLinkName" : "destinationLinkName",
  "price" : 2.3021358869347655,
  "priceLinkType" : "VALUE",
  "tag" : "tag",
  "childOrderStrategies" : [ { }, { } ],
  "orderLegCollection" : [ {
    "orderLegType" : "EQUITY",
    "quantityType" : "ALL_SHARES",
    "quantity" : 9.301444243932576,
    "instruction" : "BUY",
    "legId" : 7,
    "instrument" : {
      "schema" : {
        "schema" : ""
      }
    },
    "positionEffect" : "OPENING"
  }, {
    "orderLegType" : "EQUITY",
    "quantityType" : "ALL_SHARES",
    "quantity" : 9.301444243932576,
    "instruction" : "BUY",
    "legId" : 7,
    "instrument" : {
      "schema" : {
        "schema" : ""
      }
    },
    "positionEffect" : "OPENING"
  } ],
  "taxLotMethod" : "FIFO",
  "specialInstruction" : "ALL_OR_NONE",
  "editable" : false,
  "stopType" : "STANDARD",
  "quality" : 0.8008281904610115,
  "accountId" : 4,
  "stopPrice" : 5.962133916683182,
  "statusDescription" : "statusDescription",
  "priceLinkBasis" : "MANUAL",
  "requestedDestination" : "INET",
  "cancelTime" : {
    "date" : "date",
    "shortFormat" : false
  },
  "activationPrice" : 3.616076749251911,
  "replacingOrderCollection" : [ { }, { } ],
  "complexOrderStrategyType" : "NONE",
  "status" : "AWAITING_PARENT_ORDER"
};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}

