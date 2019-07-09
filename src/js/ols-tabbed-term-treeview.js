"use strict"

$.jstree.defaults.core.data = true;
$.jstree.defaults.core.expand_selected_onload = true;

var OLSTermTypeTreeView = require("ols-term-type-treeview");

function OLSTabbedTermTreeView(olsIRI, ontology, termsDiv, propertiesDiv, individualsDiv, showSiblings, viewModeElmId, saveState) {
    this.showSiblings = showSiblings;
    this.viewModeElmId = viewModeElmId;
    this.saveState = saveState;
    this.termsTree = undefined;
    this.propertiesTree = undefined;
    this.individualsTree = undefined;

    if (termsDiv != undefined && termsDiv != "") {
        this.termsTree = new OLSTermTypeTreeView(olsIRI, ontology, termsDiv, "", "terms", showSiblings, viewModeElmId,
            saveState);
    }
    if (propertiesDiv != undefined && propertiesDiv != "") {
        this.propertiesTree = new OLSTermTypeTreeView(olsIRI, ontology, propertiesDiv, "", "property", showSiblings, viewModeElmId,
            saveState);
    }
    // if (individualsDiv != undefined && individualsDiv != "") {
    //     this.individualsTree = new OLSTermTypeTreeView(olsIRI, ontology, individualsDiv, "", "individual", showSiblings, viewMode,
    //         saveState);
    // }
}

OLSTabbedTermTreeView.prototype.draw =  function () {
    if (this.termsTree != undefined) {
        this.termsTree.draw();
    }

    if (this.propertiesTree != undefined) {
        this.propertiesTree.draw();
    }

    if (this.individualsTree != undefined) {
        this.individualsTree.draw();
    }
}

OLSTabbedTermTreeView.prototype.toggleOntologyView =  function (elm) {
    if (this.termsTree != undefined) {
        this.termsTree.toggleOntologyView(elm);
    }

    if (this.propertiesTree != undefined) {
        this.propertiesTree.toggleOntologyView(elm);
    }

    if (this.individualsTree != undefined) {
        this.individualsTree.toggleOntologyView(elm);
    }
}


OLSTabbedTermTreeView.prototype.toggleSiblings =  function (elm) {
    if (this.termsTree != undefined) {
        this.termsTree.toggleSiblings(elm);
    }

    if (this.propertiesTree != undefined) {
        this.propertiesTree.toggleSiblings(elm);
    }

    if (this.individualsTree != undefined) {
        this.individualsTree.toggleSiblings(elm);
    }
}


module.exports = OLSTabbedTermTreeView;