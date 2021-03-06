
serve: node_modules
	@node_modules/serve/bin/serve -Slojp 0

test: node_modules
	@node_modules/jsmd/bin/jsmd Readme.md
	@node_modules/hydro/bin/hydro test/*.test.js \
		--formatter node_modules/hydro-dot \
		--setup test/hydro.conf.js

node_modules: package.json
	@packin install --meta $< --folder $@
	@ln -sfn .. $@/tape

.PHONY: serve test
