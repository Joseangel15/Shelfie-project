

module.exports = {

    

    getBins: (req, res, next) => {

        const { id } = req.params;
        const db = req.app.get('db')


        db.find_all([id]).then(dbResult => {
            res.status(200).send(dbResult)
        })
    },


    //Get from Bins

    getSpecBin: (req, res, next) => {

        const { id } = req.params;
        

        const db = req.app.get('db')


        db.find_SpecBin([id]).then(dbResult => {
            res.status(200).send(dbResult)
        })
    },

    


    //Add to bins

    addBin: (req, res, next) => {
        const db = req.app.get('db');
        const { id } = req.params
        const {
            product_name,
            product_price,
            shelve,
            bin

        } = req.body

        db.add_product([product_name, product_price, shelve, bin, id])

            .then(user => { res.status(200).send(user); })

    },


    //Delete Controllers

    deleteProduct: (req, res, next ) => {
        const {id} = req.params
        
        const db = req.app.get('db');
        db.delete_Prod([id])

        .then(user => { res.status(200).send(user);

        })
    },

    

    

    

}