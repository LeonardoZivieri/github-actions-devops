'use strict'

const { describe, it } = require("node:test")
const build = require('./server');
const assert = require("assert");

describe("Server must show an hello in index page", () => {
    const server = build();

    it("Need to contain hello in body response", async () => {
        const response = await server.inject({
            method: 'GET',
            url: '/'
        })

        assert.equal(response.statusCode, 200)
        assert(response.body.includes("hello"))
    })
})