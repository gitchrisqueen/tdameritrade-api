'use strict';


/**
 * Get Saved Orders by Path
 * Saved orders for a specific account.
 *
 * accountId Integer 
 * returns OrderGet
 **/
exports.accountsAccountIdSavedordersGET = function(accountId) {
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
    "activityType" : {
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
    }
  }, {
    "activityType" : {
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
 * Create Saved Orders
 * Save an order for a specific account. See our Place Order Samples Guide - https://developer.tdameritrade.com/content/place-order-samples.
 *
 * body OrderGet  (optional)
 * accountId Integer 
 * returns OrderGet
 **/
exports.accountsAccountIdSavedordersPOST = function(body,accountId) {
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
    "activityType" : {
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
    }
  }, {
    "activityType" : {
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
 * Delete Saved Orders
 * Delete a specific saved order for a specific account.
 *
 * accountId Integer 
 * savedOrderId Integer 
 * returns EASObject
 **/
exports.accountsAccountIdSavedordersSavedOrderIdDELETE = function(accountId,savedOrderId) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "access_token" : "access_token",
  "refresh_token_expires_in" : 6,
  "refresh_token" : "refresh_token",
  "scope" : "scope",
  "token_type" : "token_type",
  "expires_in" : 0
};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * Get Saved Orders
 * Specific saved order by its ID, for a specific account.
 *
 * accountId Integer 
 * savedOrderId Integer 
 * returns OrderGet
 **/
exports.accountsAccountIdSavedordersSavedOrderIdGET = function(accountId,savedOrderId) {
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
    "activityType" : {
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
    }
  }, {
    "activityType" : {
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
 * Replace Saved Orders
 * Replace an existing saved order for an account. The existing saved order will be replaced by the new order. see our Place Order Samples Guide - Click here.
 *
 * body OrderGet  (optional)
 * accountId Integer 
 * savedOrderId Integer 
 * returns OrderGet
 **/
exports.accountsAccountIdSavedordersSavedOrderIdPUT = function(body,accountId,savedOrderId) {
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
    "activityType" : {
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
    }
  }, {
    "activityType" : {
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

