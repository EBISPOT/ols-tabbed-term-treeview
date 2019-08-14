"use strict"

$.jstree.defaults.core.data = true;
$.jstree.defaults.core.expand_selected_onload = true;

var OLSTermTypeTreeView = require("ols-term-type-treeview");

function OLSTabbedTermTreeView(olsIRI, ontology, termsDiv, propertiesDiv, individualsDiv, siblingsElm, viewModeElm, saveState) {
    this.siblingsElm = siblingsElm;
    this.viewModeElm = viewModeElm;
    this.saveState = saveState;
    this.termsTree = undefined;
    this.propertiesTree = undefined;
    this.individualsTree = undefined;

    if (termsDiv != undefined && termsDiv != "") {
        this.termsTree = new OLSTermTypeTreeView(olsIRI, ontology, termsDiv, "", "terms", siblingsElm, viewModeElm,
            saveState);
    }
    if (propertiesDiv != undefined && propertiesDiv != "") {
        this.propertiesTree = new OLSTermTypeTreeView(olsIRI, ontology, propertiesDiv, "", "property", siblingsElm, viewModeElm,
            saveState);
    }
    // if (individualsDiv != undefined && individualsDiv != "") {
    //     this.individualsTree = new OLSTermTypeTreeView(olsIRI, ontology, individualsDiv, "", "individual", showSiblings, viewMode,
    //         saveState);
    // }
}

OLSTabbedTermTreeView.prototype.draw =  function (showSiblings, viewMode) {
    if (this.termsTree != undefined) {
        this.termsTree.draw(showSiblings, viewMode);
    }

    if (this.propertiesTree != undefined) {
        this.propertiesTree.draw(showSiblings, viewMode);
    }

    if (this.individualsTree != undefined) {
        this.individualsTree.draw(showSiblings, viewMode);
    }
}

OLSTabbedTermTreeView.prototype.toggleOntologyView =  function () {
    if (this.termsTree != undefined) {
        this.termsTree.toggleOntologyView();
    }

    if (this.propertiesTree != undefined) {
        this.propertiesTree.toggleOntologyView();
    }

    if (this.individualsTree != undefined) {
        this.individualsTree.toggleOntologyView(elm);
    }
}


OLSTabbedTermTreeView.prototype.toggleSiblings =  function () {
    if (this.termsTree != undefined) {
        this.termsTree.toggleSiblings();
    }

    if (this.propertiesTree != undefined) {
        this.propertiesTree.toggleSiblings();
    }

    if (this.individualsTree != undefined) {
        this.individualsTree.toggleSiblings();
    }
}


module.exports = OLSTabbedTermTreeView;