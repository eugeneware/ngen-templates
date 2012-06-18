{{project}} = require '../lib/{{project}}'
require 'should'

{inspect} = require 'util'

log = (msg) ->
	console.log inspect(msg, true, null)

describe '{{project}}', ->
	it 'should be able to instantiate {{project}} ', (done) ->
		{{project}}.should.exist
		done()

	it 'should have a version', (done) ->
		{{project}}.version.should.match /^\d+\.\d+\.\d+$/
		done()
