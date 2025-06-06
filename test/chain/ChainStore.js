import assert from "assert";
import {Apis, ChainConfig} from "omnibazaarjs-ws";
import { ChainStore, FetchChain } from "../../lib";

var coreAsset;

describe("ChainStore", () => {
    // Connect once for all tests
    before(function() {
        /* use wss://bitshares.openledger.info/ws if no local node is available */
        return Apis.instance("wss://eu.openledger.info/ws", true).init_promise.then(function (result) {
            coreAsset = result[0].network.core_asset;
            return ChainStore.init();
        });
    });

    // Unsubscribe everything after each test
    afterEach(function() {
        ChainStore.subscribers = new Set();
        ChainStore.clearCache();
    });

    after(function() {
        ChainConfig.reset();
    });

    describe("Subscriptions", function() {

        it("Asset not found", function() {
            return new Promise( function(resolve) {
                ChainStore.subscribe(function() {
                    if (ChainStore.getAsset(coreAsset) !== undefined) {
                        assert(ChainStore.getAsset("NOTFOUND") === null);
                        resolve();
                    }
                });
                assert(ChainStore.getAsset("NOTFOUND") === undefined);
            });
        });

        it("Asset by name", function() {
            FetchChain("getAccount", "swoopyyy7").then((res) => {
                console.log("REEEEESUUUUULT", res);
            });
            return new Promise( function(resolve) {
                ChainStore.subscribe(function() {
                    if (ChainStore.getAsset(coreAsset) !== undefined) {
                        assert(ChainStore.getAsset(coreAsset) != null);
                        resolve();
                    }
                });
                assert(ChainStore.getAsset(coreAsset) === undefined);
            });
        });

        it("Asset by id", function() {
            return new Promise( function(resolve) {
                ChainStore.subscribe(function() {
                    if (ChainStore.getAsset("1.3.121") !== undefined) {
                        assert(ChainStore.getAsset("1.3.121") != null);
                        resolve();
                    }
                });
                assert(ChainStore.getAsset("1.3.0") === undefined);
            });
        });

        it("Object by id", function() {
            return new Promise( function(resolve) {
                ChainStore.subscribe(function() {
                    if (ChainStore.getObject("2.0.0") !== undefined) {
                        assert(ChainStore.getObject("2.0.0") != null);
                        resolve();
                    }
                });
                assert(ChainStore.getObject("2.0.0") === undefined);
            });
        });

        it("Account by id", function() {
            return new Promise( function(resolve) {
                ChainStore.subscribe(function() {
                    if (ChainStore.getAccount("1.2.0") !== undefined) {
                        assert(ChainStore.getAccount("1.2.0") != null);
                        resolve();
                    }
                });
                assert(ChainStore.getAccount("1.2.0") === undefined);
            });
        });

        it("Account by name", function() {
            return new Promise( function(resolve) {
                ChainStore.subscribe(function() {
                    if (ChainStore.getAccount("proxy-to-self") !== undefined) {

                        assert(ChainStore.getAccount("proxy-to-self") != null);
                        resolve();
                    }
                });
                assert(ChainStore.getAccount("proxy-to-self") === undefined);
            });
        });
    });
});
