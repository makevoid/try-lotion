let lotion = require('lotion')

let app = lotion({
  initialState: {
    count: 0
  }
})

const transactionHandler = (state, transaction) => {
	if (state.count === transaction.nonce) {
    console.log(transaction)
		state.count++
	}
}

app.use(transactionHandler)


app.start()
 .then((res) => console.log(res))
