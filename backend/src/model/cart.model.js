const db =require("./db.js");

const findOne= async (id)=> {
    try{
        const [cart] = await db.query("select * from `cart` where id = ? ", [id]);

        return cart;
    }catch(e){
        console.log(e);
    }
};

const addOne = async (cart) => {

    try{

        const{ userId } = cart
        const [result] = await db.query("insert into `cart` (user_id) values (?)", [cart.userId]
        );

    return { id: result.insertId, userId };  /*id: result.insertId clé SQL2 qui renvoie l'id de lutilisateur crée */
    } catch (error) {
        throw new Error(`Impossible de créer le panier: ${error}`);
    }
}


module.exports = { findOne,addOne };