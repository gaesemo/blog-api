#!/usr/bin/env bash

set -e

root=$(git rev-parse --show-toplevel)

function main() {
    export PATH=${PATH}:${root}/node_modules/.bin
    pushd ${root}/go
    [ -n "$(go env GOBIN)" ] && export PATH=${PATH}:$(go env GOBIN)
    [ -n "$(go env GOPATH)" ] && export PATH=${PATH}:$(go env GOPATH)/bin
    popd

    pkgx buf lint
    pkgx buf generate
}

main
