### run

    node try-lotion.js


### query it

    export GCI=<GCI> # you get this after lotion starts

    lotion state $GCI

### send transaction

    lotion send $GCI '{ "nonce" : 1 }

    # check the state again
    lotion state $GCI'
