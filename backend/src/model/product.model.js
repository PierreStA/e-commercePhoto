const db =require("./db.js");

const findAll= async ()=> {
    try{
        const [products] = await db.query("select * from `product`");

        return products;
    }catch(e){
        console.log(e);
    }
};

const findOne= async (id)=> {
    try{
        const [product] = await db.query("select * from `product` where id = ? ", [id]);

        return product;
    }catch(e){
        console.log(e);
    }
};

const addOne = async (product) => {

    try{

        const{ description, price, photo } = product
        const [result] = await db.query("insert into `product` (description, price, photo) values (?,?,?)", [product.description, product.price, product.photo]
        );

    return { id: result.insertId,description, price, photo  };  /*id: result.insertId clé SQL2 qui renvoie l'id de lutilisateur crée */
    } catch (error) {
        throw new Error(`Impossible de créer le produit: ${error}`);
    }
}


const updateOne = async function (product) {
  try {
    const result = await db.query(
       "UPDATE `product` SET description = ?, price = ?, photo = ? WHERE id = ?",
      [product.description, product.price, product.photo, product.id]
    );
    return result;
  } catch (error) {
    throw new Error(`Impossible de mettre à jour le produit : ${error}`);
  }
};

const deleteOne = async function (id) {
  try {
    const result = await db.query(
      "DELETE FROM `product` WHERE id = ?",
      [id]
    );
    return result;
  } catch (error) {
    throw new Error(`Impossible de supprimer le produit : ${error}`);
  }
};


module.exports = { findAll, findOne,addOne ,updateOne, deleteOne};